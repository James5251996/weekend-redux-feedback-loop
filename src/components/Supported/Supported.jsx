import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Supported() {
    const [personSupport, setPersonSupport] = useState({support: ''})
    const dispatch = useDispatch()

    function setValue (event) {
        setPersonSupport({support: Number(event.target.value)})
    }

    function submitSupport () {
        dispatch({
            type: 'SEND_FEEDBACK',
            payload: personSupport
        })
    }


    
    return (<>
        <h1>How well are you being supported?</h1>
        <form>
            <label>
                Support
                <input type='number' onChange={setValue} />
            </label>
        </form>
        <Router>
            <Link to='/comments'>
                <button onClick={submitSupport}>Next</button>
            </Link>
        </Router>
    </>)
}

export default Supported;