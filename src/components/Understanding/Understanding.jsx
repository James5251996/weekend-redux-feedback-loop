import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function Understanding() {
    const [personUnderstanding, setPersonUnderstanding] = useState({understanding: ''})
    const dispatch = useDispatch()

    function setValue (event) {
        setPersonUnderstanding({understanding: Number(event.target.value)})
    }

    function submitUnderstanding () {
        dispatch({
            type: 'SEND_FEEDBACK',
            payload: personUnderstanding
        })
    }



    return (<>
        <h1>How well are you understnding the content?</h1>
        <form>
            <label>
                Understanding
                <input type='number' onChange={setValue} />
            </label>
        </form>
        <Router>
            <Link to='/supported'>
                <button onClick={submitUnderstanding}>Next</button>
            </Link>
        </Router>
    </>)
}

export default Understanding;