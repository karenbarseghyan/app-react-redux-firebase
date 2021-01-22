const initState = {
    projects: [
        {id: '1', title: 'search me', content: 'blah blah'},
        {id: '2', title: 'find me', content: 'blah blah'},
        {id: '3', title: 'help me', content: 'blah blah'}
    ]
}

const projectReducer = (state = initState,action) => {
    return state;
}

export default projectReducer;