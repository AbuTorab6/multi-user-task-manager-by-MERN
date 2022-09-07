import React,{Fragment,Suspense,lazy} from 'react';

import SideNavigation from '../components/sideNavigation/SideNavigation';
import NewTask from '../components/new/NewTask';


import LazyLoader from '../components/sideNavigation/LazyLoader';

const NewTaskPage = () => {
    return (
        <Fragment>
            <SideNavigation>
                <Suspense fallback={<LazyLoader/>}>
                    <NewTask/>
                </Suspense>      
            </SideNavigation>
        </Fragment>
    );
};

export default NewTaskPage;