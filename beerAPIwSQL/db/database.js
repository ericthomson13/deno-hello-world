import { Client } from "https://deno.land/x/postgres/mod.ts";

// having issues connecting to PostgreSQL
class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: "postgres",
      database: "beers",
      host: "localhost",
      password: "postgres",
      port: "5432",
    });

    await this.client.connect();
  }
}

export default new Database().client;
