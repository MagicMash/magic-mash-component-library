import { renderHook } from '@testing-library/react-hooks' 
import { act } from 'react-test-renderer'
import useModal from '../../src/hooks/useModal'

describe('useModal hook', () => {
    it('returns false initially', () => {
        const {result} = renderHook(() => {
            return useModal()
        })
        const [isOpen, toggleModal, modal] = result.current
        expect(isOpen).toBeFalsy()
    } )
    it('toggles the value with handler', () => {
        const {result} = renderHook(() => {
            return useModal()
        })

        const [isOpen, toggleModal, modal] = result.current

        expect(isOpen).toBeFalsy()
        act(() => toggleModal())
        expect(result.current[0]).toBeTruthy()
    })
})