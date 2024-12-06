



async function getHighestUserId(collection) {
    try {
        const result = await collection.find({}).toArray();
        
        if (result.length === 0) {
            throw new Error("no users in collection");
        }

        result.sort((a,b)=> b.user_id - a.user_id);
        const highestID = result[0].user_id;
        return highestID;
        
    } catch (error) {
        throw new Error("Database: user_id - " + error);
    }
}


export async function addUser(collection, data) {
    try {

        const highestID = await getHighestUserId(collection);
        await collection.insertOne({...data, user_id: highestID + 1});
    } catch (error) {
        throw new Error("Database: Add User - unable to add user: " + error);
    }
}


export async function getOneUser(collection, userName) {
    try {
        const result = await collection.findOne({username: userName});
        if (!result) {
            throw new Error ("user not found")
        }
    } catch (error) {
        throw new Error("Database: Get User - " + error)
    }
}

export async function getManyUsers(collection, userNames) {
    try {

        const result = await collection.find( {username: {$in: userNames}} ).toArray();
        if (!result) {
            throw new Error ("user not found")
        }
    } catch (error) {
        throw new Error("Database: Get User - " + error)
    }
}


export async function deleteOneUser(collection, userName) {

    try {
        const result = await collection.findOne({username: userName})

        if (!result) {
            throw new Error ("User not found")
        }
        
    } catch (error) {
        throw new Error("Database deleting user error: " + error)
    }


}

// export async function name() {
//     try {
        
//     } catch (error) {
//         throw new Error("" + error)
//     }
// }

// export async function name() {
//     try {
        
//     } catch (error) {
//         throw new Error("" + error)
//     }
// }export async function name() {
//     try {
        
//     } catch (error) {
//         throw new Error("" + error)
//     }
// }export async function name() {
//     try {
        
//     } catch (error) {
//         throw new Error("" + error)
//     }
// }export async function name() {
//     try {
        
//     } catch (error) {
//         throw new Error("" + error)
//     }
// }