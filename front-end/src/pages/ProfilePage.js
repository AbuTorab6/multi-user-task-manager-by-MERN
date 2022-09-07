import React,{Fragment,Suspense,lazy} from 'react';


import Profile from '../components/profile/Profile';
import SideNavigation from '../components/sideNavigation/SideNavigation';

import LazyLoader from '../components/sideNavigation/LazyLoader';

const ProfilePage = () => {
    return (
        <Fragment>
            <SideNavigation>
                <Suspense fallback={<LazyLoader/>}>
                    <Profile/>
                </Suspense>
            </SideNavigation>
        </Fragment>
    );
};

export default ProfilePage;