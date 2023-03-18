import {useRef} from 'react';

const Form=()=>{
      
      const fullName = useRef(null);

      const date = useRef(null);

       const onSubmitHandler=()=>{
           alert("submit");
           console.log(fullName.current.value);
           console.log(date.current.value);
       }
       return (<div>
          <input type="text" name="details" ref={fullName}/>
          <input type="date" ref={date}/>
          <input onClick={onSubmitHandler} type="submit"/>
       </div>)
}
export default Form;