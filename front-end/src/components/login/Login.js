import React,{Fragment} from 'react';

import cogoToast from 'cogo-toast';

import { userLogin } from '../../APIServices/CRUDServices';

import {Link} from 'react-router-dom'


const Login = () => 
{

    var loginFunc = ()=>
    {
        var loginEmail = document.querySelector('.loginEmail').value;
        var loginPassword = document.querySelector('.loginPassword').value;

        if(loginEmail.length==0 || !/\S+@\S+\.\S+/.test(loginEmail))
        {
            cogoToast.error("Please Provide a valid email address");
        }
        else if(loginPassword.length===0)
        {
            cogoToast.error("Please Provide password");
        }
        else
        {

            userLogin(loginEmail,loginPassword).then
            (
                (res)=>
                {
                    if(res!==false)
                    {
                        cogoToast.success("login success");
                        
                       
                        localStorage.setItem('token',res.token);
                        localStorage.setItem('userDetail',JSON.stringify(res.data));

                        window.location.href='/'
                    }
                    else
                    {
                        cogoToast.error("Something is wrong!");
                    }
                    
                }
            )
        }

        
    }


    return (
        <Fragment>
            <section className='login-section'>
                <div className='row'>
                    <div className='form'>
                        <form>
                            <h5>Log In</h5>
                            <div>
                                <input className='loginEmail' type="text" placeholder="Enter an email"/>
                            </div>
                            <div>
                                <input className='loginPassword' type="password" placeholder="User Password"/>
                            </div>
                        </form>

                        <div>
                            <button onClick={loginFunc} className='next-btn'>Next</button>
                        </div>
                        <div>
                            <Link className='sign-up-link' to='/registration'>Sign Up</Link>
                            <Link className='forget-password-link' to='/sendOTP'>Forgot Password ?</Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Login;