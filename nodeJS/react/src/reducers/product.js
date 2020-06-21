const productReducerDefault = [];

export default (state = productReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_PRODUCT':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_PRODUCT':
            return state.map((expense) => {
                if (expense.id === action.id)
                    return {
                        ...expense,
                        ...action.updates
                    }; else {
                   return expense;
                }
            });

        case 'SET_PRODUCT':
            return action.expenses;

        default:
            return state;
    }
};