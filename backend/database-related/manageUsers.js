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


export async function getUser(collection, userID) {
    try {
        const result = await collection.findOne({user_id: userID});
        if (!result) {
            throw new Error ("user not found")
        }
        return result;
    } catch (error) {
        throw new Error("Database: Get User - " + error)
    }
}

export async function getManyUsers(collection, userIDs) {
    try {

        const result = await collection.find( {user_id: {$in: userIDs}} ).toArray();
        if (!result) {
            throw new Error ("user not found")
        }
        return result;
    } catch (error) {
        throw new Error("Database: Get User - " + error)
    }
}


export async function deleteUser(collection, userID) {

    try {
        const result = await collection.deleteOne({user_id: userID})
        if (!(result.deletedCount === 1)) {
            throw new Error ("User not found")
        }
    } catch (error) {
        throw new Error("Database: Delete User - " + error)
    }
}


// dont use this to increase follower count
export async function updateUser(collection, userID, updatedData) {
    try {
        
        const result = await collection.updateOne(
            {user_id: userID},
            {
                $set: {updatedData}
            }
        )
        if (!(result.matchedCount > 0)) {
            throw new Error("user not found")
        }


    } catch (error) {
        throw new Error("Databasr: Update User - " + error)
    }
}