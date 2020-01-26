const handleInfo = (state = { currentSection: 'Starting Zip Code' }, action) => {
  switch(action.type){
  case 'ADD_CUSTOMER_INFO':
    console.log('in reducer', action)
    return {...state, data: action.formData}
  default:
    return state;
  }
};

export default handleInfo;