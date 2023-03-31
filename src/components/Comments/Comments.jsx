import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function Comments() {
    const [personComments, setPersonComments] = useState({comments: ''})
    const dispatch = useDispatch()


    function setValue (event) {
        setPersonComments({comments: event.target.value})
    }

    function submitComment() {
        dispatch({
            type: 'SEND_FEEDBACK',
            payload: personComments
        })
    }


    return (<>
        <h1>Any comments you want to leave?</h1>
        <form>
            <label>
                Comments
                <input type='text' onChange={setValue} />
            </label>
        </form>
        <Router>
            <Link to='/review'>
                <button onClick={submitComment}>Next</button>
            </Link>
        </Router>
    </>)
}

export default Comments;