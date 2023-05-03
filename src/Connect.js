import axios from "axios";

const url="http://localhost:8080/mybikeproject";

export const Loginperforamnce=async(object)=>
{

    const credentials=object.username+":"+object.password;

    const token=btoa(credentials);

    try{
        const t=await axios.get(`http://localhost:8080/mybikeproject/`,
    {
        headers:{
            "Authorization":`Basic ${token}`
        }
    })
    if(t.data)
    {
        sessionStorage.setItem("auth",token)
        return;
    }
    }
    catch(err)
    {
        alert(err);
    }

}
export const CreateBikeDetails=async(object)=>
{
    const t=await axios.post(`${url}/newbikedetails`,object);
    
    alert(JSON.stringify(t.data)+" has been added in database")
    return t;
}

export const DisplayAllbikevalues=async()=>
{
    const t=await axios.get(`${url}/`);
    return t;
}

export const readonecustomerdetail=async(id)=>
{

    const t=await axios.get(`${url}/Listone/${id}`)
    return t;
}

export const updatecustomerdetails=async(object)=>
{
    const t=await axios.put(`${url}/update`,object);
    return t;
}