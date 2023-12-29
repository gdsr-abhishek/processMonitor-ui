import logo from './logo.svg';
import './App.css';


function App() {

  return (
    <div className="App">
    
      <h1 className="appTitle">Process Monitor</h1>

      <div className="processArea">
      <div className="searchArea">
        searchArea
      </div>
      <div >
        <table className="tableArea">
          <th className="tableRow">
           <td>USER</td>
           <td>Process ID</td>
           <td>RAM Usage %</td>
           <td>Memory Usage %</td>        
           <td>VSZ</td>        
           <td>RSS</td>
           <td>TTY</td>
           <td>STAT</td>   
           <td>START</td>   
           <td>TIME</td>     
           <td>COMMAND</td>          
                       
          </th>
        </table>
      </div>

      </div>
    
    </div>
  );
}

export default App;
