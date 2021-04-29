const { gql } = require("apollo-server");

const typeDefs = gql`

    scalar CustomJSONCommon
    
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        comments: [Comment!]!
        me: CustomJSONCommon
        healthCheck: CustomJSONCommon
    }

    type Subscription {
        comment(postId: ID!): CommentSubscriptionPayload!
        post: PostSubscriptionPayload!
    }

    type CommentSubscriptionPayload {
        mutation: MutationType
        data: Comment!
    }

    type PostSubscriptionPayload {
        mutation: MutationType
        data: Post!
    }

    enum MutationType {
        CREATED
        UPDATED
        DELETED
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        user: User!
        comments: [Comment!]!
    }

    type Comment {
        id: ID!
        body: String!
        user: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
        comments: [Comment]!
    }
`;

module.exports = typeDefs;