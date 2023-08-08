import Video from "./components/Video";
import "./App.css";
function App() {

  let obj = {
    title:"react js",
    views:"10M",
    time:"1 year ago",
    channel:"attract with physics"
  }
  return (
    <div className="App">
      <div>saurabh</div>
      <Video {...obj}/>
      <Video
        title="node js"
        views="100k"
        time="1 week ago"
        channel="attract with physics"
      />
      <Video
        title="express js"
        views="150k"
        time="2 days ago"
        channel="attract with physics"
      />
      <Video
        title="mongo db"
        views="15k"
        time="2 days ago"
        channel="attract with physics"
      />
      <Video
        title="express js"
        views="150k"
        time="2 days ago"
        channel="attract with physics"
      />
      <Video
        title="express js"
        views="150k"
        time="2 days ago"
        channel="attract with physics"
      />
      <Video
        title="express js"
        views="150k"
        time="2 days ago"
        channel="attract with physics"
      />
      <Video
        title="express js"
        views="150k"
        time="2 days ago"
        channel="attract with physics"
      />
    </div>
  );
}

export default App;
