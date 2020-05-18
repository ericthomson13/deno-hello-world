# deno-hello-world
Exploring the new deno back-end framework for JavaScript and TypeScript

## How to Install
With Homebrew:
```
brew install deno
```
Docs[https://deno.land/v1]

## Running files in this repository
Once Deno is installed, navigate to the project directory and run:

```
deno run --allow-net <filename>
```
Note:
- Some files may have extra script tags needed.  Where needed these are noted at the top of the file.

The ``` --allow-net ``` flag is important and if not used will give you denied permissions to use
the network error.   are one of the key differences with Deno.

To stop running any of the files that setup a server press control + C on mac to exit.

### What's Different About Deno?
Deno supports Typescript out of the box.
Deno doesn't use a consolidated package manager (no npm or yarn) but instead uses the web
for getting packages and dependencies and then caches them locally.
[Permissions](https://deno.land/manual/getting_started/permissions) allow for a concept of least privledge
similar to setting up IAM roles for AWS user accounts.  This allows for easier built in security compared
to Node systems.

### Moving Forward
I built this repository as a cursory exploration of Deno, starting just a few days after 1.0 release.
Over time I hope to continue building my understanding of Typescript and Deno and will continue to flush out
more examples in this repository.