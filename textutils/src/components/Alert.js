import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-2 mx-2`} role="alert" style={{height: 65, width: 500}}>
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.mssg}
    </div>
  )
}
export default Alert
