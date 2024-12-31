import './App.css';
import logo from './assets/a.png';
import menu from './assets/b.png';
// import icon1 from './assets/c.png';
// import icon2 from './assets/d.png';
// import icon3 from './assets/e.png';
// import icon4 from './assets/f.png';

function App() {
  return (
    <div className="App">
<header className="Header">
  <img src={logo} alt="logo" className="logo"/>
  <img src={menu} alt="menu icon" className="menu"/>
</header>
<main className="Main">
<h1>Say Hello to <br />ReactJS</h1>
<p>
  You will learn how to use <br />the most popular frontend library,
  <br /> and become a super Ninja developer.
</p>
<button>Awesome!</button>
</main>
    </div>
  );
}

export default App;