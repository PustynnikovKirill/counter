export type initialStateType = typeof initialState

const initialState = {
    value: 0
}


export const counterReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INC_VALUE":
            return {
                ...state, value: state.value + 1
            }
        case "SET_VALUE-FROM_LOCAL_STORAGE":
            return {
                ...state,value:action.value
            }
        default:
            return state
    }

}
export type ActionType = incValueACType | setValueFromLocalStorageACType

type incValueACType = ReturnType<typeof incValueAC>
export const incValueAC = () => ({type: "INC_VALUE"} as const)
type setValueFromLocalStorageACType = ReturnType<typeof setValueFromLocalStorageAC>
export const setValueFromLocalStorageAC = (value:number) => ({type: "SET_VALUE-FROM_LOCAL_STORAGE", value} as const)

