import React from 'react'
import image17 from '../Images/image 17.png'
import bluecircle from '../Images/bluecircle.png'


function Main3() {
  return (
    <div className='main4'  >
     <img className='bcircle' src={bluecircle}
     alt=''/>
    <div className='leftmain4'>
   
        <div className='image1'>
            <img src={image17} alt=''/>
        </div>
        <div className='image2'>
        <img src={image17} alt=''/>
        <img src={image17} alt=''/>
            
        </div>
    </div>

    <div className='rightmain4'>
    <div className='rightpara'>
    {/* <div className='whiteCircle'></div>
    <div className='blueeCircle'></div> */}
        <p className='moonpara'>Workbook for your studies</p>

    </div>
    <p className='discover'>Discover  workbooks by course and syllabus learning outcomes to fill your knowledge gaps</p>
  <div className='flex'>
    <div className='brdr'>IB</div>
    <div className='brdr'>HSC</div>
    <div  className='brdr'>VCE</div>
  </div>
    </div>
      
    </div>
  )
}

export default Main3
