import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({  // we havecreated a slice
    name:'cart',  //name of the cart
    initialState:{
         items:["banana","apples"] ,   // will be empty or like now it has banana , apples and now the cart items length is 2 

    } ,
    reducers :{
        addItem : (state,action) =>{
                   state.items.push(action.payload); //    on click we will pass data ryt ,we will receive like this                   
                    //state is initial stte and action is data 
                    //state will change to prev state 
                    //never return anything from here it directly takes a state and modifies 
        }   ,  ///reducer called on a dispatch action 

        removeItem: (state,action)=>{
            state.items.pop();
        } ,
        clearCart: (state)=>{
            state.items = [];
        } ,

    },
});
//cart slice is like a big object this object has reducer , and actions 
/*
 slice ={
    ations:{
         additem 
         removeitem
         clearitem
    },
    reducer:reducers
          
    
 }   //in the backend it happens like this 
*/

export const {addItem,removeItem,clearCart}=cartSlice.actions;  // this is how we shd export ,actions are exportedby name coz there are bunch if actions
export default cartSlice.reducer;// this too we shd export  . its "reducer" not 'reducers', it will combine all the reducers to one reducer

//now put slice into store 