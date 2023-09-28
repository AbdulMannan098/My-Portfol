import React from 'react'
import data from '../assets/data/data.json'
const Timeline = () => {
  return (
    <div id='timeline'>
    <div className='timelineBox'>
    {
        data && data.projects.map((item,index)=>(
            <TimelineItem key={item.title} heading={item.title} text={item.date} index={index}/>
        ))
    }
    </div>
    </div>
  )
}
 
const TimelineItem=({heading,text,index})=>(<div className={`timelineItem ${index %2 === 0 ? "leftTimeline" :"rightTimeline"}`}>
 <div>
    <h2>{heading}</h2>
    <p>{text}</p>
</div>
</div>
)
export default Timeline