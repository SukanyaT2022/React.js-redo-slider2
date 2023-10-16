import React, { useState } from 'react'
import './TwoBox.css'
import { usePrevious } from '@chakra-ui/react';

const data = [
{
  id : 1,
  name: "Banana",
  description:  'Banana desscription apple is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
  image:
'https://images.pexels.com/photos/13211456/pexels-photo-13211456.jpeg?auto=compress&cs=tinysrgb&w=800',
},
{
  id : 2,
  name: "Apple",
  description:  'Apple desscription apple is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
  image:
  'https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
},
{
  id : 3,
  name: "Grape",
  description:  'Grape desscription apple is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
  image:
  'https://images.pexels.com/photos/137119/pexels-photo-137119.jpeg?auto=compress&cs=tinysrgb&w=800',
},
{
  id : 4,
  name: "Pineapple",
  description:  'Pineapple desscription apple is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
  image:
  'https://images.pexels.com/photos/2294477/pexels-photo-2294477.jpeg?auto=compress&cs=tinysrgb&w=800',
},

];

const TwoBox = () => {
  const [currentIndex, setCurrentIndex]=useState(0)
  const preSlider =()=>{
setCurrentIndex((valPre)=>valPre === 0 ? data.length - 1 : valPre -1)
  }
const nextSlider =()=>{
setCurrentIndex((valNext)=>valNext===data.length - 1 ? 0 : valNext+1)
}

  return (
    <>
    <div className='mainBox-TextImage'>
      <img src={data[currentIndex].image} className='controlImage'/>
     {/* <div className='image'>{data[currentIndex].image}</div> */}
     <div className='text'>
 <h2>{data[currentIndex].name}</h2>
 <p>{data[currentIndex].description}</p>

      </div>
    </div>
<div className='Main-ControlButtonDot'>
    <div className='controlBothButton'>
    <button onClick={preSlider}>Previous</button>
    <button onClick={nextSlider}>Next</button>
    </div>
    <div className='controlAllDot'>
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
    </div>
    </div>
    </>
  )
}

export default TwoBox
