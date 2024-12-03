import './App.css';

function App() {
    const currDate=new Date();
    return (
        <div className="App">
            <h1>Hello World</h1>
            <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
            <h1>Mykyta Yatsenko</h1>
            <h2>It is {currDate.toLocaleDateString()}.</h2>
        </div>
    );
}

export default App;
