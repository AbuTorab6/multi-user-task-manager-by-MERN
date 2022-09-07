import React,{Fragment,Suspense,lazy} from 'react';

import SideNavigation from '../components/sideNavigation/SideNavigation';
import Dashboard from '../components/dashboard/Dashboard';

import LazyLoader from '../components/sideNavigation/LazyLoader';

const DashboardPage = () => 
{
    return (
        <Fragment>
            <SideNavigation>
                <Suspense fallback={<LazyLoader/>}>
                    <Dashboard/>
                </Suspense>      
            </SideNavigation>
        </Fragment>
    );
};

export default DashboardPage;