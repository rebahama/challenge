import css from './App.module.css';
import SideBar from './components/Sidebar';
// import NavBarSimple from './components/navBarSimple';
// {<NavBarSimple/>}
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import ContentHooks from './components/ContentHooks';
import ContentApiHooks from './components/ContetApiHook';


function App() {
  return (
    <div className={css.App}>
      {<SideBar/>}
      {<NavBarForm/>}
      {<ContentApiHooks/>}
    </div>
  );
}

export default App;