import React from 'react'

function ButtonClick() {
    
  function  onButtonClick(){
        console.log("Button Clicked")
    }

  // function call inside a function call is allowed
    

    return (
        <div>
         <button onClick={onButtonClick} > Button </button>
        </div>
    )
}

export default ButtonClick
