export default function submitForm(formData) {
    console.log('in submitForm action', formData);
    return (dispatch) => {
        dispatch({ type: 'ADD_CUSTOMER_INFO', formData});
    }
}