import React,{Fragment,Suspense,lazy} from 'react';

import LazyLoader from '../components/sideNavigation/LazyLoader';
import NewPassword from '../components/forgotPassword/NewPassword';

const NewPasswordPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                    <NewPassword/>
            </Suspense>
        </Fragment>
    );
};

export default NewPasswordPage;