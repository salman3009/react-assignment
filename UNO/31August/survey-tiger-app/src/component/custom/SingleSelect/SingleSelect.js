import { useEffect, useState } from 'react';
import './SingleSelect.css';


const SingleSelect = ({QuestionCreation,onPublish}) => {

    const [getList, setList] = useState({
        question: '',
        optionOne: '',
        optionTwo: ''
    });

    // useEffect(() => {
    //     console.log(getList);
    // }, [getList]);

    const onChangeHandler = (event) => {
        setList({ ...getList, [event.target.name]: event.target.value });
        // console.log(getList);
        // let a = 3+3;
    }

    const onQuestionSubmit=()=>{
        if(getList.question && getList.optionOne && getList.optionTwo){
            let object = {
                question:getList.question,
                options:[getList.optionOne,getList.optionTwo],
                type:'radio'
            };
            QuestionCreation(object);
            setList({ question: '',
            optionOne: '',
            optionTwo: ''});
        }
   
    }





    return (<div className="container">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6 center">
                <div className="col-auto">
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">?</div>
                        </div>
                        <input type="text" value={getList.question} onChange={onChangeHandler} className="form-control" name="question" />
                    </div>
                </div>
                <div className="col-auto">
                    <div className="input-group mb-2">
                        <input type="text" className="form-control" value={getList.optionOne}  onChange={onChangeHandler} name="optionOne" />
                        <div className="input-group-prepend">
                            <div className="input-group-text">+</div>
                        </div>
                        <div className="input-group-prepend">
                            <div className="input-group-text">-</div>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="input-group mb-2">
                        <input type="text" className="form-control" value={getList.optionTwo} onChange={onChangeHandler} name="optionTwo" />
                        <div className="input-group-prepend">
                            <div className="input-group-text">+</div>
                        </div>
                        <div className="input-group-prepend">
                            <div className="input-group-text">-</div>
                        </div>
                    </div>
                </div>
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
export default SingleSelect;