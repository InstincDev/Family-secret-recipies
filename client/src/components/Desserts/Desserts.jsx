import React from 'react'

const Desserts = () => {
  const getDesserts = async()=>{
    const data = await fetch(import.meta.env.VITE_REACT_APP_URL)
  }
  
    return (
    <div>Desserts</div>
  )
}

export default Desserts