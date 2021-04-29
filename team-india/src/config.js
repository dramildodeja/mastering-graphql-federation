const appConfig = {
    root: 'http://localhost',
    port: 4000,
    playground: '/',
    endpoint: '/graphql',
    registeredRemoteServices: [
        { name: 'team-phoenix-service', url: 'http://localhost:4001' },
        { name: 'team-texas-service', url: 'http://localhost:4002' },
    ]
}
export { appConfig }