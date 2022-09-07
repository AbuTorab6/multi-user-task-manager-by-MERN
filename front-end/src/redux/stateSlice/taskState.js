import {createSlice} from '@reduxjs/toolkit'

var taskState = createSlice(
    {
        name:"taskState",
        initialState:{
            new:[],
            progress:[],
            completed:[],
            cancelled:[],
            count:[]
        },
        reducers:{
            newTaskFunc:(p1,data)=>
            {
                p1.new=data.payload;
            },
            progressTaskFunc:(p1,data)=>
            {
                p1.progress=data.payload;
            },
            completedTaskFunc:(p1,data)=>
            {
                p1.completed=data.payload;
            },
            cancelledTaskFunc:(p1,data)=>
            {
                p1.cancelled=data.payload;
            },
            countTaskFunc:(p1,data)=>
            {
                p1.count=data.payload;
            }
        }
    }
)

export const {newTaskFunc,progressTaskFunc,completedTaskFunc,cancelledTaskFunc,countTaskFunc} = taskState.actions;
export default taskState.reducer;