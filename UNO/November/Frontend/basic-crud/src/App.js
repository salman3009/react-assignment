import { useState } from 'react';
import './App.css';

function App() {

  const [getList,setList] = useState({
    employee:'',
    salary:'',
    status:false
  });

  const onChangeHandler=(event)=>{
    if(event.target.name === 'status'){
      setList({...getList,[event.target.name]:!getList.status});
    }
    else{
      setList({...getList,[event.target.name]:event.target.value});
    }
  }

  const onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log(getList);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">

        </div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label >Employee Name</label>
              <input type="text" className="form-control" name="employee" onChange={onChangeHandler} />
            </div>
            <div className="form-group">
              <label>Salary</label>
              <input type="number" className="form-control" name="salary" onChange={onChangeHandler}/>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="status" value={getList.status} onChange={onChangeHandler}/>
              <label className="form-check-label">Job status</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Submit</button>
            <br />
            <br />
          </form>
        </div>
        <div className="col-3">

        </div>
      </div>
      <div className="row">
        <div className="col-3">

        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Card Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Akash</td>
                <td>20000</td>
                <td>yes</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Suresh</td>
                <td>30000</td>
                <td>no</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>potter</td>
                <td>30000</td>
                <td>yes</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-3">

        </div>
      </div>

    </div>
  );
}

export default App;
