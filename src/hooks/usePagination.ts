import { useState } from "react";

const usePagination = (top: number, numberOfPages: number ) : [number, number[] , () => void, () => void, ( target :number) => void] => {

    let numberOfPagesChecked = numberOfPages 
    if(numberOfPagesChecked === undefined){
        numberOfPagesChecked = top
    }
    const initialIndexes = getIndexes(top, 0, numberOfPagesChecked)

    const [selected, setSelected] = useState(0)
    const [indexes, setIndexes] = useState(initialIndexes)

    const updateIndexes = (selected: number) => {
        setIndexes(getIndexes(top, selected, numberOfPagesChecked))
    }

    const next = () => {
        if(selected === top){
            setSelected(0)
            updateIndexes(selected)
        }
        else{
            setSelected(prevState => {
                updateIndexes(prevState + 1)
                return prevState + 1
            })
        }
    }
    const prev = () => {
        if(selected === 0){
            setSelected(top)
            updateIndexes(selected)
        }
        else{
            setSelected(prevState => {
                updateIndexes(prevState - 1)
                return prevState - 1
            })
        }
    }
    const target = (target: number) => {
        if(target < 0 || target > top){
            
        }
        else{
            setSelected(prevState => {
                updateIndexes(target)
                return target
            })
        }
    }

    return [selected, indexes, next, prev, target]
}

export default usePagination

const getIndexes = (top: number, selected: number, max: number) => {
    const indexes: number[] = []
    for(let i = selected; i <= top ; i++){
        if(indexes.length <= max -1){
            indexes.push(i)
        }
    }
    return indexes
}