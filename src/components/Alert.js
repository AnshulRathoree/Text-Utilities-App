import React from 'react'

 function Alert(props) {
  return (
    
      

      props.alert && <div class={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
      <strong>{props.alert.tp}</strong>     {props.alert.msg}
  
</div>
      
   
  )
}
export default Alert