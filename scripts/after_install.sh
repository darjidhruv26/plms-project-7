#!/bin/bash

cd /home/ec2-user/server

rm -rf node_modules
rm -rf build

npm install
npm run build