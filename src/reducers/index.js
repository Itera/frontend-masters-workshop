import { CHANGE_SELECTION } from '../actions';

const defaultState = {
    selected: {
        eyes: 'eyes1',
        nose: 'nose2',
        mouth: 'mouth1'
    }
};

export default (previousState = defaultState, action) => {
    console.log(action);

    switch (action.type) {
        case CHANGE_SELECTION: {
            return {
                ...previousState,
                selected: {
                    ...previousState.selected,
                    ...action.data
                }
            };
        }
        default:
            return { ...previousState };
    }
};