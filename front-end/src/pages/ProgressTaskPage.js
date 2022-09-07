import React,{Fragment,Suspense,lazy} from 'react';

import SideNavigation from '../components/sideNavigation/SideNavigation';
import ProgressTask from '../components/progress/ProgressTask';


import LazyLoader from '../components/sideNavigation/LazyLoader';

const ProgressTaskPage = () => {
    return (
        <Fragment>
            <SideNavigation>
                <Suspense fallback={<LazyLoader/>}>
                    <ProgressTask/>
                </Suspense>      
            </SideNavigation>
        </Fragment>
    );
};

export default ProgressTaskPage;