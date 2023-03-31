import { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";

function Supported() {
    const [personSupport, setPersonSupport] = useState({ support: '' })
    const dispatch = useDispatch()
    const history = useHistory()

    function setValue(event) {
        setPersonSupport({ support: Number(event.target.value) })
    }

    function submitSupport() {
        if (personSupport.support === '') {
            alert('thats not going to work🥲')
        } else {
            dispatch({
                type: 'SEND_FEEDBACK',
                payload: personSupport
            })
            history.push('/comments')
        }
    }



    return (<>
        <h1>How well are you being supported?</h1>
        <form>
                <TextField type='number' id="Supported-baic" label='Supported' variant="standard" onChange={setValue} />
        </form>
        <div className='button'>
            <button onClick={submitSupport}>Next</button>
        </div>
    </>)
}

export default Supported;