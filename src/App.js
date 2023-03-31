import { Register } from "./BikeCustomerDetailsForm";
import { Homepage } from "./Homepage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import './Images.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Updating1 } from "./UpdatingPage";

function App() {
  return(
    <>
    <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path="create" exact element={<Register/>} />
      <Route path="update" exact element={<Updating1/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
    );
}

export default App;
