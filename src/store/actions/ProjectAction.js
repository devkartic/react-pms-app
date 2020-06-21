export const createProject = (project) => {
   /* return {
        TYPE: 'ADD_PROJECT',
        project: project
    }*/

    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database$a
        const fireStore = getFirestore();
        fireStore.collection({project}).add({
            ...project,
            authorFirstName: "Kartic",
            authorLastName: "Gharami",
            authorId: 12345,
            createdAt: new Date()
        }).then(()=>{
            dispatch({
                type: 'CREATE_PROJECT',
                project // ES6 Syntax or project: project as javascript
            })
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}