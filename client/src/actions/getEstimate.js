import BASE_URL from '../index';

export default function getEstimate(data) {
    return (dispatch) => {
        dispatch({ type: 'START_POSTING_CUSTOMER_INFO' })
        fetch(`${BASE_URL}/estimate`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}