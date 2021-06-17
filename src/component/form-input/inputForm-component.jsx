import React from 'react'
import { useState } from 'react'
import Chart from '../graph-data/graph.comonent'
import{calculateSimpleIntrest} from '../../utils/utils'

const InputForm=()=> {  
    const [principal,setPrincipal]=useState();
    const [rate, setRate]=useState();
    const[time, setTime]=useState();
    const [terminate,setTerminate]=useState();
    const[data,setData]=useState([]);
   const handleChange = (event) => {
    //   event.preventDefault();
      const value=parseInt(event.target.value)
     switch(event.target.name){
         case 'principal':
             setPrincipal(value)
             break;
             case'time':
             setTime(value)
             break;
             case'rate':
             setRate(value)
             break;
             case'terminate':
            setTerminate(value)
            break;
             default: break;
     } 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    const dataGraph=calculateSimpleIntrest(principal,rate,time,terminate);
     setData(dataGraph)

    }
    console.log('1',data)
  
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>PRINCIPAL</label>
                    <input type="number" name='principal' value={principal} onChange={handleChange} required />
                    <label> RATE</label>
                    <input type="number" name='rate' value={rate} onChange={handleChange} required />
                    <label> TIME IN YEAR'S</label>
                    <input type="number" name='time' value={time} onChange={handleChange} required />
                    <label> HOW MANY YEAR'S</label>
                    <input type='number' name='terminate' value={terminate} onChange={handleChange} required ></input>
                    <input type="submit" value="Submit" onClick={handleSubmit} />
                </form>

                <h1>PLOATING A CHART</h1>
                {
                data.length?<Chart data={data}/>:null
                }<div>
                    
                    
                    
                    </div>
            </div>
        );



}

export default InputForm;