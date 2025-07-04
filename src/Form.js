

const Form = () => {
    return (
        <div>
            <form>
                <label><b> This is a basic form </b></label>
                <br/>
                <label>Name</label>
                <input name='name' type='text'></input>
                <br/>
                <label> Address </label>
                <input name='address' type='text'></input>
                <br/>
                <label> Mobile No. </label>
                <input name='mobile-no' type='tel'></input>
                <br/>
                <button type='submit'> Submit</button>
                <label>   </label>
                <button type='reset'> Reset </button>


            </form>

        </div>
    )
}

export default Form
