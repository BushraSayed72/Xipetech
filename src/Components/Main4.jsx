import React from 'react'
import vector from '../Images/Vector (2).png'
import female from '../Images/Female-Student-1.png'
import saly from '../Images/Saly-1 (1).png'

function Main4() {
  return (
    <div className='main5' style={{ backgroundImage: `url(${vector})` }}>
     <p className='fifthHeading'>What student say about our workbooks</p>
     <div className='bckgrnd-green'>
        <img src={saly} alt=''/>
        <p>"We Are Elemental really helped me prepare for my HSC exam. I found the workbooks make what we were learning in class more....
        -Claire </p>

     </div>

     <div className='bckgrnd-blue'>
     
     <p>"We Are Elemental really helped me prepare for my HSC exam. I found the workbooks make what we were learning in class more....
        -Claire </p>
        <img src={female} alt=''/>
     </div>
   


    </div>
  )
}

export default Main4