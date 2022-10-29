
const useStep = (initialStep, isCompleted, defaultItems = null, defaultHeaders = null) =>{
    const currentStep  = useState<number>('currentStep', () => initialStep)
    const completed = useState<boolean>('completed', () => isCompleted)
    const items = useState<Array<Object>>('items', () => defaultItems)
    const headers = useState<Array<Object>>('headers', () => defaultHeaders)
    const dividers = useState<Array<Object>>('dividers', () => null)
    const activeDivider  = useState<number>('activeDivider', () => 0)

    const setCurrentStep = (step: number) =>{
        currentStep.value = step
    }
    
    const setCompleted = (complete:boolean) =>{
        console.log("Completing...", complete)
        completed.value = complete
    }

    const setItems = (newItems:[object]) =>{
        items.value = newItems
    }

    const setHeaders = (newHeaders:[object]) =>{
        headers.value = newHeaders
    }

    const setDividers  = (newDividers:[object]) =>{
        dividers.value = newDividers
    }

    const setActiveDivider = (index:number) =>{
        activeDivider.value = index
    }

    return {
        currentStep,
        setCurrentStep,
        completed,
        setCompleted,
        items,
        setItems,
        headers,
        setHeaders,
        dividers,
        setDividers,
        activeDivider,
        setActiveDivider,
    }
}


export default useStep
