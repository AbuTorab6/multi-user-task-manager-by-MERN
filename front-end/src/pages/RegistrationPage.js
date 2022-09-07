import React,{Fragment,Suspense,lazy} from 'react';
import Registration from '../components/registration/Registration';

import LazyLoader from '../components/sideNavigation/LazyLoader';

const RegistrationPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                    <Registration/>
            </Suspense>
        </Fragment>
    );
};

export default RegistrationPage;