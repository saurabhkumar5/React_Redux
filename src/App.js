import Video from "./components/Video";
import "./App.css";
import videos from "./data/Data";


// function App() {

//   let obj = {
//     title:"react js",
//     views:"10M",
//     time:"1 year ago",
//     channel:"attract with physics",
//     verified: true
//   }
//   return (
//     <div className="App">
//       <div>saurabh</div>
//       <Video {...obj}/>
//       <Video
//         verified={false}
//         title="node js"
//         views="100k"
//         time="1 week ago"
//         channel="attract with physics"
//       />
//       <Video
//         title="express js"
//         views="150k"
//         time="2 days ago"
//         channel="attract with physics"
//       />
//       <Video
//         title="mongo db"
//         views="15k"
//         time="2 days ago"
//         channel="attract with physics"
//       />
//       <Video
//         title="express js"
//         views="150k"
//         time="2 days ago"
//         channel="attract with physics"
//       />
//       <Video
//         title="express js"
//         views="150k"
//         time="2 days ago"
//         channel="attract with physics"
//       />
//       <Video
//         title="express js"
//         views="150k"
//         time="2 days ago"
//         channel="attract with physics"
//       />
//       <Video
//         verified={false} 
//         title="express js"
//         views="150k"
//         time="2 days ago"
//         channel="attract with physics"
//       />
//     </div>
//   );
// }




function App() {

  return (
    <div className="App">
      <div>saurabh</div>
      {
        videos.map(video=> <Video
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          id = {video.id}
        />)
      }
      
    </div>
  );
}


export default App;
