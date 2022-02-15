import Single from "../../Component/Singleday/singleday";
import "./home.css"

export default function Home() {
    return(
   <div className="container-fluid">
       <div className="row" id="r1"></div>
       <div className="row">
           <div className="col-sm-2">
           <Single/>
           </div>
       </div>
        
        </div>
       
    )
}