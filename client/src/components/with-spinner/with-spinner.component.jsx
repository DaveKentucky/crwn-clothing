// libraries
import React from 'react';
// components
import Spinner from '../spinner/spinner.component';


const WithSpinner = (WrappedComponent, isLoading) => ({ props }) => {
    return isLoading ? <Spinner /> : <WrappedComponent { ...props } />;
}

export default WithSpinner;