
import './Video.css'


function Video({title,id, channel, views, time,verified}){
//    let channelJSX;
//    if(verified){
//     channelJSX = <div className='channel'>{channel}☑️</div>
//    }else {
//     channelJSX = <div className='channel'>{channel}</div>
//    }
   
   return (
       <>
       <div className='container'>
       <div className='pic'>
         <img
             src="https://i.imgur.com/MK3eW3Am.jpg"
             alt="Katherine Johnson"
           />
       </div>
           
           <div className="title">{title}</div>
           {/* {verified ? channelJSX = <div className='channel'>{channel}☑️</div>
           :channelJSX = <div className='channel'>{channel}</div>} */}
           {/* <div className='channel'>{channel} {verified ? '☑️': null}</div> */}
           <div className='channel'>{channel} {verified && '☑️'}</div>
           <div className='views'> 
            {views} views <span>.</span> {time}
            {/* {channelJSX} */}
           </div>
           </div>
       </>
   )
}



export default Video;