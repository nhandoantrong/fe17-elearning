const courses = JSON.parse(localStorage.getItem('courses'))

const initialState = courses ? courses : [];

const coursesReducer = (state = initialState, action) => {
    let newState = [];
    let index = -1;
    switch (action.type) {
        case 'CREATE_COURSE':
            newState = [...state, action.course]
            localStorage.setItem('courses', JSON.stringify(newState))
            return newState

        case 'EDIT_COURSE':
            index = state.findIndex(course => course.id === action.course.id)

            state[index] = action.course
            localStorage.setItem('courses', JSON.stringify(state))

            return [...state]

        case 'DELETE_COURSE':
            newState = [...state];
            index = newState.findIndex(course => course.id === action.id)
            newState.splice(index, 1)
            localStorage.setItem('courses', JSON.stringify(newState))

            return [...newState]
            
        default:
            break;
    }

    return [...state];
}

export default coursesReducer