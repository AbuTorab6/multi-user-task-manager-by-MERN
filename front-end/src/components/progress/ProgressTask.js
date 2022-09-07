import React,{Fragment,useEffect} from 'react';
import cogoToast from 'cogo-toast';

import { AiOutlineEdit,AiOutlineCalendar,AiOutlineDelete } from "react-icons/ai";

import {findTaskByStatus,updateTaskStatus} from '../../APIServices/CRUDServices'
import { progressTaskFunc } from '../../redux/stateSlice/taskState';
import {useDispatch,useSelector} from 'react-redux'

import Swal from 'sweetalert2'
import { deleteTask } from '../../APIServices/CRUDServices';

const ProgressTask = () => 
{


    var deleteTaskFunc= (p2)=>
    {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              deleteTask(p2).then
              (
                (res)=>
                {
                    if(res===true)
                    {
                        findTaskByStatus("progress").then //after delete it will refresh page 
                        (
                            (res)=>
                            {
                                if(res!==false)
                                {
                                    dispatch(progressTaskFunc(res))
                                }
                                else
                                {
                                    cogoToast.error("Something is wrong!");
                                }
                            }
                        )
                    }
                }
              )
            }
          })
    }




    var updateTaskFunc = async(p3)=>
    {
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                'new': 'new',
                'progress': 'progress',
                'complete': 'complete',
                'canceled': 'canceled'
              })
            }, 1000)
          })
          
          const { value: status } = await Swal.fire({
            title: 'You want to change status? Select Status from below:',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to choose a status!'
              }
            }
          })
          
          if (status) {
            updateTaskStatus(p3,status).then
            (
                (res)=>
                {
                    if(res===true)
                    {
                        findTaskByStatus("progress").then //after delete it will refresh page 
                        (
                            (res)=>
                            {
                                if(res!==false)
                                {
                                    dispatch(progressTaskFunc(res))
                                }
                                else
                                {
                                    cogoToast.error("Something is wrong!");
                                }
                            }
                        )
                    }
                }
            )
          }
    }



    var dispatch = useDispatch();

    useEffect(()=>{

        findTaskByStatus("progress").then
        (
            (res)=>
            {
                if(res!==false)
                {
                    dispatch(progressTaskFunc(res))
                }
                else
                {
                    cogoToast.error("Something is wrong!");
                }
            }
        )

    },[])



    var progressTask = useSelector((state)=>state.taskState.progress)

    var progressTaskArr = progressTask.map(
        function(p1)
        {
            return(
                <div className='col'>
                        <h6>{p1.title}</h6>
                        <p>{p1.description}</p>
                        <div className='complete-task-card-inner-grid'>
                            <div>
                                <span><AiOutlineCalendar/> {p1.createdDate}</span>
                                <span onClick={updateTaskFunc.bind(this,p1._id)}><AiOutlineEdit/></span>
                                <span onClick={deleteTaskFunc.bind(this,p1._id)}><AiOutlineDelete/></span>
                            </div>
                            <div>
                                <button className='progress-task-status-btn'>{p1.status}</button>
                            </div>
                        </div>
                </div>
            )
        }
    )



    return (
        <Fragment>
            <div className='complete-task-section'>
                <div className='complete-task-top-grid'>
                    <div className='col'>
                        <h5>Task In Progress</h5>
                    </div>
                    <div className='col complete-task-top-inner-grid'>
                        <div className='col'>
                            <input type="text" placeholder="write..." />
                        </div>
                        <div className='col'>
                            <button className='complete-task-search-btn'>Search</button>
                        </div>
                    </div>
                </div>

                <div className='complete-task-card-grid'>
                    {progressTaskArr}
                </div>
            </div>
        </Fragment>
    );
};

export default ProgressTask;