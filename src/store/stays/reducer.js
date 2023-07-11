import { createReducer } from "@reduxjs/toolkit";
import staysActions from "./actions";
import data from '../../data.json'

const { allStays } = staysActions

const initialState = {
    stays: data,
}

const staysReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            allStays,
            (state,action) => {
                let newState = {
                    ...state,
                    stays: action.payload.stays
                }
                return newState
            }
            )
)

export default staysReducer