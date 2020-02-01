export default function handleInfo(state = { locationData: null, bedroomData: null, parkingInfo: null, contactInfo: null}, action) {
    //debugger;
    switch(action.type) {
        case 'ADD_LOCATION_DATA':
            //return {startingZip: action.startingZip, destinationZip: action.destinationZip, next: 'bedrooms'}
            return { locationData: {startingZip: action.startingZip, destinationZip: action.destinationZip }}
        case 'ADD_BEDROOM_ELEVATOR_INFO':
            //return {...state, numOfBedrooms: action.numOfBedrooms, numOfFloors: action.numOfFloors, elevator: action.elevator, next: 'parking'};
            return {...state, bedroomData: { numOfBedrooms: action.numOfBedrooms, numOfFloors: action.numOfFloors, elevator: action.elevator}};
        case 'ADD_PARKING_INFO':
            // let newState = {...state, parkingDistance: action.parkingDistance, next: 'contact'}
            // console.log('newstate', newState);
            return {...state, parkingInfo: { parkingDistance: action.parkingDistance }};
        default:
            return state;
    }
};