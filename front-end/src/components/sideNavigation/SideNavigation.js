import React,{Fragment} from 'react';
import '../../asset/css/custom.css'

import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import { AiOutlineMenuUnfold,AiOutlineUser,AiOutlineLogout,AiOutlineEdit,AiOutlineCheckCircle } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { BsListNested,BsHourglass } from "react-icons/bs";
import { MdOutlineCancelPresentation } from "react-icons/md";

const SideNavigation = (props) => 
{


    var jubo = ()=>
    {
        var sideNav = document.querySelector('.side-nav');
        var myContent = document.querySelector('.my-content');
        

        if(sideNav.classList.contains('side-nav-open'))
        {
            sideNav.classList.add('side-nav-close');
            sideNav.classList.remove('side-nav-open')

            myContent.classList.add('content-expand')
            myContent.classList.remove('content')
        }
        else
        {
            sideNav.classList.remove('side-nav-close');
            sideNav.classList.add('side-nav-open')

            myContent.classList.add('content')
            myContent.classList.remove('content-expand')
        }
    }


    var userLogout = ()=>
    {
        localStorage.clear();
        window.location.href='/login'
    }


    return (
        <Fragment>
            <Navbar className='navigation-bg' fixed='top' collapseOnSelect expand="lg"  variant="dark">
                    <Container>
                            <Navbar.Brand className='navigation-brand' >
                                <span onClick={jubo} className='nav-logo' ><AiOutlineMenuUnfold/></span> Task Manager
                            </Navbar.Brand>
                            
                            <div className='drp-down'>
                                <img className='drp-down-img' src={ JSON.parse(localStorage.getItem('userDetail')).photo } />

                                <div className='drp-down-content'>
                                    <div className='drp-down-content-info'>
                                        <img className='drp-down-content-img' src={ JSON.parse(localStorage.getItem('userDetail')).photo }  />
                                        <h6>{ JSON.parse(localStorage.getItem('userDetail')).firstName+" "+JSON.parse(localStorage.getItem('userDetail')).lastName }</h6>
                                        <hr/>
                                    </div>
                                    <NavLink to='/profile' className='drp-down-item'>
                                        <span><AiOutlineUser/></span> <span>Profile</span>
                                    </NavLink>
                                    {/* we can not add "onClick" event inside the "Navlink" tag. Thats why we have to use "a" tag instead of "NavLink" tag */ }
                                    <a onClick={userLogout} className='drp-down-item'> 
                                        <span><AiOutlineLogout/></span> <span>Logout</span>
                                    </a>
                                </div>
                            </div>
                    </Container>
            </Navbar>

            <div className='side-nav-open side-nav'>
                <NavLink to='/' className={(p1) => p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item" }>
                    <span className='side-nav-icon'><RiDashboardLine/></span>  <span className='side-nav-text'>Dashboadr</span>
                </NavLink>
                <NavLink to='/createTask' className={(p1)=>p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item"}>
                    <span className='side-nav-icon'><AiOutlineEdit/></span>  <span className='side-nav-text'>Create New</span>
                </NavLink>  
                <NavLink to='/newTask' className={(p1)=>p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item"}>
                    <span className='side-nav-icon'><BsListNested/></span>  <span className='side-nav-text'>New Task</span>
                </NavLink>
                <NavLink to='/progressTask' className={(p1)=>p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item"}>
                    <span className='side-nav-icon'><BsHourglass/></span>  <span className='side-nav-text'>In Progress</span>
                </NavLink>
                <NavLink to='/completedTask' className={(p1)=>p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item"}>
                    <span className='side-nav-icon'><AiOutlineCheckCircle/></span>  <span className='side-nav-text'>Completed</span>
                </NavLink>
                <NavLink to='/canceledTask' className={(p1)=>p1.isActive ? "side-nav-item-active side-nav-item" : "side-nav-item"}>
                    <span className='side-nav-icon'><MdOutlineCancelPresentation/></span>  <span className='side-nav-text'>Canceled</span>
                </NavLink>
            </div>
    
            <div className='content my-content'>
                {props.children}
            </div>
        </Fragment>
    );
};

export default SideNavigation;