const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require('@apollo/federation')
const typeDefs = require("./schemas/users.graphql");
import db from "./database/database";
import Mutation from "./resolvers/Mutation";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";
import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();
const federatedSchema = buildFederatedSchema([ {
  typeDefs: typeDefs,
  resolvers: {
    Mutation,//This is to demo how create/update/delete technique works in graphql
    Post,//This is to demo how you can map individual type definitions of the application schema
    Comment,//This is to demo how you can map individual type definitions of the application schema
  }
} ])
const server = new ApolloServer({
  schema: federatedSchema,
  context: {
    db,//This is to demo how you can map database channel
    pubsub,//This is to demo how you can enable pubsub model on your graphql data events
  },
  tracing: true,
  playground:true,
  cacheControl: true,
  /*context: async ({ req }) => {
    return authInterceptor(req) //sample to implement authentication like OAuth or SAML
  }*/
});
server.listen({ port: 4002 }).then(({ url }) => {
    console.log(`Local graphql server is running @ ${url}`);
});