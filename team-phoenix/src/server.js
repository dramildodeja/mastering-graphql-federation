const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require('@apollo/federation')
const typeDefs = require("./schemas/users.graphql");
import db from "./database/database";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import Subscription from "./resolvers/Subscription";
import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();
const federatedSchema = buildFederatedSchema([ {
  typeDefs: typeDefs,
  resolvers: {
    Query,//This is to demo how queries technique works in graphql
    Subscription,//This is to demo how one can subscribe to realtime events in graphql
    User,//This is to demo how you can map individual type definitions of the application schema
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
server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`Local graphql server is running @ ${url}`);
});