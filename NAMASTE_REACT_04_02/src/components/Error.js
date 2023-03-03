import { useRouteError } from "react-router-dom";  // useRouteError is a hook , shows the error that is there
const Error = () =>{
    const err=useRouteError(); // gives the error object
    console.log(err);// in console it gives the info of the error 
    return (
        <div className="error">
            <h1>Uh-oh! something went wrong !!</h1>
            <h2>{err.status +" : "+err.statusText}</h2>
        </div>
    );
};

export default Error;