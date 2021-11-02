import { renderHook } from '@testing-library/react-hooks' 
import { act } from 'react-test-renderer'
import useModal from '../../src/hooks/useModal'

describe('useModal hook', () => {
    it('returns false and a toggle handler initially', () => {
        const {result} = renderHook(() => {
            return useModal()
        })
        const {isOpen, toggleModal} = result.current
        expect(isOpen).toBeFalsy()
    } )
    it('toggles the value with handler', () => {
        const {result} = renderHook(() => {
            return useModal()
        })
        expect(result.current.isOpen).toBeFalsy()
        act(() => result.current.toggleModal())
        expect(result.current.isOpen).toBeTruthy()
    })
})