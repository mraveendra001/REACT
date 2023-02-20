import { useEffect, useState } from "react";


const Profile =( props) =>
{

    const [count,setCount]=useState(0);

    useEffect ( ()=> {
      //Api call best place , y? coz first we will render and then we will do apicall
      
      timer = setInterval(()=>{
        console.log("reactnamaste op");
      },1000);

      return() =>{
          clearInterval(timer);
          console.log("return use effect op");
      }

     // console.log( "useeffect");
    },[]);
    console.log( "render");
    //const [count2,setCount2]=useState(0);
    return (

        
<div>

 <h1>Profile Component</h1>
<h2>Name:{props.name}</h2>
<h3>Count:{count}</h3>
{/*<h3>Count2:{count2}</h3>*/}
<button onClick={ 
    () => setCount(1)
  }> Count</button>
</div>

    );
};

export default Profile;