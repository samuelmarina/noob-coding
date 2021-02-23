import './App.css';
import Main from './components/Header/Main';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Challenge from './components/Challenge/Challenge';

function App() {
  return (
    <div className="App">
        <Main className="main"/> 
        <VideoPlayer videoId="NCoeDOVUJqk" className="video"/>
        <Challenge /> 
    </div>
  );
}

export default App;
