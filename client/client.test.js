const { deleteBook, loadBoooks } = require("./book-list");
test("dummy test", () => {
  let a = 1;
  let b = 2;
  expect(a + b).toBe(3);
});

//mock onClick, then check for book with same isbn
test("deleteBook test", () => {
  const isbn = 1234;

  const response = await request(deleteBook(isbn)).delete(
    "http://localhost:3000/book/${isbn}"
  );

  expect(response.statusCode).toBe(200);
});
