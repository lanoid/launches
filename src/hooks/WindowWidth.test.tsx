import { renderHook } from '@testing-library/react-hooks';
import useWindowWidth from './WindowWidth';


describe('useWindowWidth()', () => {
    it('reports current window width', () => {
        const { result: { current } } = renderHook(() => useWindowWidth());
        expect(current).toEqual(1024);
    });
});