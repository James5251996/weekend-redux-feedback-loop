import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Success () {
    const dispatch = useDispatch()
    const history = useHistory()
    const returnToMain = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        })
        history.push('/')

    }

    return(<>
        <div>
            <h1>Feedback!</h1>
            <div className="buttonHolder">
                <h1>🐶Thank You🐶</h1>
                <button className="button" onClick={returnToMain}>Leave New Feedback</button>
            </div>
        </div>
    </>)
}

export default Success;