import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";

function Feeling() {
    const [personFeeling, setPersonFeeling] = useState({ feeling: '' })
    const dispatch = useDispatch()
    const history = useHistory()


    function setValue(event) {
        setPersonFeeling({ feeling: Number(event.target.value) })
    }

    function submitFeeling() {
        if (personFeeling.feeling === '') {
            alert('thats not going to work🥲')
        } else {
            dispatch({
                type: 'SEND_FEEDBACK',
                payload: personFeeling
            })
            history.push('/understanding')
        }
    }

    return (<>
        <h1>How are you feeling today</h1>
        <form>
            <TextField type='number' id='Feeling-basic' label='Feeling' variant="standard" onChange={(setValue)} value={personFeeling.feeling} />
        </form>
        <div className='buttonHolder'>
            <button className="button" onClick={submitFeeling}>Next</button>
        </div>
    </>)
}
export default Feeling;