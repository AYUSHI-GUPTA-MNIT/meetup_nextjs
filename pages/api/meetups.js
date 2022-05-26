import { MongoClient } from "mongodb"

async function handler(req,res){
if(req.method="GET"){
    const data=req.body;
   const client= await MongoClient.connect('mongodb+srv://user1:ayu123@cluster0.ooli9.mongodb.net/meetups?retryWrites=true&w=majority')
   const db=client.db();
   const meetupsCollection=db.collection('meetups');
   const result= await meetupsCollection.find().toArray();
   console.log(result);
   client.close();
   res.status('201').json({message:'meetup data'})
}
}
export default handler;
