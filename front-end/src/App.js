
import {BrowserRouter} from 'react-router-dom'

import SideNavigation from './components/sideNavigation/SideNavigation';
import FullScreenLoader from './components/sideNavigation/FullScreenLoader';
import LazyLoader from './components/sideNavigation/LazyLoader';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Dashboard from './components/dashboard/Dashboard';
import CreateTask from './components/create/CreateTask';
import CompleteTask from './components/completed/CompleteTask';
import CanceledTask from './components/canceled/CanceledTask';
import NewTask from './components/new/NewTask';
import ProgressTask from './components/progress/ProgressTask';

import DashboardPage from './pages/DashboardPage';
import CreateTaskPage from './pages/CreateTaskPage';
import NewTaskPage from './pages/NewTaskPage';
import ProgressTaskPage from './pages/ProgressTaskPage';
import CompleteTaskPage from './pages/CompleteTaskPage';
import CanceledTaskPage from './pages/CanceledTaskPage';

import MyRouter from './router/MyRouter';

function App() 
{
  return (
    <div className="App">
          <MyRouter/>
          <FullScreenLoader/>
    </div>
  );
}

export default App;
