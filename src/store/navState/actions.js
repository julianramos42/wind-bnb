import { createAction } from "@reduxjs/toolkit";

let renderNav = createAction(
    'renderNav',
    ({state}) => {
        return {
            payload: {
                state: state,
            }
        }
    }
)

const navActions = {renderNav}
export default navActions