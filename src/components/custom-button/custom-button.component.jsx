// libraries
import React from "react";
// styles
import { CustomButtonContainer } from "./custom-button.styles";


const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer { ...props }>
        { children }
    </CustomButtonContainer>
)

export default CustomButton;