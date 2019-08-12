const express = require('express');
const graphqlHTTP = require('express-graphql');
const bookSchema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: bookSchema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening server on port: ${PORT}`);
});
