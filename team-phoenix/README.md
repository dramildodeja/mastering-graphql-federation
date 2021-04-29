# Mastering GraphQL
This is standalone application which includes all types of operations a user could perform leveraging graphql.

# List of functionalities
GraphQL Queries: 
- Add user
- Add post
- Add comment

GraphQL Subscriptions:
- Sub to user
- Sub to all posts
- Sub to changes on a post
- Sub to comments on a post

# Local Application Setup & Run

- Install Node/NPM following this link - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (if you don't have it installed)
- Run 'npm install' in root directory
- Run 'npm run start' to start server
- Open the playground in your browser at: http://localhost:4001/

# Sample Queries

- query {
  healthCheck
}

- query {
  users {
    id,
    name,
    email
  }
}

- subscription {
  comment (postId: 1) {
    mutation
    data {      
      user {
        name,
        email
      }
    }
  }
}