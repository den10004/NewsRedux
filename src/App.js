import "./App.css";
import Likes from "./Likes";
import Comments from "./redux/Comments";
import Title from "./Title";
import Spin from "./Spin";
import { useSelector } from "react-redux";

function App() {
  const error = useSelector((state) => state.appReducer.error);

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && <div className="error-message">{error}</div>}
          <div className="card__header">
            <h2>Новости России</h2>
            <a href="https://newsapi.org/" target="_blank">Новостного агентства NewsApi</a>
          </div>

          <div className="card-block">
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
