const handleInfo = (state = { 
  currentSection: 'Starting Zip Code', 
  formSections: ['Starting Zip Code', 'Destination Zip Code', 'Number of Bedrooms', 'How many floors?', 'Is there an elevator?', 'Where will the moving truck be able to park?', 'How can Millennial Moving Solutions Contact You?'],
  currentIndex: 0
}, action) => {
  switch(action.type){
  case 'ADD_CUSTOMER_INFO':
    switch(state.currentSection){
      case 'Starting Zip Code':
        let newCurrentIndex = state.currentIndex + 1;
        let nextSection = state.formSections[newCurrentIndex];
        return {...state, startingZipCode: action.formData.data, currentSection: nextSection, currentIndex: newCurrentIndex};
      default:
        return state;
    }
  default:
    return state;
  }
};

export default handleInfo;