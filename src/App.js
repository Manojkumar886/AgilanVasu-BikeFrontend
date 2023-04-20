import { Register } from "./BikeCustomerDetailsForm";
import { Homepage } from "./Homepage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './Images.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListallbikeDetails } from "./ListallBikeValues";
import { Newservicedetail } from "./NewserviceDetails";
import { ListallServiceDetails} from "./ListallServiceDetails";
import { Login } from "./LoginPage";
import { Reading } from "./ReadingPage";

function App() {
  return(
    <>
   {
    (sessionStorage.getItem("auth"))?
    <>
     <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path="createbikedetails" exact element={<Register/>}/>
      <Route path="listallbikedetails" exact element={<ListallbikeDetails/>}/>
      <Route path="createservicedetail" exact element={<Newservicedetail/>} />
      <Route path="listallservicedetails" exact element={<ListallServiceDetails/>}/>
      <Route path="reading/:myid" exact element={<Reading/>} />
    </Routes>
    </BrowserRouter>
    </>
    :
    <>
    <Login/>
    </>
   }
   
    </>
    );
}

export default App;
