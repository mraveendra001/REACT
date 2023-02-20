/*
 * @Author: Meghana R

*Parcel is the one who is refreshing the page automatically as soon as the file is saved
*Parcel makes use of - 
*HMR - Hot module reload
*file watcher algorithm - its wriiten in c++
*BUILD
*MINIFY
*Cleaning our code
*Dev and Production build
*Super fast build algorithm
*caching while development 
*compression 
*compatible with older version of web browsers
* on dev machine
*consistent hashing algorithm
*port number 
*zero config
*transitive dependency

you can see that .parcel-cache has been created , this has been created by parcel for the running of jobs like minification,hmr,file watcher
job and all
we can see the dist folder , which minifies the file 
npx parcel index.html : parcel creates the developement build and host on server
npx parcel build index.html : build command is to do the production build , this build will minify and push this build 
in dist folder 

*/
//import {createElement as ce} from "react";
import React from "react";
import ReactDOM  from "react-dom/client";

//createElement comng from react library inside node_modules whvh we hve to export from react
                                    // createElement creates an object , which converts to html
                                    // if we do the same thing then while doing the big website it will mess up
                                    // there by we use jsx
                                    //why do we need key ?  whenever react is updating the dom ,with many sibling then you add one more child then react 
                                    // must re render everything ,but if we give unique keys to then the react will do less work,
                                   //by just rendering the new child with a new key 
                                  // comparing with the existing key
/*                                 // (something updating the dom is render )                               
const heading=ce(   
    "div",
    {
        id:"title",
        key:"h1", 
    } ,

    [
        ce(   
            "h1",
            {
                id:"title",
                key:"h1", 
            } ,
            "Namaste React"
        ),
        ce(   
            "h1",
            {
                id:"title",
                key:"h1", 
            } ,
            "Namaste React"
        ),
        ce(   
            "h1",
            {
                id:"title",
                key:"h1", 
            } ,
            "Namaste React"
        )





    ]
); */
// the above looks lengthy and also confusing there by we shd use jsx 

///id is a concept of html
// babel does the work of reading the jsx code and gives the normal(normal react code without jsx) code*/
//babel is installed along with parcel */
const heading2=
<h1 id="title" key="h2">  
    JSX Namaste react    
</h1>  // <h1>JSX Namaste react</h1>  --> this part is jsx , this is not HTML 


 //console.log(heading);  //this creates an object , 

 //React component -functional component -new way of creating component  and class component - old way 
 //we will do everything in functional component 

 //functional component is shown below 
 /*
 const HeaderComponent = () =>{
      return <h1>Namaste react from functonal component</h1>
 };
 */

// const data= api.getData()

 const Title = () => (
 
<img
 className="logo"
 alt="logo"
 src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
/>
     

 );
 const Header = () => {
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
    </div>
    );    
 };

 //config driven UI - WHEN WE BUILD A REAL WORLD APPLICATION,
// WE CANT HAVE DIFFERENT WEBSITE ALL OVER COUNTRY,
//WE CONTROL UOR CONTENT THROUGH CONFIG DRIVEN UI ,
//Who is driving this content ? backend , that is api
//we will build through config only since its a real worl example 


// when no offer at a particular city this const config is not rendered to ui
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


 const restaurantList =[
    
     {
         
        
            type: "restaurant",
            data: {
            type: "F",
            id: "354997",
            name: "Pizza Hut",
            uuid: "59494edf-bc78-4965-9ba4-d1d322d1954c",
            city: "5",
            area: "Mira Road",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "lm32ovx5yeiqy1mcpwye",
            cuisines: [
            "Pizzas"
            ],
            tags: [ ],
            costForTwo: 35000,
            costForTwoString: "₹350 FOR TWO",
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            slaString: "29 MINS",
            lastMileTravel: 2.0999999046325684,
            slugs: {
            restaurant: "pizza-hut-delta-mira-raod-mira-road",
            city: "mumbai"
            },
            cityState: "5",
            address: "Pizza Hut, Delta Graden, Shop no.9 and 10, Ground Floor, Mahajanwadi, Mira road, near Mira MIDC estate, Thane, Mira Bhayander Municipal Corporation (Thane Zone-7), Maharashtra 401107",
            locality: "Delta Graden",
            parentId: 721,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [ ],
            aggregatedDiscountInfo: {
            header: "50% off",
            shortDescriptionList: [
            {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            descriptionList: [
            {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
            header: "50% OFF",
            shortDescriptionList: [
            {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            descriptionList: [
            {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
            },
            chain: [ ],
            feeDetails: {
            fees: [ ],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: ""
            },
            availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
            imageBased: [ ],
            textBased: [ ],
            textExtendedBadges: [ ]
            },
            lastMileTravelString: "2 kms",
            hasSurge: false,
            sla: {
            restaurantId: "354997",
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            lastMileTravel: 2.0999999046325684,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 100,
            new: false
            },
            subtype: "basic",
     }, 
     {
        type: "restaurant",
        data: {
        type: "F",
        id: "640953",
        name: "Thambbi",
        uuid: "5ec45002-26a2-4589-a347-445c393eace7",
        city: "5",
        area: "Mira Road",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "9939885d1c82c87192830abf4f64f590",
        cuisines: [
        "South Indian",
        "Fast Food"
        ],
        tags: [ ],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 2.200000047683716,
        slugs: {
        restaurant: "thambbi-mira-road-mira-road",
        city: "mumbai"
        },
        cityState: "5",
        address: "Shop No 104, Eden Rose Shopping Centre CHS Ltd., Kanakia Park, Mira Road East, Dist - Thane",
        locality: "Kanakia park",
        parentId: 2527,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [ ],
        aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
        {
        meta: "50% off | Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
        {
        meta: "Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        ribbon: [
        {
        type: "PROMOTED"
        }
        ],
        chain: [ ],
        feeDetails: {
        fees: [ ],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
        },
        availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5709074~p=7~eid=00000185-a9fc-73be-304a-21ef0064070a",
        badges: {
        imageBased: [ ],
        textBased: [ ],
        textExtendedBadges: [ ]
        },
        lastMileTravelString: "2.2 kms",
        hasSurge: false,
        sla: {
        restaurantId: "640953",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
        },
        promoted: true,
        avgRating: "4.5",
        totalRatings: 20,
        new: true
        },
        subtype: "basic"
    },
    {
            type: "restaurant",
            data: {
            type: "F",
            id: "30237",
            name: "McDonald's",
            uuid: "a3640099-9be9-4c84-96bb-5c48f2c6f7a7",
            city: "5",
            area: "Mira Road",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "7bb739d7f6ae8b4ce8ed590765dffd2f",
            cuisines: [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
            ],
            tags: [ ],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 21,
            minDeliveryTime: 21,
            maxDeliveryTime: 21,
            slaString: "21 MINS",
            lastMileTravel: 2.4000000953674316,
            slugs: {
            restaurant: "mcdonalds-mira-bhayandar-mira-road",
            city: "mumbai"
            },
            cityState: "5",
            address: "Ostval orbit. Mira Bhayander road, Meera road (East)Thane-401107.",
            locality: "Bhayandar",
            parentId: 630,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [ ],
            aggregatedDiscountInfo: {
            header: "50% off",
            shortDescriptionList: [
            {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            descriptionList: [
            {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
            header: "50% OFF",
            shortDescriptionList: [
            {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            descriptionList: [
            {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT"
            }
            ],
            subHeader: "",
            headerType: 0,
            superFreedel: ""
            },
            chain: [ ],
            feeDetails: {
            fees: [ ],
            totalFees: 0,
            message: "",
            title: "",
            amount: "",
            icon: ""
            },
            availability: {
            opened: true,
            nextOpenMessage: "",
            nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
            imageBased: [ ],
            textBased: [ ],
            textExtendedBadges: [ ]
            },
            lastMileTravelString: "2.4 kms",
            hasSurge: false,
            sla: {
            restaurantId: "30237",
            deliveryTime: 21,
            minDeliveryTime: 21,
            maxDeliveryTime: 21,
            lastMileTravel: 2.4000000953674316,
            lastMileDistance: 0,
            serviceability: "SERVICEABLE",
            rainMode: "NONE",
            longDistance: "NOT_LONG_DISTANCE",
            preferentialService: false,
            iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 1000,
            new: false
            },
            subtype: "basic"
     },
     {
        type: "restaurant",
        data: {
        type: "F",
        id: "650956",
        name: "Darya Raja",
        uuid: "52273e5a-da3f-47f7-8d72-295f2ea70e3a",
        city: "5",
        area: "Mira Road",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "04da05f5f218acd43a4d0d8725b278a4",
        cuisines: [
        "Indian",
        "Seafood",
        "Thalis"
        ],
        tags: [ ],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 2,
        slugs: {
        restaurant: "darya-raja-mira-road-mira-road",
        city: "mumbai"
        },
        cityState: "5",
        address: "SHOP NO- 11, B WING, IRAISA SHOPPING,  BEVERLY PARK, NEARKANAKIYA STATION,  MIRA ROAD EAST, Zone 2, Mira Bhayander  Municipal Corporation (Thane Zone-7),  Maharashtra - 401107",
        locality: "Mira Bhayander",
        parentId: 391797,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [ ],
        aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
        {
        meta: "50% off | Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
        {
        meta: "Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        ribbon: [
        {
        type: "PROMOTED"
        }
        ],
        chain: [ ],
        feeDetails: {
        fees: [ ],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
        },
        availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5658419~p=4~eid=00000185-a9fc-73be-304a-21ee00640401",
        badges: {
        imageBased: [ ],
        textBased: [ ],
        textExtendedBadges: [ ]
        },
        lastMileTravelString: "2 kms",
        hasSurge: false,
        sla: {
        restaurantId: "650956",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
        },
        promoted: true,
        avgRating: "--",
        totalRatings: 0,
        new: true
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
        type: "F",
        id: "652882",
        name: "Goila Butter Chicken",
        uuid: "06759ce1-3687-4e6f-b870-8b9088a98673",
        city: "5",
        area: "GAURAV AVENUE",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "98c8ef9e10a249739ffba389218f3430",
        cuisines: [
        "North Indian",
        "Mughlai",
        "Biryani",
        "Indian"
        ],
        tags: [ ],
        costForTwo: 60000,
        costForTwoString: "₹600 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
        restaurant: "goila-butter-chicken-mira-road-mira-road",
        city: "mumbai"
        },
        cityState: "5",
        address: "GROUND FLOOR, GAURAV VALLEY, GAURAV AVENUE, GHODBUNDER, MIRA ROAD EAST, Mira Bhayander Municipal Corporation (Thane Zone-7), Maharashtra-401107",
        locality: "Mira Road",
        parentId: 322587,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [ ],
        aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
        {
        meta: "50% off | Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
        {
        meta: "Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        ribbon: [
        {
        type: "NEW"
        }
        ],
        chain: [ ],
        feeDetails: {
        fees: [ ],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
        },
        availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
        imageBased: [ ],
        textBased: [ ],
        textExtendedBadges: [ ]
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
        restaurantId: "652882",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 20,
        new: true
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
        type: "F",
        id: "612840",
        name: "GRADUATE IDLI WALA",
        uuid: "6cfbc107-d505-4c96-8d45-73d6a4e2b61c",
        city: "5",
        area: "Mira Road",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "sxcibhopkwjzsrnqtpuo",
        cuisines: [
        "South Indian"
        ],
        tags: [ ],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 0.5,
        slugs: {
        restaurant: "graduate-idli-wala-mira-road-mira-road",
        city: "mumbai"
        },
        cityState: "5",
        address: "SHOP NO 52 ELARA 4A, GARDEN CITY BACK SIDE, JP-North, nr. PODAR INTERNATIONAL SCHOOL, Kashimira, Mira Road, Mira Bhayandar, Maharashtra 401107, India",
        locality: "Kashimira",
        parentId: 365575,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [ ],
        aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
        {
        meta: "50% off | Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
        {
        meta: "Use WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        descriptionList: [
        {
        meta: "50% off up to ₹100 | Use code WELCOME50",
        discountType: "Percentage",
        operationType: "RESTAURANT"
        }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
        },
        chain: [ ],
        feeDetails: {
        fees: [ ],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
        },
        availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
        imageBased: [ ],
        textBased: [ ],
        textExtendedBadges: [ ]
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
        restaurantId: "612840",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false
        },
        subtype: "basic"
        },
    ];
 //restaurant = {restaurantList[0]} passed as props i.e'parameters'
 //instead of writing  """ const RestaurantCard = (props) => { """" we can write  """" const RestaurantCard = ({restaurant}) => { """" s well 
// this is called de structing insteading of writing props.restaurant.data everywhere we can write just restaurant.data
 const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) => {
   //console.log(props);
  // const {name,cuisines,cloudinaryImageId,lastMileTravelString}=restaurant.data;
  
        return(
            
            <div className="card" >
            
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
             cloudinaryImageId} />
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{lastMileTravelString}</h4>
            </div>
        
        ); 

/*
        return(
            
            <div className="card" >
                <h2>{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
           
               
            </div>
           
        );  */

};

//props - properties , passing some data into the component
//restaurant = {restaurantList[0]} is props passed as arguements below

// no key <<<<<<<<<< index key << unique key
 const Body = () => {
 
    return (
        <div className="restaurant-list">
            {  restaurantList.map((restaurant) => {
                  return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
                                                  }   // this is map function  restuarantlist contains aray of data from api data
                                                     // restaurant is an obj 
                                 )
            }
        </div>
        );
        };
    
    //<RestaurantCard name={restaurantList[0].data.name}  cuisines={restaurantList[0].data.cuisines} /> 
    // INSTEAD OF WRTTING THIs YOU CAN write ...restaurantList[0].data  //... is known as "spread operator"

    /*  <RestaurantCard {...restaurantList[0].data}/>
            <RestaurantCard {...restaurantList[1].data}/>
            <RestaurantCard {...restaurantList[2].data}/>
            <RestaurantCard {...restaurantList[3].data}/>
            <RestaurantCard {...restaurantList[4].data}/>
            <RestaurantCard {...restaurantList[5].data/>   if you can see we are repeating  for array 0 1 2 3 4 5... 
            so if we have 50 data array we shd repeat 50 times so we can "for / foreach loop" but in real world big business
            it is feasible to use "map"


     
*/    



 const Footer = () =>
 {
    return <h4>Footer</h4>;
    
 };

 

 const AppLayout = () => {
    return (
    
        
            /*
         Header -
          navbar
          logo (title)
          list item (right side)
          cart
        Body - 
              search bar
              restaurantlist
              restaurantcard
              -Image
              -Name
              -rating
              -price
              -cuisines
        Footer
          - links
          -copyright */
            
    <>                     
          <Header/>
          <Body/>
          <Footer/>
    </>  //this is nothing but <React.fragment>  or its knwn as empty tag
        
    );
 };
 

 

//NOW YOU CAN USE <DIV> <Header/><Body/><Footer/> </DIV> because JSX exp can have only oen parent 
//but in console you will <div id="root">and one more <div> which kinda looks ugly 
//so we use react fragments <React.fragment> <Header/><Body/><Footer/> </React.fragment>
// or <></>
 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>); //rendering functional component is like <Component_name/>
                                  //rendering the react element is like react_element_name 