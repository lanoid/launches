import launchReducer from './launchReducer';

describe('launchReducer()', () => {
    const launches = [
        {
            name: 'Daft Punk',
            location: {
                name: 'My house'
            },
            windowstart: 'November 14, 2017 18:28:00 UTC',
            windowend: 'November 14, 2017 18:53:00 UTC'
        },
        {
            name: 'Daft Punk',
            location: {
                name: 'My house'
            },
            windowstart: 'November 14, 2017 18:28:00 UTC',
            windowend: 'November 14, 2017 18:53:00 UTC'
        },
        {
            name: 'Daft Punk',
            location: {
                name: 'Your house'
            },
            windowstart: 'November 14, 2017 18:28:00 UTC',
            windowend: 'November 14, 2017 18:53:00 UTC'
        }
    ];

    it('counts launches by location', () => {
        expect(launchReducer(launches)).toEqual({
            "My house": [launches[0], launches[1]],
            "Your house": [launches[2]]
        });
    });
});