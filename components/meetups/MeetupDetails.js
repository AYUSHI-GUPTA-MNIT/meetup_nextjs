import classes from "./MeetupDetail.module.css"

function MeetupDetails(props){
return(
    <section className={classes.detail}>
            <img src={props.img}
              alt="first meetup"
            />

            <h1>{props.heading}</h1>
            <p>{props.description}</p>
            <address>{props.address}</address>
        </section>
)

}
export default MeetupDetails