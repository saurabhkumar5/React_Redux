
import './App.css';

function App() {
  let name = 'sumit'
  let className = 'App-header'
  console.log('App')
  return (
    <div className="App">
      {/* <div className='App-header'> */}
      <div className={className}>
              {/* hello bhai */}
              {name}
              <Demo></Demo>
      </div>
    </div>
  );
}

function Demo() {
  console.log('Demo')
  return (
    <div className="App">
      <div className='App-header'>
              saurabh
      </div>
    </div>
  );
}

export default App;
