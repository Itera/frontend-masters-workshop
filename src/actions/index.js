export const CHANGE_SELECTION = 'ACTION.CHANGE_SELECTION';

export const changeSelection = event => {
    return {
        type: CHANGE_SELECTION,
        data: {
            [event.target.name]: event.target.value
        }
    }
} 