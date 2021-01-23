const initState = {
    projects: [
        {id: '1', title: 'search me', content: 'blah blah'},
        {id: '2', title: 'find me', content: 'blah blah'},
        {id: '3', title: 'help me', content: 'blah blah'}
    ]
}

const projectReducer = (state = initState,action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': console.log('created project', action.project);
        return state;
        case 'CRETE_PROJECT_ERROR' : console.log('project error', action.err);
        return state;
        default: return state;
    }
}

export default projectReducer; 