export const processTWClasses = (base: string, custom: string) => {
    let baseFragmentedClasses = splitTWClasses(base)
    let customFragmentedClasses = splitTWClasses(custom)
    baseFragmentedClasses = filterTWClasses(baseFragmentedClasses, isNotEmpty)
    customFragmentedClasses = filterTWClasses(customFragmentedClasses, isNotEmpty)
    const filteredFragmentedBaseTWClasses = filterBaseTWCLasses(baseFragmentedClasses, customFragmentedClasses)
    const filteredBaserTWClasses = filteredFragmentedBaseTWClasses.map(twClass => {
        return twClass.join('-')
    })
    let processedClasses = custom
    filteredBaserTWClasses.forEach(twClass => {
        processedClasses = processedClasses + twClass + ' '
    })
    return processedClasses
}

function splitTWClasses(twClasses: string) {
    const subStrings = twClasses.split(' ')
    const fragmentedSubString = subStrings.map(subString => {
        return subString.split('-')
    })

    return fragmentedSubString
}

function filterBaseTWCLasses(baseFragmentedClasses: string[][], customFragmentedClasses: string[][]) {
    const processedClasses = baseFragmentedClasses.filter(twClass => {
        return compareTWBaseClassToCustomClasses(twClass, customFragmentedClasses)
    })
    return processedClasses
}

function compareTWBaseClassToCustomClasses(twClass: string[], customFragmentedClasses: string[][]) {
    let isNotOverlapping = true
    customFragmentedClasses.forEach((customTWClass: string[]) => {
        if (compareTWClass(twClass, customTWClass)) {
            isNotOverlapping = false
        }
    })
    return isNotOverlapping
}

function compareTWClass(baseTWClass: string[], customTWClass: string[]) {

    if (baseTWClass.length !== customTWClass.length) {
        return false
    }
    else if (baseTWClass.length === 1 && baseTWClass[0] === customTWClass[0]) {
        return true
    }
    else if (baseTWClass.length === 2 && baseTWClass[0] === customTWClass[0]) {
        return true
    }
    else if (baseTWClass.length > 2 && checkOverlappingLevel(baseTWClass, customTWClass)) {
        return true
    } else {
        return false
    }
}

function filterTWClasses(twClasses: string[][], filterFunction: Function) {
    const filteredClasses = twClasses.filter((twClass) => {
        return filterFunction(twClass)
    })
    return filteredClasses
}

function isNotEmpty(twClass: string[]) {
    if (twClass.length === 1 && twClass[0] === '') {
        return false
    } else if (twClass.length === 0) {
        return false
    } else {
        return true
    }
}

function checkOverlappingLevel(baseTWClass: string[], customTWClass: string[]) {
    if (baseTWClass[0] !== 'bg' && baseTWClass[0] !== 'text') {
        let overlappingLevel = 0
        for (let i = 0; i < baseTWClass.length; i++) {
            if (baseTWClass[i] === customTWClass[i]) {
                overlappingLevel++
            }
        }
        return overlappingLevel === baseTWClass.length - 1
    }
    else {
        let overlappingLevel = 0
        for (let i = 0; i < baseTWClass.length; i++) {
            if (baseTWClass[i] === customTWClass[i]) {
                overlappingLevel++
            }
        }
        return overlappingLevel === baseTWClass.length - 2
    }
}