import { getBeers } from "../services/beerServices.js";

export default async ({ response }) => {
  response.body = await getBeers();
};