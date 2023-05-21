#!/usr/bin/env sh

wget --no-check-certificate https://localhost:5001/swagger/v1/swagger.json

openapi-generator-cli generate -g typescript-axios -i swagger.json -o cubes-api-client --additional-properties=npmName=cubes-api-client,supportsES6=true,withoutPrefixEnums=true,npmVersion="$(npm view cubes-api-client version)",withInterfaces=true

cd cubes-api-client || exit

npm install
npm version patch
npm publish
