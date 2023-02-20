
import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import Footer from "./components/Footer";
import {IMG_CDN_URL} from "./components/config";
import {createBrowserRouter , RouterProvider} from "react-router-dom";  // RouterProvider is a component provided by react-router-dom
//import About from "./components/AboutClass";             // react-router-dom is not developed by fb developers its developer by remix developers
import Error from "./components/Error";
import Contact from "./components/Contact"; 
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet } from "react-router-dom";
import Profile from "./components/ProfileClass";
import React, { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";
//for building the forms use formik lib 

//chunking
//dynamic bundling  
//Code splitting
//on demand loading 
// dynamic import 
const About = lazy( () => import("./components/About")); 
// all the above jargans are used when we want to split the code ,inorder to ensure the fast loading of thewebsite in cse of huge application with 1000's of components
//how to do it ? is shown below 
//NEVER EVER DYNAMIC LOAD YOUR COMPONENT INSIDE ONE MORE COMPONENT 
const Instamart = lazy( () => import("./components/Instamart")); //lazy import 
//when we are loding thecompoent in demand (a diffrent bundle altogether) react suspends it and it takes sometime 
//once loaded it will come for 2 nd time 

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

//this approuter tells us when there about us option in the header , it will take to about us page (just like how html links the page , here
//we use createbrowser router , this will tell which  component load ) 



 const AppLayout = () => {
    return (        
    <>                     
          <Header/>
          {/*Outlet  :  all children will go to outlet */ }
          <Outlet />  
          <Footer/>
    </>  
    );
 };
 const appRouter = createBrowserRouter([  // approuter is we are creating a router 

{
    path : "/" , //tell what to load on /  , let us choose applayout component to load so write applayout inside element
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
        {
            path : "/about" , //tell what to load on /  , let us choose applayout component to load so write applayout inside element
            element: 
            <Suspense fallback={<h1>LOADING PLEASE WAIT</h1>}>
                <About/>
                </Suspense>
            
            ,
            children:[
                {
                path:"profile",
                element:<Profile/>
                },
            ]
        
        },
        {
            path : "/contact" , //tell what to load on /  , let us choose applayout component to load so write applayout inside element
            element: <Contact/>,
        
        },
        {
            path : "/" , //tell what to load on /  , let us choose applayout component to load so write applayout inside element
            element: <Body/>,
        
        },
        {
            path : "/restaurant/:id" , // /:id is not hard coded it comes as params in restaurantmenu.js 
            element: <RestaurantMenu/>,
        
        },

        {
            path : "/Instamart" , 
            
            element:
            <Suspense fallback={<Shimmer/>}> {/*suppose suspense is 1 or 2 seconds then its neccessary to see shimmer for that we use */} 
            <Instamart/>,
            </Suspense>
        },

    ],
} , 


]);
 
 const root= ReactDOM.createRoot(document.getElementById("root"));
 //root.render(<AppLayout/>);  , we are not rendering AppLayout always we will use routerProvider component here 
 root.render(<RouterProvider router={appRouter}/>);     //router={appRouter}  this is the configuration we provide to render according to our
 // approuter means (/About  means about page , /Contact means contact page )
// root.render(<About/>);