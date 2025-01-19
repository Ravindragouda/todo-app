
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My todos</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div>
            <label>
              Title
            </label>
            <input type="text" placeholder="enter your title here"></input>
          </div>
        </div>
        <div className="todo-input">
          <div>
            <label>
              Description
            </label>
            <input type="text" placeholder="enter your Description here"></input>
          </div>
        </div>
        <div className="todo-input">
          <div>
            <button type="add" className="primary-btn">Add</button>
          </div>
        </div>
        <div className="btn-area">
          <div>
            <button>Todo</button>
            <button>Completed</button>
          </div>
          

        </div>
        <div className="todo-list">
          <h1>Task 1</h1>
          <p>Description 1</p>

        </div>

      </div>

    </div>
  );
}

export default App;
