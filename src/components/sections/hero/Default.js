import React from 'react'

export default function Hero({title, subheading}) {
   return (
      <div style={{height: '50vh', width: "100%", background: "lime"}}>
         <h1>{title}</h1>
         <p>{subheading}</p>
      </div>
   )
}
