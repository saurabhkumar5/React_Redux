import Video from "./components/Video";
import "./App.css";
import videos from "./data/Data";
import PlayButton from "./components/PlayButton";



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
      <div style={{clear:'both'}}>
      {/* <PlayButton name="play" message="play-msg"></PlayButton>
      <PlayButton name="pause" message="pause-msg"></PlayButton> */}

      <PlayButton message="play-msg" onClick={()=>console.log('playyy')}>play</PlayButton>
      <PlayButton message="pause-msg" onClick={()=>alert('playyyy')}>pause</PlayButton>
      </div>
      
      
    </div>
  );
}


export default App;
