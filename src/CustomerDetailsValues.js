let BikeCustomers=[
    {
        "cusId":1,
        "cusBikeno":"TN34V5064",
        "cusName":"Manojkumar ",
        "cusContactno":9789355930,
        "cusEmail":"maddymano232@gmail.com",
        "Dateofpurchase":"21-01-2023"
    },
    {
        "cusId":2,
        "cusBikeno":"TN44V5064",
        "cusName":"Madhankumar ",
        "cusContactno":8909355930,
        "cusEmail":"madhanzealous2032@gmail.com",
        "Dateofpurchase":"21-02-2023"
    },
    {
        "cusId":3,
        "cusBikeno":"TN14V5064",
        "cusName":"Annamalai ",
        "cusContactno":9567878787,
        "cusEmail":"annamalais2@gmail.com",
        "Dateofpurchase":"11-03-2023"
    }
]

export const create=(data)=>
{
    BikeCustomers.push(data);
}



export const list=()=>
{
    return BikeCustomers;
}


export const read=(index)=>
{
    return BikeCustomers[index];//Arrayname[pos];
}


export const remove=(index)=>
{
    BikeCustomers=BikeCustomers.filter((data,ind)=>
    {
        return ind!==index;
    })
    return BikeCustomers;
}