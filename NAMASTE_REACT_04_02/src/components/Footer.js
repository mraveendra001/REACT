import { useContext } from "react";
import UserContext from "../util/UserContext";

const Footer = () =>
 {
   const {user} = useContext(UserContext);

    return  <div className="p-10 font-bold bg-red-900 flex justify-between">
      <h4 className="text-white">This website is developed by {user.name} and you can contact them on {user.email}</h4>
      <h4 className="text-right text-white">&copy; Copyright meghanarahul5430@gmail</h4>
    </div>
    
    
 }

 export default Footer;