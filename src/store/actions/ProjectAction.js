export const createProject = (project) => {
   /* return {
        TYPE: 'ADD_PROJECT',
        project: project
    }*/

    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'CREATE_PROJECT',
            project // ES6 Syntax or project: project as javascript
        })
    }
}