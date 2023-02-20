const Shimmer = () =>{
    return  (
        <div  className="restaurant-list">
            {Array(21).fill("")
            .map((e,index) => (
            <div key={index} className="shimmer-card"></div>)
                         )
            
            }

            

        </div>
    )
}


export default Shimmer;


//Shimmer is nothing but a dummy layout , may be like boxes for restaurants 