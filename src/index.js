#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import util from 'util';

import yargs from 'yargs';
import { listObjectVersions, getObject } from './lib/s3';

const mkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

const { argv } = yargs
  .usage('$0 [options]')
  .help('h')
  .alias('h', 'help')
  .demandOption('bucket')
  .option('bucket', {
    alias: 'b',
    description: 'Bucket name',
    type: 'string',
  })
  .option('prefix', {
    alias: '-p',
    description: 'Prefix for files',
    type: 'string',
  })
  .option('out-dir', {
    alias: 'd',
    description: 'output',
    type: 'string',
    default: process.cwd(),
  });

const { bucket, prefix, outDir } = argv;

(async () => {
  if (prefix) {
    const data = await listObjectVersions({ Bucket: bucket, Prefix: prefix });

    for (const version of data.Versions) {
      const ts = new Date(version.LastModified).getTime();

      const splited = version.Key.split(/\//gi);
      const filename = `${ts}_${splited.splice(splited.length - 1)[0]}`;
      const dir = path.join(outDir, splited.join('/'));

      await mkdir(dir, { recursive: true });

      const object = await getObject({
        VersionId: version.VersionId,
        Key: version.Key,
        Bucket: bucket,
      });

      console.log(`${version.Key} is downloading...`);

      await writeFile(path.join(dir, filename), object.Body);
    }
  }
})();
