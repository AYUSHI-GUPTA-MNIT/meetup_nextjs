import Layout from "../components/layout/Layout"
import MeetupDetails from "../components/meetups/MeetupDetails";
import { MongoClient,ObjectId } from "mongodb"

function MeetupDetailsPage(props){
    
    return(
        <Layout>
            <MeetupDetails img={props.meetupData.image} 
             heading={props.meetupData.title}
             description={props.meetupData.description}
             address={props.meetupData.address}/>
     
        </Layout>
    )

}

export async function getStaticPaths(){
    const client= await MongoClient.connect('mongodb+srv://user1:ayu123@cluster0.ooli9.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db();
    const meetupsCollection=db.collection('meetups');
    const result= await meetupsCollection.find({},{_id:1}).toArray();
    
    client.close();
return{
    fallback:false,
    paths:result.map(meetup=>({params:{meetupId:meetup._id.toString()}}))
    
}
}
//get id 
export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    
    const client= await MongoClient.connect('mongodb+srv://user1:ayu123@cluster0.ooli9.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db();
    const meetupsCollection=db.collection('meetups');
    const result= await meetupsCollection.findOne({_id:ObjectId(meetupId)})
  
    client.close();
    return{
        props:{
            meetupData:{
                title:result.title,
                description:result.description,
                address:result.address,
                image:result.image,
                id:result._id.toString()
            }
        },
       
    }
}
export default MeetupDetailsPage;