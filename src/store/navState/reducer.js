import { createReducer } from "@reduxjs/toolkit";
import navActions from "./actions";

const { renderNav } = navActions

const initialState = {
    state: false,
}

const navReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            renderNav,
            (state,action) => {
                let newState = {
                    ...state,
                    state: action.payload.state
                }
                return newState
            }
            )
)

export default navReducer