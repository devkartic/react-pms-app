const initState = {
    projects: [
        {id:1, title:'Project title 1', content: 'Project Content 1'},
        {id:2, title:'Project title 2', content: 'Project Content 2'},
        {id:3, title:'Project title 3', content: 'Project Content 3'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case ('CREATE_PROJECT'):
            console.log('project created', action.project);
            return state;
        case ('CREATE_PROJECT_ERROR'):
            console.log('Create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;