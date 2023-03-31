import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Feeling() {
    const [personFeeling, setPersonFeeling] = useState({feeling: ''})
    const dispatch = useDispatch()


    function setValue(event) {
        setPersonFeeling({feeling: Number(event.target.value)})
    }

    function submitFeeling() {
        dispatch({
            type: 'SEND_FEEDBACK',
            payload: personFeeling
        })
    }

    return (<>
        <h1>How are you feeling today</h1>
        <form>
            <label>
                Feeling?
                <input type='number' onChange={setValue} />
            </label>
        </form>
        <Router>
            <Link to='/understanding'>
                <button onClick={submitFeeling}>Next</button>
            </Link>
        </Router>
    </>)
}
export default Feeling;