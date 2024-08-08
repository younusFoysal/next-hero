import {MongoClient, ServerApiVersion} from "mongodb";


let db;

const connectDB = async () => {
   if (db) return db;
   try {

       //const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
       const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q3baw43.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

       const client = new MongoClient(uri, {
           serverApi: {
               version: ServerApiVersion.v1,
               strict: true,
               deprecationErrors: true,
           },
       });

       db = client.db('next-hero')
       return db

   } catch (error){
       console.error(error);
   }


};


export default connectDB;