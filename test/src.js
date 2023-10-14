// Basic require() calls
const fs = require('fs');
const http = require('http');

// Using required modules
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (!err) {
    console.log(data);
  }
});

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});
server.listen(3000);

// Dynamic requires
const moduleName = 'lodash';
const _ = require(moduleName);

const dynamicModule = 'custom-module';
const customModule = require(`./${dynamicModule}`);

// Conditional require
const isDebugMode = true;
const debugLogger = isDebugMode ? require('debug')('app:debug') : null;

// Importing and using ES6 modules
import { add, subtract } from './math';
console.log(add(5, 3));
console.log(subtract(10, 7));

// Using imported functions
const result = add(2, 3);
console.log(result);

// Variable-based require() calls
const moduleToRequire = 'module-name';
const dynamicRequire = require(moduleToRequire);

// Handling string-based module names
const moduleNames = ['module-a', 'module-b', 'module-c'];
moduleNames.forEach((moduleName) => {
  const module = require(moduleName);
  console.log(`Loaded module: ${moduleName}`);
});

// Complex condition for requires
const isProduction = process.env.NODE_ENV === 'production';
const logger = isProduction ? require('log-production') : require('log-development');

// Use a module's exported function
const utility = require('utility-library');
utility.doSomething();

// Conditional dynamic require
const dynamicRequireModule = isProduction ? 'module-prod' : 'module-dev';
const dynamicModuleInstance = require(dynamicRequireModule);
