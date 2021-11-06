import { useState } from "react";
import { alertData } from "../ts/componentsProps";

const useAlert = (initialAlerts: alertData[]) : [alertData[], (alert: alertData) => void, (alertTitleToRemove: string) => void] => {

    const [alerts, setAlerts] = useState(initialAlerts)

    const addAlert = (alert: alertData) => {
        setAlerts(prevState => {
            const newState = prevState
            newState.push(alert)
            return newState
        })
    }

    const removeAlert = (alertTitleToRemove: string) => {
        console.log('removing alert')
        setAlerts(prevState => {
            let newState = prevState
            newState = newState.filter(alert => {
                return alert.title !== alertTitleToRemove
            })
            return newState
        })
    }

    return [alerts, addAlert, removeAlert]
}

export default useAlert