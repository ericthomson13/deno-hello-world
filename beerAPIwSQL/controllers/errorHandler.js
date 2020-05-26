export default async ({ response }, nextFn) =>  {
  try {
    await nextFn();
  } catch (e) {
    response.status = 500;
    response.body = { msg: e.message };
  }
}