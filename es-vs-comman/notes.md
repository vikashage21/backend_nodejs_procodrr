//command js module

// synchronous file loading
// cjs imports are not hoisted
// top level await is not allowed
// only one value can exported in cjs
// file extension optional
// if we give full file path the we can load any file using cjs
// it is a convention to add cjs in the file extension
// it is optional to set "type" : commonjs" in package.json because it is by default 
in cjs this keyword points to module.exports by default


// es6 module 

// asynchronous file loading
// mjs imports are hoisted
// top level await is allowed
// multiple value can exported in cjs 
// file extension mandatory
// we can not load any file , only js and mjs files are allowd
// it is a covention to add mjs in file extension
// we have to set "type' : "module "  in package.json
// in mjs this keyword is undefined