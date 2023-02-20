//we are simply converting about.js to AboutClass.js .(simply converting functional compo -> class compo)
import Profile from "./Profile";
//import Profilefunctionalcomponet from "./Profile";

import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

       
                    //this is a initializer so we shd initialize the 
  console.log("Parent - constructor ");
                }

    

 componentDidMount(){

        console.log("Parent - componentDidMount");
    //best place to keep api coxz its called after render ()
    }

    render(){
        console.log("Parent - render");
        return (
            <div>
            <h1>About Us page</h1>
            <p>{" "}
            Namaste react live course - finding the path 
            </p>
            <Profile/>
          {/* <Profile name={"child 1 "}  />
           <Profile name={"child 2 "}/>
           {/* <Profilefunctionalcomponet name={"Meghana"}/> */}
         
        </div>

        );
    };
};

export default About;

/*
Parent constructor
parent render 
    Child 1 constructor
    Child 1 render
          Child 2 constructor
          Child 2 render
    Child 1 component did mount
          Child 2 component did mount
Parent componentdidmount

*/