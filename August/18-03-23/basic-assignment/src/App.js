import Form  from "./Form";
import List from "./List";

const list=[{
       name:'amol', date:new Date()
},{
       name:'sathish',date:new Date()
}];

const App=()=>{

       return(<div>
        <Form/>
        <List filterList={list}/>
        {2+2}
        {list.length>0?"yes":"no"}
        {list.length && (<div>
              <h1>Hello world</h1>
        </div>)}
       </div>)
}
export default App;