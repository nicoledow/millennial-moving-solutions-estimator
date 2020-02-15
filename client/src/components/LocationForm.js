 import React from 'react';

 export default class LocationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            startingCity: '',
            destinationCity: ''
        };
    }

    handleChange = e => {
        e.target.name === 'startingCity' ? this.setState({ startingCity: e.target.value }) : this.setState({ destinationCity: e.target.value })
    }

    render() {
        return (
            <div className="formDiv">
                <form className="formDiv__form">
                    <label className="formDiv__form--label">
                        Starting City:
                        <input type="text" name="startingCity" value={this.state.startingCity} onChange={e => this.handleChange(e)}/>
                    </label>
                    <label className="formDiv__form--label">
                        Destination City:
                        <input type="text" name="destinationCity" value={this.state.destinationCity} onChange={e => this.handleChange(e)} />
                    </label>
                </form>
            </div>
        );
    }
 }

// export default class LocationForm extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             startingZip: '',
//             destinationZip: ''
//         }
//     }

//     handleChange = e => {
//         e.target.name === 'startingZip' ? this.setState({ startingZip: e.target.value }) : this.setState({ destinationZip: e.target.value })
//     }

//     handleSubmit = e => {
//        e.preventDefault();

//        const data = {
//            startingZip: this.state.startingZip,
//            destinationZip: this.state.destinationZip,
//            infoType: 'customer location'
//        };
//        this.props.updateStep();
//        this.props.saveData(data);
//     }

//     render() {
//         return (
//             <div className="formDiv">
//                 <form className="formDiv__form" onSubmit={e => this.handleSubmit(e)}>
//                     <label className="formDiv__form--label">Please enter your starting and ending zip codes.</label>
//                     <input type="text" name="startingZip" placeholder="Starting zip code" value={this.state.startingZip} onChange={e => this.handleChange(e)} />
//                     <input type="text" name="destinationZip" placeholder="Destination zip code" value={this.state.destinationZip} onChange={e => this.handleChange(e)} />
//                     <input type="submit" className="formDiv__form--button" value="Next" />
//                 </form>
//             </div>
//         );
//     }
// }