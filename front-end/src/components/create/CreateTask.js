import React,{Fragment} from 'react';

import cogoToast from 'cogo-toast';
import {useNavigate} from 'react-router-dom'

import { createTask } from '../../APIServices/CRUDServices';

const CreateTask = () => 
{
    var navigate = useNavigate();


    var createTaskFunc = ()=>
    {
        var taskTitle = document.querySelector('.taskTitle').value;
        var taskDescription = document.querySelector('.taskDescription').value;

        if(taskTitle.length===0)
        {
            cogoToast.error("Please Provide task title");
        }
        else if(taskDescription.length===0)
        {
            cogoToast.error("Please Provide task description");
        }
        else
        {
            createTask(taskTitle,taskDescription,"new").then
            (
                (res)=>
                {
                    if(res===true)
                    {
                        cogoToast.success("task have inserted succesfully");

                        navigate('/newTask')
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
            <div className='create-task-section'>
                <div className='form'>
                    <form>
                        <h5>Create Task</h5>
                        <div>
                            <input className='taskTitle' type="text" placeholder="Task Title"/>
                        </div>
                        <div>
                            <textarea className='taskDescription' placeholder='Task Description' />
                        </div>
                    </form>

                    <div>
                        <button onClick={createTaskFunc}  className='create-task-btn'>Create</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CreateTask;