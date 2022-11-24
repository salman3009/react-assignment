import { useEffect, useState } from 'react';
import './MultiSelect.css';

const MultiSelect=({QuestionCreation,onPublish})=>{

    const [getList,setList] = useState({
        question:'',
        options:[{id:1,value:''}]
    });

    useEffect(()=>{
       console.log(getList);
    },[getList]);

    const onChangeHandler=(event)=>{
        setList({...getList,[event.target.name]:event.target.value})
    }

    const onAdditionHandler=()=>{
        if(getList.options.length===4){
            return;
        }
        let count = getList.options.length;
        let object ={id:count+1,value:''};
        let list = [...getList.options];
        list = [...list,object];
        setList({...getList,options:list});
    }

    const onRemoveHandler=(index)=>{
       if(getList.options.length<=1){
               return ;
       }
       let list =[...getList.options];
       list.splice(index,1);
       setList({...getList,options:list});
    }

    const onOptionChangeHandler=(event,index)=>{
        console.log(event.target.value,index);
        let list =[...getList.options];
        list[index].value = event.target.value;
        setList({...getList,options:list});
    }

    const onQuestionSubmit=()=>{
        if(getList.question){
            let object = {
                question:getList.question,
                options:getList.options,
                type:'checkbox'
            };
            QuestionCreation(object);
            setList({
                question:'',
                options:[{id:1,value:''}]
            });
        }
    }

    return (<div className="container">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6 center">
            <div class="col-auto">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">?</div>
                    </div>
                    <input type="text" class="form-control"  name="question" onChange={onChangeHandler} />
                </div>
            </div>
            {getList.options.map((obj,index)=>{
                return(<div key={index} class="col-auto">
                <div class="input-group mb-2">
                    <input type="text" class="form-control" value={obj.value} onChange={(event)=>onOptionChangeHandler(event,index)} />
                    <div class="input-group-prepend">
                        <div class="input-group-text" onClick={onAdditionHandler}>+</div>
                    </div>
                    <div class="input-group-prepend">
                        <div class="input-group-text" onClick={()=>onRemoveHandler(index)}>-</div>
                    </div>
                </div>
            </div>)
            })}
               <div className="col-auto">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-3">
                            <button type="button" className="btn btn-success" onClick={onQuestionSubmit}>Add Question</button>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-success" onClick={onPublish}>Publish</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
        </div>
     
        <div className="col-3"></div>
    </div>
</div>)
}
export default MultiSelect;