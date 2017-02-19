const { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String,
    hello2: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  }
};

const root2 = {
  hello2: () => {
    return 'hello world 2'
  }
}

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello2 }', root2).then((response) => {
  console.log(response);
});