import { useEffect, useState } from 'react';
import './MultiSelect.css';

const MultiSelect=()=>{

    const [getList,setList] = useState({
        question:'',
        options:[{id:1,value:''},{id:2,value:''}]
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
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                    <div class="input-group-prepend">
                        <div class="input-group-text" onClick={onAdditionHandler}>+</div>
                    </div>
                    <div class="input-group-prepend">
                        <div class="input-group-text">-</div>
                    </div>
                </div>
            </div>)
            })}
        </div>
        <div className="col-3"></div>
    </div>
</div>)
}
export default MultiSelect;