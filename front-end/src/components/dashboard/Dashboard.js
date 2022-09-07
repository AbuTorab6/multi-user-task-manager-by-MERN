import React,{Fragment,useEffect} from 'react';
import cogoToast from 'cogo-toast';

import { countTaskByStatus } from '../../APIServices/CRUDServices';

import { countTaskFunc } from '../../redux/stateSlice/taskState';
import {useDispatch,useSelector} from 'react-redux'

const Dashboard = () => 
{
    var dispatch = useDispatch();

    useEffect(()=>{
        countTaskByStatus().then
        (
            (res)=>
            {
                if(res!==false)
                {
                    dispatch(countTaskFunc(res));
                }
                else
                {
                    cogoToast.error("Something is wrong!");
                }
            }
        )
    },[])

    var count =useSelector((state)=>state.taskState.count);
    var countArr = count.map(
        function(p1)
        {
            return(
                <div className='col'>
                    <h5>{p1._id}</h5>
                    <h6>{p1.count}</h6>
                </div>
            )
        }
    )

    return (
        <Fragment>
            <div className='dashboard-grid' >
                {countArr}
            </div>
        </Fragment>
    );
};

export default Dashboard;