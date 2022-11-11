import * as mongoDB from "mongodb"

export const collections:{taxpayer?: mongoDB.Collection}={}
export const contact:{cont?: mongoDB.Collection}={}

export async function connectToDatabase() {
    const client:mongoDB.MongoClient=new mongoDB.MongoClient("mongodb+srv://taxpayer:bharat@cluster0.oldsrhe.mongodb.net/?retryWrites=true&w=majority")

    await client.connect()

    const db:mongoDB.Db=client.db("db2")
    
    const taxpayer:mongoDB.Collection=db.collection("taxpayer")
    
    const cont:mongoDB.Collection=db.collection("contact")

    collections.taxpayer=taxpayer
    contact.cont=cont
}