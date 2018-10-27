export const ACTION_TYPES = {
    API_DEMO: 'ReInit/API_DEMO'
}

const initialState = {
    resDemo: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (ACTION_TYPES.API_DEMO): {
            return {
                ...state,
                resDemo: action.payload
            }
        }
        default:
            return state;
    }
}

export const reDemo = () => dispatch => {
    const result = dispatch({
        type: ACTION_TYPES.API_DEMO,
        payload: "DEMO"
    });
    return result;
};