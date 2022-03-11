const { listen } = require("../server/book-api");
const { deleteBook } = require("./book-list");
test("dummy test", () => {
  let a = 1;
  let b = 2;
  expect(a + b).toBe(3);
});

//mock onClick, then check for book with same isbn
test("deleteBook test", async () => {
  const isbn = 1234;

  await deleteBook(isbn);

  expect(isbn).beNAN();
});
