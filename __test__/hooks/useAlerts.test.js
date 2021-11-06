import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-test-renderer";
import useAlert from '../../src/hooks/useAlert'

const initialAlerts = [
    {
        title: 'test1',
        text: 'alert test text'
    },
    {
        title: 'test2',
        text: 'alert test text'
    }
]

const singleAlert = {
    title: 'test3',
    text: 'alert test text'
}

describe('useAlert hook', () => {
    it('returs the alerts and methods to add and remove alerts', () => {

        const { result } = renderHook(() => useAlert(initialAlerts) )
        expect(result.current[0]).toHaveLength(2)

        act( () => result.current[1](singleAlert) )
        let alerts = result.current[0]

        expect(alerts).toHaveLength(3)
        expect(alerts[0].title).toEqual('test1')
        expect(alerts[1].title).toEqual('test2')
        expect(alerts[2].title).toEqual('test3')

        act( () => result.current[2]('test1') )
        alerts = result.current[0]
        
        expect(alerts[0].title).toEqual('test2')
        expect(alerts[1].title).toEqual('test3')

    })
})