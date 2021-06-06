import React from 'react'

export default function Cards() {
   return (
      <div>
         <h2>These are cards here, right?</h2>
         <ul>
            <li>
               <h3>This is a card</h3>
               <div style={{background: "#999", borderRadius: "50%", border:"1px solid #goldenrod", width: "48px", height: '48px'}}></div>
               <p>Then somedescription</p>
            </li>
            <li>
               <h3>This is a 2nd card</h3>
               <div style={{background: "#999", borderRadius: "50%", border:"1px solid #goldenrod", width: "48px", height: '48px'}}></div>
               <p>Then somedescription</p>
            </li>
            <li>
               <h3>3rd card</h3>
               <div style={{background: "#999", borderRadius: "50%", border:"1px solid #goldenrod", width: "48px", height: '48px'}}></div>
               <p>Then somedescription</p>
            </li>
         </ul> 
      </div>
   )
}
