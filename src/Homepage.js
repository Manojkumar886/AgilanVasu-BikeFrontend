import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import TwoWheelerSharpIcon from '@mui/icons-material/TwoWheelerSharp';
import './Images.css'



export const Homepage=()=>{
    return(
        <>
        <div id="bc1">
            <Navbar expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/" className="">Zealous <TwoWheelerSharpIcon></TwoWheelerSharpIcon> Servicecenter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="manoj" />
                    <Navbar.Collapse id="manoj">
                        <Nav className="ms-5">   
                        <NavDropdown title="BikeDetails" id="basic-nav-dropdown">
                        <NavDropdown.Item href="createbikedetails">Create</NavDropdown.Item>
                        <NavDropdown.Item href="listallbikedetails">ListAll(update & Read & Delete)</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="ServiceDetails" id="basic-nav-dropdown" className="ms-5">
                        <NavDropdown.Item href="createservicedetail">
                            Create
                        </NavDropdown.Item>
                        <NavDropdown.Item href="listallservicedetails">ListAll</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav className="ms-5">
                        <button className="btn btn-outline-dark me-5 "   >
                                Logout
                        </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    )
}
// import { useEffect, useState } from "react";
// import { Register } from "./BikeCustomerDetailsForm";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import { FetchExact, list, remove } from "./CustomerDetailsValues";
// import { Reading } from "./ReadingPage";
// import { Updating } from "./UpdatingPage";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';

// export const Homepage=()=>
// {

//     const[temparray,setTemparray]=useState([]);

//     const[createview,setCreateview]=useState(false)

//     const[readview,setReadview]=useState(false)

//     const[pos,setPos]=useState(0)

//     const[updateview,setUpdateview]=useState(false);

//     const[obj,setObj]=useState({});



//     const result=()=>
//     {
//         setTemparray(list)
//     }

//    useEffect(
//     ()=>
//     {
//         result()
//     }
//    )


//     return(
//         <Navbar bg="primary" expand="lg">
//             <Container>
//                 <Navbar.Brand  href="/" ><ElectricMopedIcon></ElectricMopedIcon>ZealousBikeServiceCentre</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="manoj"/>
//                 <Navbar.Collapse id="manoj">
//                     <Nav>
//                         <Nav.Link href="/create"> NEW</Nav.Link>
//                         <Nav.Link href="/update">UPDATE</Nav.Link>
//                         <Nav.Link>READ</Nav.Link>
//                     </Nav>

//                 </Navbar.Collapse>


//              </Container>

//         </Navbar>
//         // <div className="container">
//         //     {
//         //         (createview) ?
//         //         <>
//         //         <Register/>
//         //         <button className="btn btn-outline-secondary"
//         //         onClick={
//         //             ()=>
//         //             {
//         //                 setCreateview(false)
//         //             }
//         //         }
//         //         >
//         //             Back
//         //         </button>

//         //         </>
//         //         :
//         //         (readview)?
//         //         <> 
//         //         <Reading  who={pos}/>
//         //         <button className="btn btn-outline-secondary"
//         //         onClick={
//         //             ()=>
//         //             {
//         //                 setReadview(false)
//         //             }
//         //         }>
//         //             Back
//         //         </button>

//         //         </>
//         //         :
//         //         (updateview)?
//         //         <>
//         //         <Updating who={pos} mention={obj} />
//         //         <button className="btn btn-outline-secondary"
//         //         onClick={()=>
//         //         {
//         //             setUpdateview(false)
//         //         }}>
//         //             Back
//         //         </button>
//         //         </>
//         //         :

//         //         <>
//         //         <button  className="btn btn-outline-success"
//         //         onClick={
//         //             ()=>
//         //             {
//         //                 setCreateview(true)
//         //             }
//         //         }
//         //         >
//         //             Create new customer
//         //         </button>

//         //         <br></br>
//         //         <h1 align="center">List All Customer Details</h1>
//         //         <div className="row justify-content-center">
//         //             <table className="bg-info col-lg-8 col-md-10 col-sm-12 table table-striped p-3">
//         //                 <thead>
//         //                     <tr>
//         //                         <th>CustomerId</th>
//         //                         <th>customerBikeno</th>
//         //                         <th>CustomerName</th>
//         //                         <th>CustomerEmailId</th>
//         //                         <th>CustomerContactNO</th>
//         //                         <th>DateofPurchase</th>
//         //                         <th>Perforamnce(READ,UPDATE,DELETE)</th>
//         //                     </tr>
//         //                 </thead>
//         //                 <tbody>
//         //                     {
//         //                         temparray.map((data,ind)=>
//         //                         (
//         //                             <tr>
//         //                                 <td>{data.cusId}</td>
//         //                                 <td>{data.cusBikeno}</td>
//         //                                 <td>{data.cusName}</td>
//         //                                 <td>{data.cusContactno}</td>
//         //                                 <td>{data.cusEmail}</td>
//         //                                 <td>{data.Dateofpurchase}</td>
//         //                                 <td>
//         //                                     <button className="btn btn-outline-warning"
//         //                                     onClick={
//         //                                         ()=>
//         //                                         {
//         //                                             setReadview(true)
//         //                                             setPos(ind)

//         //                                         }
//         //                                     }
//         //                                     >READ</button>
//         //                                     <button className="btn btn-outline-primary"
//         //                                     onClick={
//         //                                         ()=>
//         //                                         {
//         //                                             setUpdateview(true)
//         //                                             setPos(ind)
//         //                                             setObj(FetchExact(data.cusName))
//         //                                         }
//         //                                     }
                                                
//         //                                     >UPDATE
//         //                                     </button>
//         //                                     <button className="btn btn-outline-danger"
//         //                                     onClick={
//         //                                         ()=>
//         //                                         {
//         //                                          setTemparray(remove(ind))  
//         //                                         }
//         //                                     }
//         //                                     >DELETE</button>
//         //                                 </td>
//         //                             </tr>
//         //                         ))

//         //                     }

//         //                 </tbody>
//         //             </table>

//         //         </div>
//         //         </>


//         //     }
//         // </div>


//     );

// }