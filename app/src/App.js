import './App.css';
import {useEffect, useState} from 'react';

 let App= ()=>{
   const [rows,setRows] = useState([{}]);
   useEffect(function getData(){
   try{
    fetch("http://localhost:8080/ps/all").then( async (res)=>{
      const result = await res.json();
      console.log(result);
      setRows(result);
    }).catch((err)=>{
console.log(err);
    })
    
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
  },[]);
  return (
    <div className="App">
    
      <h1 className="appTitle">Process Monitor</h1>
      <div className="searchArea">
        searchArea
      </div>
      <div className="processArea">
      <div >
        <table className="tableArea">
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

            {rows.map(row=> <RowComponent row={row} />)}
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
