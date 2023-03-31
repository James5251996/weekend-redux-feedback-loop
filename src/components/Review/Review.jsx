import axios from "axios"
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom";




function Review() {
    const feedback = useSelector(store => store.feedback)
    const history = useHistory()

    let finalFeedback = {
        feeling: feedback.feeling,
        understanding: feedback.understanding,
        support: feedback.support,
        comments: feedback.comments
    }



    const submitReview = (event) => {
        event.preventDefault();
        console.log('inside my submitReview POST', finalFeedback)
        axios.post('/submission', finalFeedback)
            .then((response) => {
                console.log('POST WORKED CLIENT!')
                history.push('/success')
            }).catch((error) => {
                console.log('error in client post', error)
            })
    }

    return (<>
        <div className="buttonHolder">
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feedback.feeling}</p>
            <p>Understanding: {feedback.understanding}</p>
            <p>Support: {feedback.support}</p>
            <p>Comments: {feedback.comments}</p>
            <button className="button" onClick={submitReview}>Submit</button>
        </div>
    </>)
}
export default Review