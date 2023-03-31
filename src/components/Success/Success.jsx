import { useHistory } from "react-router-dom";

function Success () {
    const history = useHistory()

    return(<>
        <div>
            <h1>Feedback!</h1>
            <div>
                <h1>Thank You🐶</h1>
                <button onClick={() => {history.push('/')}}>Leave New Feedback</button>
            </div>
        </div>
    </>)
}

export default Success;