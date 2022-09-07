import React,{Fragment,Suspense,lazy} from 'react';

import SideNavigation from '../components/sideNavigation/SideNavigation';
import CreateTask from '../components/create/CreateTask';

import LazyLoader from '../components/sideNavigation/LazyLoader';

const CreateTaskPage = () => 
{
    return (
        <Fragment>
            <SideNavigation>
                <Suspense fallback={<LazyLoader/>}>
                    <CreateTask/>
                </Suspense>      
            </SideNavigation>
        </Fragment>
    );
};

export default CreateTaskPage;