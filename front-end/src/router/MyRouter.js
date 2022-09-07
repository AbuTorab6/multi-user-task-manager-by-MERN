import React,{Fragment} from 'react';

import {Routes,Route,BrowserRouter} from 'react-router-dom'

import CanceledTaskPage from '../pages/CanceledTaskPage';
import CompleteTaskPage from '../pages/CompleteTaskPage';
import CreateTaskPage from '../pages/CreateTaskPage';
import DashboardPage from '../pages/DashboardPage';
import NewTaskPage from '../pages/NewTaskPage';
import ProgressTaskPage from '../pages/ProgressTaskPage';
import ProfilePage from '../pages/ProfilePage';


import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import SendOTPPage from '../pages/SendOTPPage';
import VerifyOTPPage from '../pages/VerifyOTPPage';
import NewPasswordPage from '../pages/NewPasswordPage';

const MyRouter = () => 
{

    if(localStorage.getItem('token'))
    {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<DashboardPage/>}/>
                        <Route path='/createTask' element={<CreateTaskPage/>}/>
                        <Route path='/newTask' element={<NewTaskPage/>}/>
                        <Route path='/progressTask' element={<ProgressTaskPage/>}/>
                        <Route path='/completedTask' element={<CompleteTaskPage/>}/>
                        <Route path='/canceledTask' element={<CanceledTaskPage/>}/>
                        <Route path='/profile' element={<ProfilePage/>}/>
        
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/registration' element={<RegistrationPage/>}/>
                    </Routes>
                </BrowserRouter>
            </Fragment>
        );
    }
    else
    {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<LoginPage/>}/>
        
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/registration' element={<RegistrationPage/>}/>
                        <Route path='/sendOTP' element={<SendOTPPage/>}/>
                        <Route path='/verifyOTP' element={<VerifyOTPPage/>}/>
                        <Route path='/newPassword' element={<NewPasswordPage/>}/>
                        <Route path='*' element={<LoginPage/>}/>
                    </Routes>
                </BrowserRouter>
            </Fragment>
        );
    }
    
       
  

    
};

export default MyRouter;