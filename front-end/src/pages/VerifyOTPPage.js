import React,{Fragment,Suspense,lazy} from 'react';

import LazyLoader from '../components/sideNavigation/LazyLoader';
import VerifyOTP from '../components/forgotPassword/VerifyOTP';

const VerifyOTPPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                    <VerifyOTP/>
            </Suspense>
        </Fragment>
    );
};

export default VerifyOTPPage;