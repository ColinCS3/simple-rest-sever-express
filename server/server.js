const app = require("./book-api");
const port = 3000;

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
