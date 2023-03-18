
const List=(props)=>{
       return (<div>
         {
              props.filterList.map((obj,index)=>{
                    return (<div>
                     <h1>{obj.name}</h1>
                     <h1>{obj.date.toLocaleDateString()}</h1>
                    </div>)
              })
         }
       </div>)
}
export default List;