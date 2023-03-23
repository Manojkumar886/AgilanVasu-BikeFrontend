import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Images.css'
import { useState } from 'react';
import { create } from './CustomerDetailsValues';
export let Register=()=>
{
    const[process,setProcess]=useState({
        "cusId":0,
        "cusBikeno":"",
        "cusName":"",
        "cusContactno":0,
        "cusEmail":"",
        "Dateofpurchase":""
    })

    const track=(agi)=>
    {
        const{name,value}=agi.target
        setProcess(
            (old)=>
            {
                return{
                    ...old,
                    [name]:value
                }
            }
        )
    }
    const reset=()=>
    {
        alert('Rejected successfullu\y...!')
    }

    const register=()=>
    {
        alert('welcome to zealous Bike service'+JSON.stringify(process))
        create(process);
    }
    return(
        <>
           <div className="container mt-5" >
                <span id='center1'></span>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                <h4 className="text-center mt-5 mb-5" id='center2'><i class="bi bi-bicycle"></i> Bike Details Form</h4>
                    <div className="row justify-content-center " >
                        <div className="row">
                            <div className="col">
                                <label className="form-label" >CustomerId</label>
                                <input type="text" 
                                onChange={track}
                                value={process.cusId}
                                 name="cusId"
                                className="form-control" />
                            </div>
                            <div className="col">
                                <label className="form-label" >CustomerBikeno</label>
                                <input type="text" 
                                name="cusBikeno"
                                onChange={track}
                                value={process.cusBikeno}
                                className="form-control" />
                            </div>
                        </div>
                    </div>  
                    <div className="mt-3">
                                <label className="form-label" >CustomerName</label>
                                <input type="tel" 
                                name="cusName"
                                onChange={track}
                                value={process.cusName}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >CustomerContactNO</label>
                                <input type="tel" 
                                name="cusContactno"
                                onChange={track}
                                value={process.cusContactno}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >CustomerEmail</label>
                                <input type="email" 
                                name="cusEmail"
                                onChange={track}
                                value={process.cusEmail}
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >DateofPurchase</label>
                                <input type="date"
                                name="Dateofpurchase"
                                onChange={track}
                                value={process.Dateofpurchase}
                                 className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3" onClick={register}  >Register</button>
                        <button className="btn btn-outline-danger col-3 me-3" onClick={reset} type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
                </div>
                </div>
        </>
    );
}


