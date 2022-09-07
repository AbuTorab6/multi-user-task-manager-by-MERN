import React,{Fragment,Suspense,lazy} from 'react';

import Login from '../components/login/Login';
import LazyLoader from '../components/sideNavigation/LazyLoader';

const LoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                    <Login/>
            </Suspense>
        </Fragment>
    );
};

export default LoginPage;