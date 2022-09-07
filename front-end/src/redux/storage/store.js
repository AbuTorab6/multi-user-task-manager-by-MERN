import {configureStore} from '@reduxjs/toolkit'

import taskState from '../stateSlice/taskState';
import loaderState from '../stateSlice/loaderState';

export default configureStore(
    {
        reducer:{
            taskState,
            loaderState
        }
    }
)