import { createAction } from "@reduxjs/toolkit";

let allStays = createAction(
    'allStays',
    ({stays}) => {
        return {
            payload: {
                stays: stays,
            }
        }
    }
)

const staysActions = {allStays}
export default staysActions