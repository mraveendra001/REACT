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
     className="h-32 pl-4 pr-4 px-4 py-4"
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
    <div className="flex justify-between bg-pink-200 border-b-pink-400 sm:bg-blue-50">  
    <Title/>
  
  <div className="nav-items">
  <ul className="flex py-10 ">
      <Link to="/">  
        <li className="px-2"
        >Home</li>  {/* Link to does the work of anchor <a></a>  but if u see in console it will be anchor tag that is browser understanding */ }
      </Link>
      <Link to="/About">
        <li className="px-2">About</li>
      </Link>
      <Link to="/Contact">
        <li className="px-2">Contact</li>
      </Link>
      <Link to="/Instamart">
        <li className="px-2">Instamart</li>
      </Link>
      <li className="px-2">Cart</li>
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