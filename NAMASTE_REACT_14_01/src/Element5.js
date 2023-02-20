
import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import {IMG_CDN_URL} from "./components/config";


const config = [
    {
        type:"carousel",
        cards :[
            {
              offerName :"50% off"
            },
            {
                offerName :"No delivery charge"
            },
        ],
    },

] ;


 const AppLayout = () => {
    return (        
    <>                     
          <Header/>
          <Body/>
          <Footer/>
    </>  
    );
 };
 
 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>); 