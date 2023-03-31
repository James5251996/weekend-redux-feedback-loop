import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";


function Admin () {
    const allTheFeedback = useSelector(store => store.getFeedback)
    const dispatch = useDispatch()

    useEffect(() => {
        someFeedback()
        console.log(allTheFeedback)
    }, [])

    const someFeedback = () => {
        axios.get('/submission')
        .then((response) => {
            dispatch({
                type: "GET_FEEDBACK",
                payload: response.data
            })
        }).catch((error) => {
            console.log('error in client GET', error)
        })
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comment</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {allTheFeedback.map((single, i) => 
                    <tr key={i}>
                        <td>
                            {single.feeling}
                        </td>
                        <td>
                            {single.understanding}
                        </td>
                        <td>
                            {single.support}
                        </td>
                        <td>
                            {single.comments}
                        </td>
                        <td>
                            <button className="button">Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>)
}

export default Admin