import { useEffect, useState } from 'react';
import './App.css';
import QuestionType from './component/QuestionType/QuestionType';
import {singleQuestionType,multiQuestionType} from './helper/FormingObject';
import SingleSelect from './component/custom/SingleSelect/SingleSelect';
import MultiSelect from './component/custom/MultiSelect/MultiSelect';
import {QuestionTypeLabel} from './helper/constant';
function App() {

  const [getQuestionType,setQuestionType] = useState([]);
  const [getStatus,setStatus] = useState(false);
  const [questionCreation,setQuestionCreation] = useState([]);
  const [getSelectionType,setSelectionType] = useState('');

  useEffect(()=>{
    console.log(questionCreation);
  },[questionCreation]);

  const createSurvey=()=>{
    setStatus(true);
    setQuestionType(['select question type','multi-select','single-select']);
  }

  const selectedQuestionType=(inputType)=>{
       console.log(inputType);
       if(inputType === 'single-select'){
        setSelectionType('single-select');
       }
       if(inputType === 'multi-select'){
        setSelectionType('multi-select');
       }
  }

  const QuestionCreation=(object)=>{
    console.log("app.js line 35",object);
    setQuestionCreation([...questionCreation,object]);
  }



  return (
     <div className="container">
         <div className="row">
             <div className="col-12">
                   <h2 className="text-center">Survey Tiger</h2>
             </div>
         </div>
         {!getStatus && <div className="row">
             <div className="col-4">

             </div>
                  
             <div className="col-4 position-center">
                   <div className='button-box'>
                   <button type="button" onClick={createSurvey} className="btn btn-secondary">Create Survey</button>
                   </div>
                   <div className='button-box'>
                   <button type="button" className="btn btn-secondary">Take Survey</button>
                   </div>
             </div>
             <div className="col-4">
                 
             </div>
         </div>}
         {getStatus && <div className="row">
           <div className="col-12 position-center">
               <QuestionType questionType={getQuestionType} selectedQuestionType={selectedQuestionType}/>
           </div>
         </div>}
         {getStatus && getSelectionType === QuestionTypeLabel.single_type  && <SingleSelect QuestionCreation={QuestionCreation}/>}
         {getStatus && getSelectionType === QuestionTypeLabel.multi_type && <MultiSelect/>}
     </div>
  );
}

export default App;
