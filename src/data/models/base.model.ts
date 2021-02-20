import { AutoMap } from '@automapper/classes';
import { Prop } from '@nestjs/mongoose';
import { Expose } from 'class-transformer';
import { Document } from 'mongoose';

export type BaseDocument<TModel> = TModel & Document;

export abstract class BaseModel {
	@AutoMap()
	id?: string;

	@Prop()
	@AutoMap()
	createdAt?: Date;

	@Prop()
	@AutoMap()
	updatedAt?: Date;
}

// {
//   "name": "voucher",
//   "version": "0.0.1",
//   "description": "",
//   "author": "",
//   "private": true,
//   "license": "UNLICENSED",
//   "scripts": {
//     "prebuild": "rimraf dist",
//     "build": "nest build",
//     "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
//     "start": "nest start",
//     "start:dev": "nest start --watch",
//     "start:debug": "nest start --debug --watch",
//     "start:prod": "node dist/main",
//     "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
//     "test": "jest",
//     "test:watch": "jest --watch",
//     "test:cov": "jest --coverage",
//     "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
//     "test:e2e": "jest --config ./test/jest-e2e.json"
//   },
//   "dependencies": {
//     "@nestjs/common": "^7.0.0",
//     "@nestjs/core": "^7.0.0",
//     "@nestjs/mongoose": "^7.0.4",
//     "@nestjs/platform-express": "^7.0.0",
//     "class-transformer": "^0.3.2",
//     "class-validator": "^0.13.1",
//     "mongoose": "^5.10.19",
//     "reflect-metadata": "^0.1.13",
//     "rimraf": "^3.0.2",
//     "rxjs": "^6.5.4"
//   },
//   "devDependencies": {
//     "@nestjs/cli": "^7.0.0",
//     "@nestjs/schematics": "^7.0.0",
//     "@nestjs/testing": "^7.0.0",
//     "@types/express": "^4.17.3",
//     "@types/jest": "26.0.10",
//     "@types/mongoose": "^5.10.3",
//     "@types/node": "^13.9.1",
//     "@types/supertest": "^2.0.8",
//     "@typescript-eslint/eslint-plugin": "3.9.1",
//     "@typescript-eslint/parser": "3.9.1",
//     "eslint": "7.7.0",
//     "eslint-config-prettier": "^6.10.0",
//     "eslint-plugin-import": "^2.20.1",
//     "jest": "26.4.2",
//     "prettier": "^1.19.1",
//     "supertest": "^4.0.2",
//     "ts-jest": "26.2.0",
//     "ts-loader": "^6.2.1",
//     "ts-node": "9.0.0",
//     "tsconfig-paths": "^3.9.0",
//     "typescript": "^3.7.4"
//   },
//   "jest": {
//     "moduleFileExtensions": [
//       "js",
//       "json",
//       "ts"
//     ],
//     "rootDir": "src",
//     "testRegex": ".spec.ts$",
//     "transform": {
//       "^.+\\.(t|j)s$": "ts-jest"
//     },
//     "coverageDirectory": "../coverage",
//     "testEnvironment": "node"
//   }
// }
