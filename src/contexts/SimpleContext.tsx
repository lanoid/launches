import * as React from 'react';

interface SimpleContext {
    userId: string;
}

export default React.createContext<SimpleContext>({
    userId: "XXX"
});