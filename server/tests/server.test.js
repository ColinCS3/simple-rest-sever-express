const request = require("supertest");
const app = require("../book-api");

test("Get test", async () => {
  const response = await request(app).get("/book");
  expect(response.statusCode).toBe(200);
});
