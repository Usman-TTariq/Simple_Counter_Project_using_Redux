
import { INCREMENT, DECREMENT } from "../Constant"

export const increment = () => {
    return{
        type: INCREMENT
    }
}

export const decrement = () => {
    return{
        type: DECREMENT
    }
}