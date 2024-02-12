import React,{useEffect} from 'react'

function Meta(props) {

  useEffect(()=>{
    if (props.title) {
      document.title = props.title;
    }
  },[props.title])

  return null
}

export default Meta