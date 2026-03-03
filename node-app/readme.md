
The tsconfig file

1. The target option in our tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.

2. rootDir
Where should the compiler look for the TS file? Good practice is for this to be the src folder. 

3. outDir
Where should the compiler look for the script outer.js files? 

4. noImplicitAny. 
Try enabling it and see the compilation error on the following code.