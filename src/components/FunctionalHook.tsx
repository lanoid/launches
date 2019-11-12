import * as React from 'react';
import useWindowWith from '../hooks/WindowWidth';

const FunctionalHook: React.FunctionComponent = () => {
    const width = useWindowWith();
    
    return(
        <div>{ width }</div>
    );
}

export default FunctionalHook;