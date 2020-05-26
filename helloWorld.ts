/*

This will reply to requests on localhost:8000 with the text in the request body.

Run Script:
deno run helloWorld.ts --allow-net

To exit use ^ + C
*/

import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const port = 80000;
const s = serve({ port });

console.log("http://localhost:8000/");

// this uses top level await to keep server listening to the requests
for await (const req of s) {
  req.respond({ body: `Hello World this is Deno hard at work` });
}
