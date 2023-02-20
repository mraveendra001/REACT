import {Outlet} from "react-router-dom";
import Profile from "./ProfileClass";
import Profilefunctionalcomponet from "./Profile";
const About = () => {
    return (
        <div>
            <h1>About Us page</h1>
            <p>{" "}
            Namaste react live course - finding the path 
            </p>
           <Profile name={"Meghana fromclasscomponent"}/>
         {/* <Profilefunctionalcomponet name={"Meghana"}/> */}
         
        </div>
    );
    };
    
    export default About;