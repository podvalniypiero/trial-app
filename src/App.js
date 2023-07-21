import Header from "./components/Header/Header";
import styles from './index.scss'
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="App">
      <Header/>
      <Post/>
      <div className={styles.container}>

      </div>
    </div>
  );
}

export default App;
