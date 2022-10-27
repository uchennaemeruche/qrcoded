
const useStep = (initialStep, isCompleted) =>{
    const currentStep  = useState<number>('currentStep', () => initialStep)
    const completed = useState<boolean>('completed', () => isCompleted)

    const setCurrentStep = (step: number) =>{
        currentStep.value = step
    }
    
    const setCompleted = (complete:boolean) =>{
        console.log("Completing...", complete)
        completed.value = complete
    }

    return {
        currentStep,
        setCurrentStep,
        completed,
        setCompleted
    }
}


export default useStep
