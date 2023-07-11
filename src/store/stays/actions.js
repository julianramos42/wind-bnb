import { createAction } from "@reduxjs/toolkit";

let allStays = createAction(
    'allStays',
    ({stays, filter}) => {
        return {
            payload: {
                stays: stays,
                filter: filter,
            }
        }
    }
)

const staysActions = {allStays}
export default staysActions