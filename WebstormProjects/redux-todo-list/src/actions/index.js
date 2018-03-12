//Action creator, create different actions

let nextToDoId = 0;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextToDoId++,
        text
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};