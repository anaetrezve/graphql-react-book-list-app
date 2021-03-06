const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const bookSchema = require('./schema/schema');

const app = express();
const PORT = process.env.PORT || 4000;

// cors
app.use(cors());
// connect to mongodb database
mongoose.connect('mongodb://localhost:27017/graphql-books', {
  useNewUrlParser: true,
});

mongoose.connection.once('open', () => console.log('database connected..'));

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
