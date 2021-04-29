const { gql } = require("apollo-server");

const typeDefs = gql`

    scalar CustomJSONCommonForMutation

    type Mutation {
        createUser(data: CreateUserInput): CustomJSONCommonForMutation!
        deleteUser(id: ID!): CustomJSONCommonForMutation!
        updateUser(id: ID!, data: UpdateUserInput): CustomJSONCommonForMutation!
        createPost(data: CreatePost): CustomJSONCommonForMutation!
        updatePost(id: ID!, data: updatePostInput): CustomJSONCommonForMutation!
        deletePost(id: ID!): CustomJSONCommonForMutation!
        createComment(data: CreateComment): CustomJSONCommonForMutation!
        updateComment(id: ID!, data: UpdateCommentInput): CustomJSONCommonForMutation!
        deleteComment(id: ID!): CustomJSONCommonForMutation!
    }

    input CreateUserInput {
        name: String!
        email: String!
        age: Int
    }

    input UpdateUserInput {
        name: String
        email: String
        age: Int
    }

    input CreatePost {
        title: String!
        body: String!
        published: Boolean!
        userId: ID!
    }

    input updatePostInput {
        title: String
        body: String
        published: Boolean
    }

    input CreateComment {
        body: String!
        userId: ID!
        post: ID!
    }

    input UpdateCommentInput {
        body: String
    }
`;

module.exports = typeDefs;