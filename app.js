const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const PORT = process.ENV.PORT || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    // do something
  })
);

app.listen(PORT, () => {
  console.log(`Listening server on port: ${PORT}`);
});
