const request = require("supertest");
const app = require("../book-api");
//Simple Get Test
test("Get test", async () => {
  const response = await request(app).get("/book");
  expect(response.statusCode).toBe(200);
});

test("Delete test", async () => {
  const response = await request(app).delete("/book/:isbn");
  expect(response.statusCode).toBe(200);
});

test("Post test", async () => {
  const response = await request(app).post("/book/:isbn");
  expect(response.statusCode).toBe("Book is edited");
});
