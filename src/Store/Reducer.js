const initialState = {
    message : "subscribe to people Choice"
}

const reducer = (state = initialState , action) => {

    const newState = {...state};
    if(action.type === 'Message_change')
    {
        newState.message = 'Thank you for subscribe'
    }
    return newState
}

export default reducer;