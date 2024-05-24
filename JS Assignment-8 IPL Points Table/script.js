const tbody=document.querySelector('tbody');
fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data').
then((res)=>res.json())
.then(data=>{
    console.log(data);

data.forEach((team,index) =>
{
    const trow=document.createElement('tr');
    trow.innerHTML=`
    <td>${index+1}</td>
    <td>${team.Team}</td>
    <td>${team.Matches}</td>
    <td>${team.Won}</td>
    <td>${team.Lost}</td>
    <td>${team.Tied}</td>
    <td>${team.NRR}</td>
    <td>${team.Points}</td>`; 
    tbody.appendChild(trow);

});
})
.catch((err) => console.log(err))