/*
  This file is longer than I would like because of the dog array and the desire to modify it unable to do as export when attempted to modularize.  Would have to add in DB to do so.

  Run Script:
  deno rn --allow-net --allow-env ./dogapi/app.ts
*/

import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// set up environment variables and port
const env = Deno.env.toObject();
const PORT = env.PORT || 3000;
const HOST = env.HOST || "127.0.0.1";

// Dog interface to be used for all dogs
interface Dog {
  name: string;
  age: number;
}

// Creates array of dogs and seeds some dogs
let dogs: Array<Dog> = [
  {
    name: "Sierra",
    age: 12,
  },
  {
    name: "Thor",
    age: 8,
  },
];

// Create function for dogs
const addDog = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  const dog: Dog = body.value;

  dogs.push(dog);

  response.body = { msg: "OK" };
  response.status = 201;
};

// Read all dogs
const getDogs = ({ response }: { response: any }) => {
  response.body = dogs;
};
// Read one dog
const getDog = (
  { params, response }: { params: { name: string }; response: any },
) => {
  const dog = dogs.filter((dog) => dog.name === params.name);

  if (dog.length) {
    response.status = 200;
    response.body = dog[0];
  } else {
    response.status = 400;
    response.body = {
      msg: `Unable to find dog ${params.name}`,
    };
  }
};

// Update Dog Age
const updateDog = async ({
  params,
  request,
  response,
}: {
  params: { name: string };
  request: any;
  response: any;
}) => {
  const temp = dogs.filter((dog) => dog.name === params.name);
  const body = await request.body();
  const { age }: { age: number } = body.value;

  if (temp.length) {
    temp[0].age = age;
    response.status = 204;
    response.body = { msg: "Updated" };
  } else {
    response.status = 404;
    response.body = { msg: `Cannot find dog by name of ${params.name}` };
  }
};

// Delete dog
const deleteDog = (
  { params, response }: { params: { name: String }; response: any },
) => {
  const beforeLength = dogs.length;
  dogs = dogs.filter((dog) => dog.name !== params.name);

  if (dogs.length === beforeLength) {
    response.status = 404;
    response.body = { msg: `Unable to find dog with name ${params.name}` };
  } else {
    response.status = 204;
    response.body = { msg: `Deletion successful` };
  }
};

// create Oak router
const router = new Router();

// methods for router
router.get("/dogs", getDogs)
  .get("/dogs/:name", getDog)
  .post("/dogs", addDog)
  .put("/dogs/:name", updateDog)
  .delete("/dogs/:name", deleteDog);

// create Oak app and start it
const app = new Application();

// set up necessary middleware just like Express
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is listening on ${PORT}`);

// Using top level await to allow async invocations at server host:port
await app.listen(`${HOST}:${PORT}`);
