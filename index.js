import { GrapQLServer } from "graphql-yoga";

const server = new GrapQLServer({});

server.start(() => console.log("GrapQL Server Running"));