import React,{Fragment,Suspense,lazy} from 'react';

import SideNavigation from '../components/sideNavigation/SideNavigation';
import CompleteTask from '../components/completed/CompleteTask';

import LazyLoader from '../components/sideNavigation/LazyLoader';

const CompleteTaskPage = () => {
    return (
        <Fragment>
            <SideNavigation>
                <Suspense fallback={<LazyLoader/>}>
                    <CompleteTask/>
                </Suspense>
            </SideNavigation>
        </Fragment>
    );
};

export default CompleteTaskPage;