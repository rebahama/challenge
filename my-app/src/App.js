import css from './App.module.css';
import SideBar from './components/Sidebar';
import NavBarSimple from './components/navBarSimple';


function App() {
  return (
    <div className={css.App}>
      {<SideBar/>}
      {<NavBarSimple/>}
    </div>
  );
}

export default App;