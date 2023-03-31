import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


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
            <label>
                Understanding
                <input type='number' onChange={setValue} />
            </label>
        </form>
        <button onClick={submitUnderstanding}>Next</button>
    </>)
}

export default Understanding;