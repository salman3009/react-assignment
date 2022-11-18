import './QuestionType.css';

const QuestionType = ({ questionType,selectedQuestionType }) => {
    return (<div className="container">
        <div className="row">
            <div className='col-4'></div>
            <div className="col-4 text-center">
                <form>
                    <div className="form-group">
                        <label>Selection Question getQuestionType</label>
                        <select className="form-control" onChange={(event)=>selectedQuestionType(event.target.value)}>
                            {questionType.map((input,index) => {
                                return <option key={index} value={input}>{input}</option>
                            })}
                        </select>
                    </div>
                </form>
            </div>
            <div className='col-4'></div>
        </div>
    </div>)
}
export default QuestionType;

