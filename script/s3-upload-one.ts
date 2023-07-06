require('dotenv').config();

import fs from "fs";
import path from "path";
import AWS from "aws-sdk";
import inquirer from "inquirer";
import chalk from "chalk";

const file = process.argv[2];
//file example: "static/ste-encounter-v2.mp4"

if (!file) throw Error("Undefined file path");
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

const filePath = path.join(__dirname, `../public/${file}`);

const params = {
  Bucket: process.env.S3_BUCKET_NAME,
  Body: fs.createReadStream(filePath),
  Key: `${process.env.S3_FILE_PREFIX}/${file}`
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

const sleep = (ms: number) => new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
})

async function main() {
  await sleep(500);
  console.clear();

  const answer = await inquirer.prompt({
    name: "Confirmation",
    type: "confirm",
    message: `Confirm to upload ${chalk.cyan(filePath)}?`
  });

  if (!answer.Confirmation) return;

  await uploadOne();
}

main();