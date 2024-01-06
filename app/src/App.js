import './App.css';
import {useEffect, useState} from 'react';

 let App= ()=>{
   const [rows,setRows] = useState([{}]);
   useEffect(()=>{async function getData(){
   try{
    const res=  await fetch("http://localhost:8000/ps/all")
    const result = await res.json();
    setRows(result);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
  }
  getData();
  },[rows]);
  return (
    <div className="App">
    
      <h1 className="appTitle">Process Monitor</h1>
      <div className="searchArea">
        searchArea
      </div>
      <div className="processArea">
      <div >
        <table className="tableArea">
         <thead>
          <tr className="tableRow">
           <th>USER</th>
           <th>Process ID</th>
           <th>RAM Usage %</th>
           <th>Memory Usage %</th>        
           <th>VSZ</th>        
           <th>RSS</th>
           <th>TTY</th>
           <th>STAT</th>   
           <th>START</th>   
           <th>TIME</th>     
           <th>COMMAND</th>                         
          </tr>
          </thead>
          <tbody>
        {rows.map(row=><RowComponent key={row.PID} row ={row}/>)}
        </tbody>
        </table>
      </div>

      </div>
    
    </div>
  );
}
/*
 {
        "USER": "root",
        "PID": "1",
        "%CPU": "0.0",
        "%MEM": "0.0",
        "VSZ": "167028",
        "RSS": "12100",
        "TTY": "?",
        "STAT": "Ss",
        "START": "22:10",
        "TIME": "0:01",
        "COMMAND": "/sbin/init"
    }
*/
function RowComponent({row}){
return(
  <tr>
    <td>{row.USER}</td>
    <td>{row.PID}</td>
    <td>{row['%CPU']}</td>
    <td>{row['%MEM']}</td>
    <td>{row.VSZ}</td>
    <td>{row.RSS}</td>
    <td>{row.TTY}</td>
    <td>{row.STAT}</td>
    <td>{row.START}</td>
    <td>{row.TIME}</td>
    <td>{row.COMMAND}</td>
  </tr>
);
}
export default App;
