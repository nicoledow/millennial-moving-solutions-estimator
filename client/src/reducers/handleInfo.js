export default function handleInfo(state = { next: 'location' }, action) {
    //debugger;
    switch(action.type) {
        case 'ADD_LOCATION_DATA':
            return {startingZip: action.startingZip, destinationZip: action.destinationZip, next: 'bedrooms'}
        case 'ADD_BEDROOM_ELEVATOR_INFO':
            return {...state, numOfBedrooms: action.numOfBedrooms, numOfFloors: action.numOfFloors, elevator: action.elevator, next: 'parking'};
        case 'ADD_PARKING_INFO':
            return {...state, parkingDistance: action.parkingDistance, next: 'contact'}
        default:
            return state;
    }
};