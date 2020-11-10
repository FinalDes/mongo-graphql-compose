import { ApolloServer, gql } from 'apollo-server';
import graphqlSchema from './models';

  const server = new ApolloServer({ schema: graphqlSchema });
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });