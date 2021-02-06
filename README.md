# What the?
This project is a companion project to this [catalog-server](https://github.com/danielballan/catalog-server-from-scratch) project. The catalog-server is an experimental http web service providing an efficient way to query and receive scientific data over http. The stretch goals of that project include providing a service that can be useful for a variety of projects, from the thick python clients to thin browser clients. 

This project intends to build a typescript-based library providing proxy objects that mimic the python API in the `catalog-server`  and whose data is marshalled over http. 

The goal is to provide a library that can easily use the `catalog-server` in browsers or other javascript frameworks like Node.js. It intends to be framework agnostic, though we might develop and example or two in various frameworks for testing and understanding.

I came into this not knowing anything about Typescript, so that was part of the fun. I typed up a few things in [tooling](./docs/tooling.md) that I learned setting this up. Examples in this document will generalling use ts-node as a REPL.

## Installation

## Prerequisities
You need to have node installed on your computer.

Clone this repo. Open a terminal in the root and type:
    
    npm install

This will install all of he dependencies. That sound you hear is your hard drive filling up with node_modules.

