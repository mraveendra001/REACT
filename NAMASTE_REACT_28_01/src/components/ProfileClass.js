import React from 'react';

class Profile extends React.Component {

    constructor (props){  // this is a constructor which is created when a class is created to initialize the class
                          // this is the best place to create the state (just like useState)
        super(props);
       /*
        this.state={
           count:0 ,
           count2:0,
        };*/

        this.state = {
            userInfo :{
                name : "Dummy name",
                location:"Dummy location", 
            },
        };

      // console.log(" child constructor" +this.props.name); //in class component 1st constructor is called
    
      console.log(" child constructor");
    }

async componentDidMount() {

    const data = await fetch("https://api.github.com/users/mraveendra001");
    const json= await data.json();

    console.log(json);

    this.setState(
        {userInfo:json,
         

        }
    )


   // console.log(" Child component did mount "+this.props.name)//in class component 3rd didmount is called 
   console.log("Child componentDidMount")
          this.timer = setInterval(() => {
    console.log("react namaste op") 
 }, 1000); //everytime we wll change the pages then it will start rendering as per duration 


}


/*
componentDidUpdate() {
    after the first redenr ,if we have to update anything for every next 
    render we should write this ,(JUST LIKE USEEFFECT IN FUNCTIONAL COMPONENT BUT ITS NOT EQUIVALENT)
console.log("componentdidupdate");
} */


componentDidUpdate(prevProps,prevState)
{
    //if (this.state.count !== prevState.count  ||
       // this.state.count !== prevState.count){ //this isfor 2 nd count
        //code   // this is like giving a dependency array in useefect
                  // useEffect(() => {} , []) []dpenednecy array mkes it redner everytime this content inside the array is rednered
      //but here weare checking the state variable has changed or not               
                   
                   
  //  }

}
//NEVER COMPARE REACT LIFECYCLE TO FUNCTIONAL COMPONENT

componentWillUnmount(){
    clearInterval(this.timer)
   // console.log("componentWillUnmount");
}

  render(){  // render method is compulsory for class based component 
// render  method will give jsx
//const {count} = this.state; this is destructuring 
//console.log(" child render()"+this.props.name);  //in classbased component 2nd render is called
console.log(" child render()");
return ( 
   <div>
<h1>Class based profile component </h1>
{/*<h3>count :{this.state.count}</h3> */}
<img src={this.state.userInfo?.avatar_url}/>
<h3>Name : {this.state.userInfo?.name}</h3>
<h3>Location : {this.state.userInfo?.location}</h3>

{/*
<button onClick={
     () => {   //never do this.state.count - 1; 
        this.setState({
            count:1,
            count2:10,
        })
     }
}>Count</button>  */}

</div>
);


  };
};

export default  Profile;

/*
now for only one child with api call 
our expected order 

parent -constructor
parent -render 
child constructor 
child render 
DOM IS UPDATED
API CALL WILL HAPPEN (API LOGGED IN )
child componentDidMount
parent component did mount

******BUT NOTE THAT ABOVE ORDER WILL NOT HAPPEN ******
instead the ****** BELOW WRITTEN SEQUENCE HAPPENS *****

parent -constructor
parent -render 
child constructor 
child render 
DOM IS UPDATED
parent component did mount
API CALL WILL HAPPEN (API LOGGED IN ) -BUT WHEN API CALL
HAPPENS (SINCE ITS WRITTEN INSIDE THE ASYNC FUNCTION
    IT WILL TAKE SOME TIME TO GET THE DATA so it will proceed with parentdidmount)
child componentDidMount
child render (this re render is 
triggered coz of setstate i.e reconciliation of react takes place)
this re render cycle is known as updating 

*/