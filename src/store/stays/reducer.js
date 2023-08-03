import { createReducer } from "@reduxjs/toolkit";
import staysActions from "./actions";
import data from '../../data.json'

const { allStays } = staysActions

const initialState = {
    stays: data,
    filter: false,
    guests: 1,
    city: ''
}

const staysReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            allStays,
            (state,action) => {
                let newState = {
                    ...state,
                    stays: action.payload.stays,
                    filter: action.payload.filter,
                    guests:action.payload.guests,
                    city: action.payload.city
                }
                return newState
            }
            )
)

export default staysReducer