 import BASE_URL from '../index';

// const getEstimate = data => {
//     fetch(`${BASE_URL}/estimates`, {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     //.then(response => response.json())
//     .then(response => {
//         debugger;
//         return response.json();
//     })
//     .then(data => {
//         debugger;
//         console.log(data)
//     })
//     .catch(err => console.log(err))
// }


const getEstimate = data => {
    return (dispatch) => {
        dispatch({ type: 'START_POSTING_CUSTOMER_INFO' })
        fetch(`${BASE_URL}/estimates`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response =>{
            return response.json();
        })
        .then(data => {
            debugger;
            dispatch({ type: 'QUOTE_GENERATED', quote: data.quote })
        })
        .catch(err => console.log('error in getEstimate', err));
    }
}
export default getEstimate;
