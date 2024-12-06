import { addUser} from "./database-related/manageUsers.js";


import { MongoClient } from 'mongodb';
const URI = "mongodb://localhost:27017";
const mongo = new MongoClient(URI);

let database = null
let usersCollection = null


try {
    await mongo.connect();
    console.log("==================================== Mongo Database Connected ====================================");
    database = mongo.db('WebDevProjectDB');
    usersCollection = await database.collection('Users')
} catch (error) {
    throw new Error("Mongo Database Connection Failed: " + error);
}


// ===============data insertion example==============

// const user =   {
//     "user_id": 9,
//     "username": "coder_123",
//     "password": "code4life",
//     "name": "Jake Blue",
//     "email": "jake.blue@example.com",
//     "date_of_birth": "04/17/1999",
//     "followers": 200,
//     "last_room_joined": 783429,
//     "account_bio": "Coding my way to success."
// }
// addUser(usersCollection, user)

