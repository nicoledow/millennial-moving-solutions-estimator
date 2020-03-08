 import BASE_URL from '../index';

const getEstimate = data => {
    fetch(`${BASE_URL}/estimates`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    //.then(response => response.json())
    .then(response => {
        debugger;
        return response.json();
    })
    .then(data => {
        debugger;
        console.log(data)
    })
    .catch(err => console.log(err))
}

export default getEstimate;

// export default function getEstimate(data) {
//     return (dispatch) => {
//         dispatch({ type: 'START_POSTING_CUSTOMER_INFO' })
//         fetch(`${BASE_URL}/estimates`, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//         .then(response =>{
//             return response.json();
//         })
//         .then(data => {
//             dispatch({ type: 'ADD_COMPLETED_ESTIMATE', data })
//         })
//         .catch(err => console.log('error in getEstimate', err));
//     }
// }