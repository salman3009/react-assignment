import './MultiSelect.css';

const MultiSelect=()=>{
    return (<div className="container">
    <div className="row">
        <div className="col-3"></div>
        <div className="col-6 center">
            <div class="col-auto">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">?</div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                </div>
            </div>
            <div class="col-auto">
                <div class="input-group mb-2">
                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                    <div class="input-group-prepend">
                        <div class="input-group-text">+</div>
                    </div>
                    <div class="input-group-prepend">
                        <div class="input-group-text">-</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3"></div>
    </div>
</div>)
}
export default MultiSelect;