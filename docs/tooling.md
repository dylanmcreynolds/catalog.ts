


###
Tools


(good link)[https://basarat.gitbook.io/typescript/nodejs]

tsc - transpiles typescript to javascript


    $ tsc hello.ts
    $ node hello.js
    hi there
Here we have a hello world that prints to `console.log()`. 
`tsc` transpiled from ts to js. So now we have a `hello.js` that we can run with node.
I came into this project with no experience in typesript. Here are a few things I learned about tooling:

There is a package called ts-node included here that will do both steps at once. You're supposed to be able to install it globally, which would let you:

    $ ts-node hello.ts
    hi there


It is included in this project's `package.json`, hence it can be run without globally installing like:

    $ npx ts-node hello.ts
    hi there

This seems the better way for debugging quickly.

`ts-node` also provides an interactive shell! 
   


