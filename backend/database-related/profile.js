export async function changeName(collection, data) {

    await collection.insertOne(data);
    return "Sucessful insertion";
}


export async function changeProfile(collection, datas) {
    await collection.insertMany(datas);
    return "Sucessful insertion";
}