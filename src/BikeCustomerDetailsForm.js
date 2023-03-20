import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';
export let Register=()=>
{
    const[process,setProcess]=useState({

    })
    return(
        <>
            <div className="container bg-primary">
                <img src="./BikeFormpic.webp" alt="This form is zealous bike project image" id="center1" />
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 shadow-lg p-4 bg-success">
                        <h4 className="text-center mt-4 mb-4 text-light text-uppercase"><i class="bi bi-bicycle"></i> CustomerRegisterForm</h4>
                        <div className="row justify-content-center">
                            <div className="row">
                                <div className="col">
                                    <label className="form-label"> Registernumber</label>
                                    <input type=" text" className="form-control" placeholder="Registernumber" />
                                </div>
                                <div className='col'>
                                    <label className="form-label"> CustomerId</label>
                                    <input type="text" className="form-control" placeholder="CustomerID" />
                                </div>
                            </div>
                            <div>
                                <label className="form-label"> Customer Name</label>
                                <input type="text" className="form-control" placeholder="CustomerName(only firstname)" />
                            </div>
                            <div>
                                <label className="form-label"> CustomerContactno</label>
                                <input type="text" className="form-control" placeholder="**********" />
                            </div>
                            <div>
                                <label className="form-label"> CustomerDateofpurchase</label>
                                <input type="date" className="form-control" placeholder="CustomerName(only firstname)" />
                            </div>
                            <div>
                                <label className="form-label"> CustomerEmailId</label>
                                <input type="Email" className="form-control" placeholder="**********" />
                            </div>
                            <div className="mt-5 row justify-content-center">
                                <button className="btn btn-outline-warning col-3 me-5">Register</button>
                                <button className="btn btn-outline-danger col-3">Cancel</button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}


