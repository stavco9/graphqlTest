import "reflect-metadata";
import {createConnection} from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
//import {User} from "./entity/User";
//import { appendFile } from "fs";
import * as express from "express";
import { User } from "./entity/User";

const startServer = async() =>{
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    await createConnection();

    const app = express();
    
    server.applyMiddleware({app});
    
    app.listen({port: 4000}, () =>
        console.log("Server ready at http://localhost:4000/graphql")
    );
};

startServer();