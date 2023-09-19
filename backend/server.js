const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    title: "吾輩は猫である",
    author: "夏目漱石",
  },
  {
    title: "走れメロス",
    author: "太宰治",
  },
];

// 型を定義する
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    test: [Book]
  }
`;

// クエリのtestが実行されたらどんな値が返ってくるのかを定義する。
const resolvers = {
  Query: {
    test: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
