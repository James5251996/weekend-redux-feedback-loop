import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Comments() {
    const [personComments, setPersonComments] = useState({ comments: '' })
    const dispatch = useDispatch()
    const history = useHistory()


    function setValue(event) {
        setPersonComments({ comments: event.target.value })
    }

    function submitComment() {
            dispatch({
                type: 'SEND_FEEDBACK',
                payload: personComments
            })
            history.push('/review')
    }


    return (<>
        <h1>Any comments you want to leave?</h1>
        <form>
            <label>
                Comments
                <input type='text' onChange={setValue} />
            </label>
        </form>
        <div className='button'>
        <button onClick={submitComment}>Next</button>
        </div>
    </>)
}

export default Comments;