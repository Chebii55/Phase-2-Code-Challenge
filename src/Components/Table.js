import React,{useState,useEffect} from "react";
import TableRow from "./TableRow"

function Table(){
    const[data,setData]=useState([])
    useEffect(()=>{
        const url="http://localhost:3004/transactions";
        fetch(url)
        .then(resp=>resp.json())
        .then((data)=>{
          console.log(data)
          setData(data)
        })
      },[])
return(<>
    <table style={{border: "3px solid rgb(0, 0, 0)",margin:"10px",padding:"5px"} }> 
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">DATE</th>
        <th scope="col">DESCRIBTION</th>
        <th scope="col">CATEGORY</th>
        <th scope="col">AMOUNT</th>
      </tr>
    </thead>
    <tbody>
      {
      data.map((data)=>{
       return (<>
       <TableRow
       key={data.id}
        id={data.id}
        date={data.date}
        description={data.description}
        category={data.category}
        amount={data.amount}    
        /></>)

      })} 
       </tbody>
      </table></>

)
}
export default Table