// libraries
import React from 'react';
// styles
import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
} from './error-boundary.styles';


class ErrorBounadry extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    };
    
    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    };

    componentDidCatch(error, info) {
        console.log(error);
    };

    render() {
        if(this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png'/>
                    <ErrorImageText> Sorry, this page is broken </ErrorImageText>
                </ErrorImageOverlay>
            );
        };

        return this.props.children;
    };
};

export default ErrorBounadry;