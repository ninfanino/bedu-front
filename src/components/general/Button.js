import React from 'react'


const Button = (props) => {
  //let {clickHandler, enabler} = props
  console.log(props)
  return (
    <button className="button" type="button" onClick={props.clickHandler} disabled={props.enabler}> 
      {props.children}
    </button>
  )
} 

export default Button