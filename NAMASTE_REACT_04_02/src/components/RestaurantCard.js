import { useState } from "react";
//import { useContext, useState } from "react";
//import UserContext from "../util/UserContext";

const IMG_CDN_URL="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

function App (){
    const [data,setData]=useState([]);

    useEffect (() =>{

        
    })
}

const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
    //console.log(props);
   // const {name,cuisines,cloudinaryImageId,lastMileTravelString}=restaurant.data;
    //  const {user}=useContext(UserContext);
         return(
             
             <div className="w-[230px] h-[300px] p-2 m-2 shadow-lg hover:scale-110 transition-all duration-500 cursor-pointer" >
             
                 <img src={IMG_CDN_URL+cloudinaryImageId} />
                 <h2 className="font-bold text-xl">{name}</h2>
                 <h3>{cuisines.join(", ")}</h3>
                 <h4>{lastMileTravelString}</h4>
                {/*
                <h5 className="fon-bold p-1">{user.name}</h5>
         <h5 className="fon-bold p-1">{user.email}</h5> */}
             </div>
         
         );     
         
         }
export default RestaurantCard;