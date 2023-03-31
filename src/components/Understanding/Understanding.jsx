import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";


function Understanding() {
    const [personUnderstanding, setPersonUnderstanding] = useState({ understanding: '' })
    const dispatch = useDispatch()
    const history = useHistory()

    function setValue(event) {
        setPersonUnderstanding({ understanding: Number(event.target.value) })
    }

    function submitUnderstanding() {
        if (personUnderstanding.understanding === '') {
            alert('thats not going to work🥲')
        } else {
        dispatch({
            type: 'SEND_FEEDBACK',
            payload: personUnderstanding
        })
        history.push('/supported')
    }
    }



    return (<>
        <h1>How well are you understnding the content?</h1>
        <form>
                <TextField type='number' id="Understanding-basic" label='Understanding' variant="standard" onChange={setValue} />
        </form>
        <div className='buttonHolder'>
        <button onClick={submitUnderstanding}>Next</button>
        </div>
    </>)
}

export default Understanding;