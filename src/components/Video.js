

// function Video(){

//     return <div>video</div>
// }

// export default Video;


import './Video.css'

// function Video(){
//      let bg = 'dark';
//     return (
//         <>
//             <img
//               src="https://i.imgur.com/MK3eW3Am.jpg"
//               alt="Katherine Johnson"
//             />
//             <div className={bg} style={{backgroundColor:'red'}}>React Js Tutorials</div>
//         </>
//     )
// }



// function Video(props){
//     console.log(props)
//     let bg = 'dark'
//    return (
//        <>
//            <img
//              src="https://i.imgur.com/MK3eW3Am.jpg"
//              alt="Katherine Johnson"
//            />
//            <div className={bg} style={{backgroundColor:'red'}}>{props.title}</div>
//        </>
//    )
// }


//props ka ye prefrable way nhi h to distrucring way use karnge

// function Video({title, bgColor}){
//     let bg = 'dark'
//    return (
//        <>
//            <img
//              src="https://i.imgur.com/MK3eW3Am.jpg"
//              alt="Katherine Johnson"
//            />
//            <div className={bg} style={{backgroundColor:bgColor}}>{title}</div>
//        </>
//    )
// }


function Video({title, channel, views, time}){
    let bg = 'dark'
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
           <div className='channel'>{channel}</div>
           <div className='views'>
            {views} views <span>.</span> {time}
           </div>
           </div>
       </>
   )
}



export default Video;