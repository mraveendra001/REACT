import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"; //importing the cartslice 

const store= configureStore({
reducer:{
    cart :cartSlice,
}
});// this is how we put the slice into the store , reducer into the store 

export default store;

//store can used by whole app or a component its our wish 


//store concept 
/**
 * create the store by using configure  store from redux toolkit
 * provider - provide the store to the app , by using provider component <Provider store={store}> </Provider> from react-redux
 * then create a slice  by using createSlice from redux toolkit , 
 * crete needs - name,initial state , reducers 
 * createSlice ({
 * name :"",
 * intialState:{
 * },
 * reducers:{
 *   addItem: (state,action)=>{state=action.payload}
 * }
 * })
 * export {addItem}= cartSlice.actions;
 * export default cartSlice.reducer;
 * 
 * 
 * put the slice to the store 
 * import cartSlice from "./cartSlice";
 * put the reeucer to the store 
 * reducer:{
    cart :cartSlice, //cart slice name 
    user : userSlice // assuming userSlice is one more reducer, butthe name of the object is reducer
     }
 * now subscribe to the store 
     using useSelector
 */
