import { useState } from "react";
import { Link } from "react-router-dom";  // its an alternate for anchor tag <a></a> coz anchor loads the entire page 
import Logo from "../assets/img/food_villa.jpg";
import useOnline from "../util/useOnline";
const loggedInUser = () =>{
// if API call to check authenticated then return true or false 
  return false;
};

//conditional rendering .
//we are creating a single page application  (SPA)
//2 types of routing -client side routing , server side routing 
// here we are building client side routing (we are loading the different already present and not fetching from some other server)


const Title = () => (
  <a href="/">
    <img
     className="logo"
     alt="logo"  
     src={Logo}/>
         </a>
     );

//export default Title; //export default is used to export only one component at a time ,what i  want to export one component
//but what if i want to export more than one component

//swiggy uses cdn to store the image coz cdn is faster , cdn caches images and so on


const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  

    return (
    <div className="header">  
    <Title/>
  
  <div className="nav-items">
  <ul>
      <Link to="/">  
        <li>Home</li>  {/* Link to does the work of anchor <a></a>  but if u see in console it will be anchor tag that is browser understanding */ }
      </Link>
      <Link to="/About">
        <li>About</li>
      </Link>
      <Link to="/Contact">
        <li>Contact</li>
      </Link>
      <Link to="/Instamart">
        <li>Instamart</li>
      </Link>
      <li>Cart</li>
  </ul>
  </div>
  <h1>{isOnline ? "✅" : "🔴"}</h1>
       {isLoggedIn ? (
         <button onClick={() => setIsLoggedIn(false)}>Logout</button>
       ) : (
         <button onClick={() => setIsLoggedIn(true)}>Login</button>
       )}
       </div>
  );    
};


export default Header;