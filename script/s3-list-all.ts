require('dotenv').config();

import AWS from "aws-sdk";

if (!process.env.S3_BUCKET_NAME) throw Error("Undefined S3_BUCKET_NAME");
if (!process.env.S3_ACCESS_KEY) throw Error("Undefined S3_ACCESS_KEY");
if (!process.env.S3_SECRET) throw Error("Undefined S3_SECRET");
if (!process.env.S3_FILE_PREFIX) throw Error("Undefined S3_FILE_PREFIX");

AWS.config.update({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET
  }
});

const s3 = new AWS.S3();

const params = {
  Bucket: process.env.S3_BUCKET_NAME!,
  Prefix: process.env.S3_FILE_PREFIX
}

const listAll = () => new Promise<void>((resolve, reject) => {
  s3.listObjectsV2(params)
    .promise()
    .then((response) => {
      if (response.Contents) {
        let lastUpdated: Date | undefined = undefined;

        response.Contents.forEach(v => {
          console.log({
            Key: v.Key,
            LastModified: v.LastModified,
            Size: v.Size
          });

          if (!lastUpdated) lastUpdated = v.LastModified!;
          else if (v.LastModified! > lastUpdated) lastUpdated = v.LastModified!;
        });

        console.log('------');
        console.log(`Total items: ${response.Contents.length}`);
        console.log(`Last updated: ${lastUpdated}`);
      }

      resolve();
    })
    .catch(reject);
});

async function main() {
  await listAll();
}

main();