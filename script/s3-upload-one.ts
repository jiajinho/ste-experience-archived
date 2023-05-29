require('dotenv').config();

import fs from "fs";
import path from "path";
import AWS from "aws-sdk";
import inquirer from "inquirer";

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

const file = "static/gltf/shelf.glb";
const filePath = path.join(__dirname, `../public/${file}`);

const params = {
  Bucket: process.env.S3_BUCKET_NAME,
  Body: fs.createReadStream(filePath),
  Key: `${process.env.S3_FILE_PREFIX}${file}`
};

const uploadOne = () => new Promise<void>((resolve, reject) => {
  s3.upload(params)
    .promise()
    .then((response) => {
      console.log(`Upload successful with response:`);
      console.log(response);
      resolve();
    })
    .catch(reject);
});

async function main() {
  const answer = await inquirer.prompt({
    name: "Confirmation",
    type: "confirm",
    message: `Confirm to upload ${filePath}?`
  });

  if (!answer.Confirmation) return;

  await uploadOne();
}

main();