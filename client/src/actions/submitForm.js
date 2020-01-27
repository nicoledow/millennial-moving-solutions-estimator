export default function submitForm(formData) {
    console.log('in submitForm action', formData);
    return (dispatch) => {
       // debugger;
        dispatch({ type: 'ADD_CUSTOMER_INFO', formData});
    }
}