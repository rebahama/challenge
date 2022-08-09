import css from './App.module.css';
import SideBar from './components/Sidebar';
// import NavBarSimple from './components/navBarSimple';
// {<NavBarSimple/>}
import NavBarForm from './components/NavBarForm';


function App() {
  return (
    <div className={css.App}>
      {<SideBar/>}
      {<NavBarForm/>}
    </div>
  );
}

export default App;