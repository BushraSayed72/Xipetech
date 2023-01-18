import React from 'react'
import background from '../Images/Vector.png'
import group7211 from '../Images/Group 7211.png'
import Male from '../Images/Male-1 1.png'
import twelve from '../Images/Group 7212.png'
import { AiFillQuestionCircle} from "react-icons/ai";
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'
import Main6 from './Main6'
import Footer from './Footer'

function Main() {
  return (
    <>
    <div className='Main' style={{ backgroundImage: `url(${background})` }}>


    <div className='leftDiv' >
            <img className='eleven' src={group7211} alt='group7211'/>
            <img className='male' src={Male} alt='male'/>
        </div>
        
    
    <div className='rightDiv'>
        <p  className='bold' >Easy Peasy Lemon Squeezy</p>
        <p className='rightpara'>Master Chemistry with our online workbooks</p>
    </div>
      
    </div>
    <div className='main-two '>
        <p className=' para  '>Self-driven learning has never been so easy </p>
            <img className='twelve' src={twelve} alt=''/>


            <div className='card'>
                <p className='qustn'>Question 4</p>
                 <p className=' card2ndpara '> Drag and drop to fill in the blanks. <AiFillQuestionCircle   className='black'/></p>
               <div className=' container'>
                <div className= 'box' >mobile</div>
                <div className='box'>voltage</div>
                <div className='box'>delocalised</div>
               </div>
               <p className='metals'> Explain why metals are good Conductor of electricity.</p>

               <div className='paragraph1'>
                <p>Metal have </p>
                <div className='border'>?</div>
                <p>electrons that are highly </p>
                <div className='border'>?</div>
               </div>

               <div className='paragraph2'>
                <p>and can  move through the metal scructure in response to applied </p>
                <div className='border'>?</div>
               </div>

               <div className='cardLast'>
                <button className='greybtn'>Solution</button>
                <button className='bluebtn'>Check</button>
               </div>
            </div>
            
        
    </div>
    <Main2/>
    <Main3/>
    <Main4/>
    <Main5/>
    <Main6/>
    <Footer/>
    </>
  )
}

export default Main
