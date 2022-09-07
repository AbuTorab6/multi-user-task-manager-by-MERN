import axios from 'axios';

import cogoToast from 'cogo-toast';

import store from '../redux/storage/store'
import { showLoader,hideLoader } from '../redux/stateSlice/loaderState';



var baseURL = "http://localhost:5000"

//https://task-manager-juboraz.herokuapp.com
//http://localhost:5000

// ***********************************
// =========User CRUD Opration========
// ***********************************


var userRegistration = (firstName,lastName,email,mobile,password,photo)=>
{
    store.dispatch(showLoader()) //showing the loader. Here the API request is start.

    var data = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        mobile:mobile,
        password:password,
        photo:photo
    }


    return axios.post(baseURL+'/registration',data).then
    (
        (res)=>
        {
            store.dispatch(hideLoader()); //hiding the loader. Here the API request is end.
            if(res.status===200)
            {
                return true;
            }
            else if(res.status===203)
            {
                cogoToast.error(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )

}




var userLogin = (email,password)=>
{
    store.dispatch(showLoader())

    var data = {
        email:email,
        password:password
    }

    return axios.post(baseURL+"/login",data).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return res.data;
            }
            else if(res.status===203)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}




// ***********************************
// =========Task CRUD Opration========
// ***********************************

var axiosHeader = {
    headers:{
        "authorization":localStorage.getItem('token')
    } 
}


var createTask = (title,description,status)=>
{
    store.dispatch(showLoader())
    var ob = {
        title:title,
        description:description,
        status:status
    }

    return axios.post(baseURL+'/createTask',ob,axiosHeader).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return true
            }
            else if(res.status===203)
            {
                cogoToast.error(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}



var findTaskByStatus = (status)=>
{
    store.dispatch(showLoader())
    return axios.get(baseURL+'/findByStatus/'+status,axiosHeader).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return res.data;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
            
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}



var countTaskByStatus = ()=>
{
    store.dispatch(showLoader())
    return axios.get(baseURL+'/countTaskByStatus',axiosHeader).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return res.data;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}



var deleteTask = (id)=>
{
    store.dispatch(showLoader())
    return axios.get(baseURL+'/deleteTask/'+id,axiosHeader).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return true
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}


var updateTaskStatus = (id,status)=>
{
    store.dispatch(showLoader())
    return axios.get(baseURL+'/updateTaskStatus/'+id+'/'+status,axiosHeader).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return true;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}





// ***********************************
// =========User Profile ========
// ***********************************


var profileDetail = ()=>
{
    store.dispatch(showLoader())
    return axios.get(baseURL+'/profileDetail',axiosHeader).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return res.data;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}


var updateUser=(firstName,lastName,mobile,password,photo)=>
{
    store.dispatch(showLoader())
    var data = {
        firstName:firstName,
        lastName:lastName,
        mobile:mobile,
        password:password,
        photo:photo
    }
    
    return axios.post(baseURL+'/updateUser',data,axiosHeader).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return true;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}




// ***********************************
// =========Forgot Password========
// ***********************************

var verifyEmail = (email)=>
{
    store.dispatch(showLoader())
    return axios.get(baseURL+'/verifyEmail/'+email).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return true;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}



var verifyOTPCode = (email,otp)=>
{
    store.dispatch(showLoader())
    return axios.get(baseURL+'/verifyOTPCode/'+email+'/'+otp).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return true;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}



var resetPassword = (email,otp,password)=>
{
    store.dispatch(showLoader())
    var data = {
        email:email,
        otp:otp,
        password:password
    }

    return axios.post(baseURL+'/resetPassword',data).then
    (
        (res)=>
        {
            store.dispatch(hideLoader())
            if(res.status===200)
            {
                return true;
            }
            else if(res.status===203)
            {
                cogoToast.info(res.data);
                return false
            }
            else if(res.status===206)
            {
                cogoToast.error(res.data);
                return false
            }
            else
            {
                cogoToast.error("Something is wrong!");
                return false
            }
        }
    ).catch
    (
        (err)=>
        {
            cogoToast.error("Something is wrong:"+err.message);
            return false;
        }
    )
}











export {userRegistration,userLogin,createTask,findTaskByStatus,countTaskByStatus,deleteTask,updateTaskStatus,profileDetail,updateUser,verifyEmail,verifyOTPCode,resetPassword}