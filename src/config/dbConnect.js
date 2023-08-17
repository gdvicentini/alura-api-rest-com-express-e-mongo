import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:admin@cluster-guiv.1lyhd.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;