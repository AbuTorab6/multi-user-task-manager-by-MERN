import React,{Fragment,Suspense,lazy} from 'react';

import SendOTP from '../components/forgotPassword/SendOTP';
import LazyLoader from '../components/sideNavigation/LazyLoader';

const SendOTPPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                    <SendOTP/>
            </Suspense>
        </Fragment>
    );
};

export default SendOTPPage;