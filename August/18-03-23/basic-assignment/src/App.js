import { useState } from "react";
import Form  from "./Form";
import List from "./List";

const list=[{
       name:'amol', date:new Date()
},{
       name:'sathish',date:new Date()
}];

const App=()=>{

       const [getList,setList] = useState(list)

       const appendDetails=(obj)=>{
            setList([...getList,obj]);
       } 

       return(<div>
        <Form changeHandler={appendDetails}/>
        <List filterList={getList}/>
        {2+2}
        {list.length>0?"yes":"no"}
        {list.length && (<div>
              <h1>Hello world</h1>
        </div>)}
       </div>)
}
export default App;