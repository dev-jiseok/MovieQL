import { GrapQLServer } from "graphql-yoga";

const server = new GraphQLServer({});

server.start(() => console.log("GrapQL Server Running"));