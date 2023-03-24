import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { read } from './CustomerDetailsValues';


export const Reading=(mypos)=>
{
    const [customervalues,setCustomervalues]=useState({
        "cusId":0,
        "cusBikeno":"",
        "cusName":"",
        "cusContactno":0,
        "cusEmail":"",
        "Dateofpurchase":""
    })
    useEffect(()=>
    {
        callreadingvalues();
    })

    const callreadingvalues=()=>
    {
        setCustomervalues(read(mypos.who))
    }

    return(
        <>
        <div className="container row justify-content-center">
            <div className="card col-lg-8 col-md-10 col-sm-12 bg-primary">
                <div className="card-body">
                    <h1>{customervalues.cusId}</h1>
                    <h1>
                        {
                            customervalues.cusBikeno
                        }
                    </h1>
                    <h1>
                        {
                            customervalues.cusName
                        }
                    </h1>
                    <h1>
                        {
                            customervalues.cusContactno
                        }
                        </h1>
                        <h1>
                        {
                            customervalues.cusEmail
                        }
                    </h1>
                    <h1>
                        {
                            customervalues.Dateofpurchase
                        }
                    </h1>
                    

                </div>

            </div>
            
        </div>


        </>

    );
}