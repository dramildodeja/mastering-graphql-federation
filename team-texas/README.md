# Mastering GraphQL
This is standalone application which includes all types of operations a user could perform leveraging graphql.

# List of functionalities
GraphQL Mutations:
- Update user
- Delete user
- Update post
- publist/unpublish post
- Delete post
- Update comment
- Delete comment

# Local Application Setup & Run

- Install Node/NPM following this link - https://docs.npmjs.com/downloading-and-installing-node-js-and-npm (if you don't have it installed)
- Run 'npm install' in root directory
- Run 'npm run start' to start server
- Open the playground in your browser at: http://localhost:4000/

# Sample Queries

- mutation {
  createUser(data: {
    name: "new user"
    age: 39
    email: "newuser@new.com"
  })
}

- mutation {
  createComment(data: {    
    body: "Test Subscription"
    userId: 1
    post: 1
  })
}

- mutation {
  deleteUser(id:4) {
    name
  }
}
