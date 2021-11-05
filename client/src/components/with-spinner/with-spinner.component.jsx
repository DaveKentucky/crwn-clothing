// libraries
import React, { useState } from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";


const WithSpinner = (WrappedComponent, isLoading) => {
    const Spinner = (props) => {
        const [loading] = useState(isLoading);

        return loading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent { ...props } />
        );
    }
    return Spinner;
};

export default WithSpinner;