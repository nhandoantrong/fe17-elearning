export const createCourse = (course) => {
    return {
        type: 'CREATE_COURSE',
        course // course : course
    }
}

export const editCourse = (course) => {
    return {
        type: 'EDIT_COURSE',
        course // course : course
    }
}

export const deleteCourse = (id) => {
    return {
        type: 'DELETE_COURSE',
        id
    }
}