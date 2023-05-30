require('dotenv').config();

import fs from "fs/promises";
import path from "path";
import AWS, { S3 } from "aws-sdk";

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

const dirPath = path.join(__dirname, '../public/static');

const uploadS3 = (params: S3.Types.PutObjectRequest) => new Promise<void>((resolve, reject) => {
  s3.upload(params)
    .promise()
    .then((response) => {
      console.log(`Upload successful for ${response.Key}`);
      resolve();
    })
    .catch(reject);
});

async function traverseDir(dirPath: string) {
  const dir = await fs.readdir(dirPath);

  dir.forEach(async (str) => {
    const pathName = path.join(dirPath, str);

    const isDir = (await fs.stat(pathName)).isDirectory();

    if (isDir) {
      traverseDir(pathName);
    }
    else {
      const fileHandle = await fs.open(pathName);

      const slashAdjustedPathName = pathName.replace(/\\/g, '/');

      const splits = slashAdjustedPathName.split('static');
      const key = `${process.env.S3_FILE_PREFIX}/static${splits[1]}`;

      const s3Params = {
        Bucket: process.env.S3_BUCKET_NAME!,
        Body: fileHandle.createReadStream(),
        Key: key
      }

      await uploadS3(s3Params);

      fileHandle.close();
    }
  });
}

async function main() {
  await traverseDir(dirPath);
}

main();