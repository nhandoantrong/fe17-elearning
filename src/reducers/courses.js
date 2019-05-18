const courses = JSON.parse(localStorage.getItem('courses'))

const initialState = courses ? courses : [];

const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state, action.course]
            
        default:
            break;
    }

    return [...state];
}

export default coursesReducer