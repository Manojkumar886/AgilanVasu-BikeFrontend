import { useEffect, useState } from "react";
import { Register } from "./BikeCustomerDetailsForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { list } from "./CustomerDetailsValues";

export const Homepage=()=>
{

    const[temparray,setTemparray]=useState([]);

    const[createview,setCreateview]=useState(false)

    const result=()=>
    {
        setTemparray(list)
    }

    useEffect(()=>
    {
        result()
    })


    return(
        <div className="container">
            {
                (createview) ?
                <>
                <Register/>
                <button className="btn btn-outline-secondary"
                onClick={
                    ()=>
                    {
                        setCreateview(false)
                    }
                }
                >
                    Back
                </button>

                </>
                :

                <>
                <button  className="btn btn-outline-success"
                onClick={
                    ()=>
                    {
                        setCreateview(true)
                    }
                }
                >
                    Create new customer
                </button>

                <br></br>
                <h1 align="center">List All Customer Details</h1>
                <div className="row justify-content-center">
                    <table className="bg-info col-lg-8 col-md-10 col-sm-12 table table-striped p-3">
                        <thead>
                            <tr>
                                <th>CustomerId</th>
                                <th>customerBikeno</th>
                                <th>CustomerName</th>
                                <th>CustomerEmailId</th>
                                <th>CustomerContactNO</th>
                                <th>DateofPurchase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                temparray.map((data,pos)=>
                                (
                                    <tr>
                                        <td>{data.cusId}</td>
                                        <td>{data.cusBikeno}</td>
                                        <td>{data.cusName}</td>
                                        <td>{data.cusContactno}</td>
                                        <td>{data.cusEmail}</td>
                                        <td>{data.Dateofpurchase}</td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </table>

                </div>
                </>


            }
        </div>


    );

}