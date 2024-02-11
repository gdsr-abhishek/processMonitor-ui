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
    <div className="App bg-stone-800">
    
      <h1 className="text-lime-300">Process Monitor</h1>
      <div className="searchArea ">
        searchArea
      </div>
      <div className="processArea">
      <div >
        <table className=" table-auto border border-collapse border-dotted border-lime-300 ">
          <tr className="m-10 p-10 tableRow">
           <th className='m-2 p-2 border border-lime-300 text-lime-300'>USER</th>
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>Process ID</th>
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>RAM Usage %</th>
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>Memory Usage %</th>        
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>VSZ</th>        
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>RSS</th>
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>TTY</th>
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>STAT</th>   
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>START</th>   
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>TIME</th>     
           <th className=' m-2 p-2 border border-lime-300 text-lime-300'>COMMAND</th>                         
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
    <td className='border border-lime-300 text-white'>{row.USER}</td>
    <td className='border border-lime-300 text-white'>{row.PID}</td>
    <td className='border border-lime-300 text-white'>{row['%CPU']}</td>
    <td className='border border-lime-300 text-white'>{row['%MEM']}</td>
    <td className='border border-lime-300 text-white'>{row.VSZ}</td>
    <td className='border border-lime-300 text-white'>{row.RSS}</td>
    <td className='border border-lime-300 text-white'>{row.TTY}</td>
    <td className='border border-lime-300 text-white'>{row.STAT}</td>
    <td className='border border-lime-300 text-white'>{row.START}</td>
    <td className='border border-lime-300 text-white'>{row.TIME}</td>
    <td className='border border-lime-300 text-white'>{row.COMMAND}</td>
  </tr>
);
}
export default App;
