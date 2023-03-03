import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../util/useRestaurant";
import { IMG_CDN_URL, IMG_CDN_URL_MENU } from "./config";
import Shimmer from "./Shimmer";
import { addItem } from "../util/cartSlice";
import {useDispatch} from "react-redux";
import Veg from "../assets/img/isVeg.PNG";
import nonVeg from "../assets/img/nonVeg.PNG";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params; //de structuring of id
  //we can destructure like this as well  const {id}=useParams();
  //console.log(params);

  const restaurant = useRestaurant(id); //useRestuarant is a custom made hook , we have imported from util/useRestaurant
  const dispatch = useDispatch();

  const addFoodItem = (item) =>{
     //dispatch(addItem("Graphes"));
     dispatch(addItem(item));
  }  // dispatch is coming from the hook named useDispatch which comes from react-reduxx

  return !restaurant ? (
    <Shimmer />
  ) : (
    //hereu can do early return or shimmer   , if use null in useState then null will be rendered initially to we can make it wait by adding shimmer

    //how to read a dynamic URL params

    <div>
      <div className="flex border-slate-800 shadow-2xl m-7">
          {/* <h1>Restaurant Id : {id}</h1>  {/* de structuring of id */}

        <img
          className="h-[300px] w-[400]  p-14"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />
        <div>

          <h2 className=" py-14 font-semibold flex flex-col text-3xl max-w-xl">
            {restaurant.name}
          </h2>
          <h3 className="py-3">{restaurant.cuisines}</h3>
          <h3 className="flex">
            {restaurant.locality} , {restaurant.area}
          </h3>

          <h3 className="flex">
            {restaurant.avgRating} stars {restaurant.costForTwoMsg}{" "}
          </h3>
          <h3>{restaurant.slaString}</h3>
        </div>
      </div>
      <div>
        {/*<h1>Menu</h1> */}
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div className="w-2/3 px-[200px] flex justify-between space-x-[100px]">
              {/* <div className="py-10" key={item.id}> */}
                <div className="flex-col justify-between">
            <p>    {item.isVeg
        ? <img src={Veg} alt="Vegetarian" />
        : <img src={nonVeg} alt="Non-Vegetarian" />
      }</p>
                  <p className="w-36 py-14">{item.name}</p>
              
                  <p className="">₹ {item.price / 100}</p>
                </div>
              {/* </div> */}
              <div key={item.id}>
                <img
                  alt=""
                  className="m-6 h-auto w-auto rounded-md "
                  src={IMG_CDN_URL_MENU + item.cloudinaryImageId}
                />
                 <button className="bg-red-900 text-white" onClick={()=>addFoodItem(item)}>Add item</button>
            
              </div>
          
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
