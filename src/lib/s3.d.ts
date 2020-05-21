import { S3 } from "aws-sdk";

export function listObjectVersions(params:S3.Types.ListObjectVersionsRequest): Promise<S3.Types.ListObjectVersionsOutput>
export function getObject(params:S3.Types.GetObjectRequest): Promise<S3.Types.GetObjectOutput>