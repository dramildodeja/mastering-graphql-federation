const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')
const appConfig = require('./config').appConfig
const gateway = new ApolloGateway({
  serviceList: appConfig.registeredRemoteServices,
});
(async () => {
  const { schema, executor } = await gateway.load()
  const server = new ApolloServer({ schema, executor })
  server.listen({ port: appConfig.port, endpoint: appConfig.endpoint }).then(({ url }) => {
    console.log(`Local federation graphql server is running @ ${url}`);
  })
})()