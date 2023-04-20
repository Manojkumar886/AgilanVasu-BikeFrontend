import { useEffect, useState } from 'react';
import './Images.css'
import { Button } from 'react-bootstrap';
import { DisplayAllbikevalues } from './Connect';

export const ListallbikeDetails=()=>
{
    const[allvalues,setAllvalues]=useState([])

    const mybikevalue=async()=>
    {
        const t=await DisplayAllbikevalues();
        setAllvalues(t.data);

    }

    useEffect(()=>
    {
        mybikevalue();
    })

  
    return(
                <>
                <div className="Container mt-5 bg-warning d-flex" >
                    <div className="row justify-content-center">
                                <div className="table-responsive-md">
                                    <table className="col-lg-8 col-md-10 col-sm-12 table table-striped  p-4 shadow rounded">
                                        <thead id="texting">
                                            <tr>
                                                <th>customerId</th>
                                                <th>customerBikeNo</th>
                                                <th>CustomerName</th>
                                                <th>CustomerContact Number</th>
                                                <th>CustomerEmail Id</th>
                                                <th>Dateofpurchase</th>  
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                allvalues.map((data)=>(
                                                    <tr>
                                                        <td>
                                                            <a href={`reading/${data.cusId}`} className="btn btn-outline-primary">{data.cusId}</a>
                                                        </td>
                                                        <td>{data.cusBikeno}</td>
                                                        <td>{data.cusName}</td>
                                                        <td>{data.cusContactno}</td>
                                                        <td>{data.cusEmail}</td>
                                                        <td>{data.Dateofpurchase}</td>
                                                        <td>
                                                            <Button>
                                                                UPDATE
                                                            </Button>
                                                            <Button className='ms-3'>
                                                                DELETE
                                                            </Button>
                                                         </td>
                                                    </tr>

                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                </div>
                </>
            );
}