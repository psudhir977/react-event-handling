import React, { Component } from 'react'

export class ButtonClickClass extends Component {
    
    onButtonClick() { // is this a method call or function calll
        console.log("Hello Sudhir Padhy");
    }

    // Function call inside a class is not allowed ?
    // this keyword is required for event call inside a class.
    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}> Click me </button>
            </div>
        )
    }
}

export default ButtonClickClass
