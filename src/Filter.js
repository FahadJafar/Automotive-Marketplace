import { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';

const Filter = () => {
    const [search,setSearch]=useState('');
    return ( 
        <div className="Filter">
            <input type="text" placeholder="Search...." onChange={(e)=>setSearch(e.target.value)}/>
            {
                JSONDATA.filter((f)=>{
                    if(search==="")
                    {
                        return true;
                    }
                    else if (f.first_name.toLowerCase().includes(search.toLowerCase()))
                    {
                        return true;
                    }

                }).map((M)=>(
                   <div className='user' key={M.id}>
                  <p>{M.first_name+" "}</p>
                  </div>
                    
                ))
            }
        </div>
    );
}
 
export default Filter;