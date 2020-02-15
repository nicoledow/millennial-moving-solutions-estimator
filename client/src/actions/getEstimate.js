const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const baseURL = process.env.BASE_URL;

function getEstimate(data) {
    fetch(`${baseURL}/estimate`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log('data received from backend', data);
    })
    .catch(err => console.log('error fetching to back end', err));
}

export default getEstimate;