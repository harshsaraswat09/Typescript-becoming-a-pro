1. People realised that Javascript is a very powerful language, but lacks "types". Typescript was introduced as a new language to add types on top of javascript
----------------------------------
2. what is Typescript?
- TypeScript is a programming language developed and maintained by microsoft.
- it is strict "syntactical superset" of javascript and adds optional static typing to the language

----------------------------------
3. Where/how does TypeScript code runs? 
- TypeScript code never runs in your browser. Your browser can only understand JavaScript. 
1. JavaScript is a runtime language, the thing that actually runs in your browser or Node.js runtime.
2. TypeScript is something that compiles down JavaScript.
3. when TypeScript is compiled down to JavaScript, you get "type checking" similar to C++. If there's an error, the conversion to JavaScript fails.

----------------------------------

4. Typescript compiler
- "tsc" is the official typescript compiler that you can use to convert "TypeScript" code into Js
---------------------------------

Step 1: Install TSC (TypeScript) globally: 
```bash
npm install -g typescript
```
Step 2: Initialize empty Node.js project with TypeScript.
```bash
mkdir node-app
cd node-app
npm init -y
npx tsc --init
```

These commands should initialize two files in your project.

Step 3: Create a a.ts file  
```bash
const x: number = 1 
console.log(x)
```
Step 4: Compile the TS file to a JS file. 
```bash
tsc -b.
```
step 7: Delete a.js

----------------------------------