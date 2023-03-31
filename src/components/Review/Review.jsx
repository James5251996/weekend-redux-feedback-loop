import axios from "axios"
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux"





function Review() {
    const feedback = useSelector(store => store.feedback)

    let finalFeedback = {
        feeling: feedback.feeling,
        understanding: feedback.understanding,
        support: feedback.support,
        comments: feedback.comments
    }



    // const submitReview = (finalFeedback) => {
    //     console.log('inside my submitReview POST', finalFeedback)
    //     axios.post('/submission')
    //         .then((response) => {
    //             console.log('POST WORKED CLIENT!')
    //         }).catch((error) => {
    //             console.log('error in client post', error)
    //         })
    // }

    return (<>
        <h1>Review Your Feedback</h1>
        <p>Feelings: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.support}</p>
        <p>Comments: {feedback.comments}</p>
        <Router>
            <Link to='/success'>
                <button>Submit</button>
            </Link>
        </Router>
    </>)
}
export default Review