import './App.css';
import Post from "./Post"

function App() {
  return (
    <div className="App">

      {/* header */}
      <div className="app_header">
        <img className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="" />
      </div>
      <h1>Hello world! 👋</h1>


      <Post />
      {/* posts */}
    </div>
  );
}

export default App;
