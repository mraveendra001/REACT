import {createContext} from "react";


const UserContext= createContext({
user : {
     name: "Meghana R" , 
     email: "meghanarahul5430@gmail.com" //dummy name and email 
}
})
UserContext.displayName="User Conext"; //in react dev tools we can just give a name to debug it 
export default UserContext;
//state and props are tied to a componet 
//context is like usestate for whole application
//we can useContext anywhere in app

