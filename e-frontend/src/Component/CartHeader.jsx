import React from 'react'

export const Cartheader = () => {
    const step = ['Bag','Deliver Details','Payment']
    
  return (
    <div className='outter'>
        {
            step.map((stepper,i)=>{
              <div key={i} className='inner'>
                {stepper}
              </div>
            })
        }

    </div>
  )
}
