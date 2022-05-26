import MeetupList from "../components/meetups/MeetupList"
import Layout from "../components/layout/Layout"
import { MongoClient } from "mongodb"
import { Fragment } from "react/cjs/react.production.min"

function HomePage(props){
    return (
        <Fragment>
            <Head>
               <title>React meetups</title>
               <meta name="description" content="Browse a list of meetups"></meta>
            </Head>
            <Layout>
               <MeetupList meetups={props.meetups}/>
            </Layout>
    </Fragment>
    )
}
// export async function getServerSideProps(context){
//     return{
//         props:{
//             meetups:DUMMY
//         }
//     }
// }
export async function getStaticProps(){
    const client= await MongoClient.connect('mongodb+srv://user1:ayu123@cluster0.ooli9.mongodb.net/meetups?retryWrites=true&w=majority')
    const db=client.db();
    const meetupsCollection=db.collection('meetups');
    const result= await meetupsCollection.find().toArray();
    console.log(result);
    client.close();
   
    return{
        props:{
            meetups:result.map(meetup=>({
                title:meetup.title,
                description:meetup.description,
                address:meetup.address,
                image:meetup.image,
                id:meetup._id.toString()
            }))
        },
        revalidate:1
    }
}
export default HomePage