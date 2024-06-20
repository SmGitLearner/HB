import React, { useEffect, useState } from 'react'

function IPL() {
    const[ipllist,setipllist]=useState([]);
    const callApi=async() => {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();
        console.log(data);
        setipllist(data);
    }
    useEffect(()=>{
        callApi();
    },[]);
  return (
    
    <>
    <h1>IPL Points table</h1>
    <table>
        <thead>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
        </thead>
        <tbody>
            {
                ipllist.map((item)=> {
                    return(
                        <tr>
                            <td>{item.No}</td>
                            <td>{item.Team}</td>
                            <td>{item.Matches}</td>
                            <td>{item.Won}</td>
                            <td>{item.Lost}</td>
                            <td>{item.Tied}</td>
                            <td>{item.NRR}</td> 
                            <td>{item.Points}</td>
    
                        </tr>
                    )
                }) 
            }

        </tbody>
    </table>
    </>
     )
}


export default IPL;
