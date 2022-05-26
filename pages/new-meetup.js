import NewMeetupForm from "../components/meetups/NewMeetupForm"
import Layout from "../components/layout/Layout"
import { useRouter } from "next/router";


 function NewMeetup(){
     const router=useRouter();
    async function newMeetupHandler(enter){
     const req = await fetch('/api/new-meetup',{
         method:'POST',
         body:JSON.stringify(enter),
         headers:{
             'Content-Type':'application/json'
         }
     })
     const data=await req.json();
    router.push('/')
    }
return (
<Layout>
<NewMeetupForm onAddMeetup={newMeetupHandler}/>
</Layout>
)
}
export default NewMeetup