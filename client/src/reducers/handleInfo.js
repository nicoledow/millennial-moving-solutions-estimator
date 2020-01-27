const handleInfo = (state = { 
  currentSection: 'Starting Zip Code', 
  formSections: ['Starting Zip Code', 'Destination Zip Code', 'Number of Bedrooms', 'How many floors?', 'Is there an elevator?', 'Where will the moving truck be able to park?', 'How can Millennial Moving Solutions Contact You?']
}, action) => {
  switch(action.type){
  case 'ADD_CUSTOMER_INFO':
    switch(state.currentSection){
      case 'Starting Zip Code':
        //debugger;
        return {...state, startingZipCode: action.formData.data, currentSection: 'Destination Zip Code'};
      case 'Destination Zip Code':
        return {...state, destinationZipCode: action.formData.data, currentSection: 'Number of Bedrooms'};
      case 'Number of Bedrooms':
        console.log('hit reducer for num of rooms', state);
      default:
        return state;
    }
  default:
    return state;
  }
};

export default handleInfo;