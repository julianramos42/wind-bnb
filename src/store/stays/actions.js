import { createAction } from "@reduxjs/toolkit";

let allStays = createAction(
    'allStays',
    ({stays, filter, guests, city}) => {
        return {
            payload: {
                stays: stays,
                filter: filter,
                guests: guests,
                city: city
            }
        }
    }
)

const staysActions = {allStays}
export default staysActions