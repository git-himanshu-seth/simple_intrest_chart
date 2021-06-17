
const INITIAL_STATE = { data: null, };
const graphReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLOAT_GRAPH':
            return {
                ...state,
                dataGraph: action.payload
            }
        default:
            return state;
    }
}

export default graphReducer;