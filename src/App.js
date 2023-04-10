import { Register } from "./BikeCustomerDetailsForm";
import { Homepage } from "./Homepage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './Images.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListallbikeDetails } from "./ListallBikeValues";
import { Newservicedetail } from "./NewserviceDetails";
import { ListallServiceDetails} from "./ListallServiceDetails";

function App() {
  return(
    <>
    <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path="createbikedetails" exact element={<Register/>}/>
      <Route path="listallbikedetails" exact element={<ListallbikeDetails/>}/>
      <Route path="createservicedetail" exact element={<Newservicedetail/>} />
      <Route path="listallservicedetails" exact element={<ListallServiceDetails/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
    );
}

export default App;
