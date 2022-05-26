import { MongoClient } from "mongodb"

async function handler(req,res){
if(req.method="GET"){
    const data=req.body;
   const client= await MongoClient.connect('')
   const db=client.db();
   const meetupsCollection=db.collection('meetups');
   const result= await meetupsCollection.find().toArray();
   console.log(result);
   client.close();
   res.status('201').json({message:'meetup data'})
}
}
export default handler;
