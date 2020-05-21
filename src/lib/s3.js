import AWS from 'aws-sdk';
import util from 'util';

const s3 = new AWS.S3();

export const listObjectVersions = util.promisify(
  s3.listObjectVersions.bind(s3)
);
export const getObject = util.promisify(s3.getObject.bind(s3));
