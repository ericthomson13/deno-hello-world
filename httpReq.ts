/*
This is a basic HTTP request using a deno package

Run Script:
deno run --allow-net=example.com https://deno.land/std/examples/curl.ts https://example.com

*/

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);