import * as React from 'react';

interface DictionaryContext {
    labels: {
        startInputLabel: string;
        endInputLabel: string;
        submitLabel: string;
    }
}

export default React.createContext<DictionaryContext>({
    labels: {
        startInputLabel: "Start Date",
        endInputLabel: "End Date",
        submitLabel: "Get Launch Data"
    }
});