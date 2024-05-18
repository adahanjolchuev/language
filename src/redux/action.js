const initialState = {
    value :  ""
}

function Reducer(state = initialState , action) {
switch (action.type) {
    case "ADD_TEXT":
        return {...state , value : action.payload}
    default:
        return state
}
}
export default Reducer

