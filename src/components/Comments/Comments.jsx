import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";

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
            <TextField id="Comments-basic" label='Comment' variant="standard" type='text' onChange={setValue} />
        </form>
        <div className='buttonHolder'>
            <button className="button" onClick={submitComment}>Next</button>
        </div>
    </>)
}

export default Comments;