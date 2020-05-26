# deno-hello-world
Exploring the new deno back-end framework for JavaScript and TypeScript.

## How to Install
With Homebrew:
```
brew install deno
```

Once Deno is installed you can check that it installed via:
``` deno --version```
  This will print the version to the console.

OR
``` deno run https://deno.land/std/examples/welcome.ts```
  This will download and run a package that should print 'Welcome to Deno' in the console.
  If you visit the above URL without running Deno it will display a page and not a TS file as it knows that you're using a browser and thus serves a web-friendly page.

Docs[https://deno.land/v1]

## Running files in this repository
Once Deno is installed, navigate to the project directory and run:

```
deno run --allow-net <filename>
```

### Note:
- Some files may have extra script tags needed.  Where needed these are noted at the top of the file.

The ``` --allow-net ``` flag is important and if not used will give you denied permissions to use the network error.   are one of the key differences with Deno.

To stop running any of the files that setup a server press control + C on mac to exit.

### What's Different About Deno?
- Deno supports Typescript at it's core so no more separately compiling to be able to then run JS.
- Deno doesn't use a consolidated package manager (no npm or yarn) but instead uses the web for getting packages and dependencies and then caches them locally.
- [Permissions](https://deno.land/manual/getting_started/permissions) allow for a concept of least privledge similar to setting up IAM roles for AWS user accounts.  This allows for easier built in security compared to Node systems which can access anything the user can access.
- A long term vision for Deno is the possibility of compiling into a single executable with no external dependencies.  This is not present in the current version to my knowledge.

### Subdirectories
1. Dog API
  - This app explores routing using Oak, which is similar to Express and Koa in Node
  - There is no DB layer to this CRUD application.
2. Beer API
  - This app explores further into using Oak.
  - This app adds a PostgreSQL database and modularization.

### Moving Forward
I built this repository as an exploration of Deno, starting just a few days after 1.0 release. Over time I hope to continue building my understanding of Deno and will continue to flush out more examples in this repository.