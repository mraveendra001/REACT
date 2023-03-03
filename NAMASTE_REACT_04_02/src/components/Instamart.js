import { useState } from "react";
//this is how the accordian component is built 
//but here if onesection is visible then we ourselves have ot hide when we show the other section , it doesnt haide it self , thst is because each section hasindependent state
// and we cant directly modify the states of the siblings section , so we shd give the control of the state of the siblings to the parent i.e Instamart this is 
//called "LIFTING THE STATE UP " / LIFTING THE STATE UP TO THE INSTAMART
const Section = ({title,description,isVisible,setIsVisible})=>{  //note we are passing the setisvisible to parent via props it sets my section config like theway i have written in shownbout , 
   // showAbout:false,  showTeam:false,showCareers:false
    // const [isVisible,setIsVisible]= useState(false);  - this is removed coz we removed the power of state control from section siblings
    return (
        <div className="border border-red-400 p-2 m-2">
             <h3>{title}</h3>
             {   isVisible ? (
             <button 
             onClick={() => setIsVisible(false)} 
             className="cursor-pointer underline">
                Hide
             </button> ) : (
           
             <button onClick={() => setIsVisible(true)} 
             className="cursor-pointer underline">
                Show
            </button> )
             }
             {isVisible && <p>{description}</p>}
        </div>
       
    )
}

const Instamart =() =>{
   // const [sectionConfig, setSectionconfig] = useState(
       // "About"
   // )  //giving the power to parent instamart
   const [visibleSection, setIsVisibleSection] = useState(
    "About"
);

    /* showAbout:false,
        showTeam:false,
        showCareers:false,
        showProducts:false    this makes code lengthy and shity so we can use keys or indexes we will one state variable like this useState(About)*/ 
    return (<div>
     <h1 className="text-3xl p-2 m-2 font-bold ">Instamart</h1>
     <Section title={"About Instamart"}
            description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremelypainful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain canprocure him some great pleasure. To take a trivial example, which of us ever undertakes  laborious physical exercise"}
            isVisible={visibleSection=="About"}
            setIsVisible={()=>{
                if (visibleSection === "About") {
                    setIsVisibleSection(false);
                  } else {
                    setIsVisibleSection("About");
                  }
      } }
            /*
            setIsVisible={()=>
                   setSectionconfig({
                    showAbout:true,
                    showTeam:false,
                    showCareers:false,
                   })
            }*/
                  />
                  

    <Section title={"Team Instamart"}
     description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremelypainful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain canprocure him some great pleasure. To take a trivial example, which of us ever undertakes  laborious physical exercise"}
     isVisible={visibleSection=="Team"}
     //setIsVisible={()=>setIsVisibleSection("Team")}
     setIsVisible={()=>{
        if (visibleSection === "Team") {
            setIsVisibleSection(false);
          } else {
            setIsVisibleSection("Team");
          }
} }
     /*
     setIsVisible={()=>
        setSectionconfig({
         showAbout:false,
         showTeam:true,
         showCareers:false,
        })
 }*/
  />
    <Section title={"Careers Instamart"}
     description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremelypainful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain canprocure him some great pleasure. To take a trivial example, which of us ever undertakes  laborious physical exercise"}
     isVisible={visibleSection=="Career"}
    // setIsVisible={()=>setIsVisibleSection("Career")}
    setIsVisible={()=>{
        if (visibleSection === "Career") {
            setIsVisibleSection(false);
          } else {
            setIsVisibleSection("Career");
          }
} }
     /*
     setIsVisible={()=>
        setSectionconfig({
         showAbout:false,
         showTeam:false,
         showCareers:true,
        })
    }*/
    />
    <Section title={"Product Instamart"}
     description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremelypainful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain canprocure him some great pleasure. To take a trivial example, which of us ever undertakes  laborious physical exercise"}
     isVisible={visibleSection=="Product"}
     setIsVisible={()=>{
        if (visibleSection === "Product") {
            setIsVisibleSection(false);
          } else {
            setIsVisibleSection("Product");
          }
} }
     
  /*
     setIsVisible={()=>
        setSectionconfig({
         showAbout:false,
         showTeam:false,
         showCareers:false,
         showProducts:true,
        })
    } */     // now if you wana add one mroe section then again repeat all the true false and all , its a tedious step 
    />
        {/*
         <AboutInstamart/>
         <DetailsOfInstamart/>   instead of gving all these we can return the section we defined 
         <TeamsOfInstamart/>
         <ProductOfInstamart/>
         <Product/>
         <Carrers/>
    */}
    </div>)
}

export default Instamart;