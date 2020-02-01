export default function handleInfo(state = {}, action) {
    switch(action.type) {
        case 'ADD_LOCATION_DATA':
            return {startingZip: action.startingZip, destinationZip: action.destinationZip };
        case 'ADD_BEDROOM_ELEVATOR_INFO':
            return {...state, numOfBedrooms: action.numOfBedrooms, numOfFloors: action.numOfFloors, elevator: action.elevator };
        case 'ADD_PARKING_INFO':
            return {...state, parkingDistance: action.parkingDistance };
        case 'ADD_CUSTOMER_CONTACT_INFO':
            return {...state, customerName: action.customerName, customerEmail: action.customerEmail, customerPhone: action.customerPhone };
        default:
            return state;
    }
};