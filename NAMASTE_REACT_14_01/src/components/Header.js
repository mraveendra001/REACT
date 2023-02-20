import { useState } from "react";
const loggedInUser = () =>{
// if API call to check authenticated then return true or false 
  return false;
};

const Title = () => (
 
    <img
     className="logo"
     alt="logo"
     src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
         
     );

//export default Title; //export default is used to export only one component at a time ,what i  want to export one component
//but what if i want to export more than one component



const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

    return (
    <div className="header">  
    <Title/>
  
  <div className="nav-items">
  <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
  </ul>
  </div>
  {isLoggedIn ? ( <button onClick= {()=> setIsLoggedIn(false)}>Logout</button> ) :   <button onClick={ () => setIsLoggedIn(true)}>Login</button>}
  </div>
  );    
};


export default Header;