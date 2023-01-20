import React from 'react'
import background2 from '../Images/Vector (1).png'
import fire from '../Images/Vector (7).png'
import clock from '../Images/clock.jpeg'
import orangecircle from '../Images/orangecircle.jpeg'
import flatCircle from '../Images/orangeflat.png'

function Main2() {
  return (
    <div className='main3' style={{ backgroundImage: `url(${background2})` }}>
    <div className='leftMain2'>
    <div className='moonpara'>
    <div className='white-Circle'></div>
    <div className='orange-Circle'></div>
        <p>Study the way you like it</p>
       
        </div>

        <p className='workBook'>Choose between practice and earn exam modes to complete your workbooks.</p>
    </div>
    <div className='rightmain2'>
    {/* <img className='orngeCrcle' src={orangecircle} alt=''/>
    <img className='flatCrcle'src={flatCircle} alt=''/>
     */}
        <div className='card1'>
            <img src={fire} alt='fire'/>
            <p className='crdHeading'>Practice</p>
            <p className='crdpara'> Check your answers and learn as you go.
            Build a streak for every correct answer.</p>
        </div>

        <div className='card2'>
            <img src={ clock} alt=''/>
            <p className='crdHeading'>Exam</p>
            <p className='crdpara'>Complete under timed condition then check your answers at the end.</p>
        </div>
    </div>
      
    </div>
  )
}

export default Main2
