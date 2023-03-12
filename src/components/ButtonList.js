import React from 'react'
import Button from './Button'
const ButtonList = () => {
    const list=['All','Live','Gaming','Cricket','sanatan','BBk Vines','carryminati']
  return (

    <div className="flex m-5">
      {list.map((i)=><Button key={i} name={i}/>)}
    </div>
    
  )
}

export default ButtonList