import React,{Fragment,Suspense,lazy} from 'react';

import SideNavigation from '../components/sideNavigation/SideNavigation';
import CanceledTask from '../components/canceled/CanceledTask';

import LazyLoader from '../components/sideNavigation/LazyLoader';

const CanceledTaskPage = () => {
    return (
        <Fragment>
            <SideNavigation>
                <Suspense fallback={<LazyLoader/>}>
                    <CanceledTask/>
                </Suspense>
            </SideNavigation>
        </Fragment>
    );
};

export default CanceledTaskPage;