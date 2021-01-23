export const createProject = (project) => {
    return (dispatch, getState, {getFirebase} ) => {
        // async call
        const firestore = getFirebase().firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Karen',
            authorLastName: 'Barseghyan',
            authorId: 123,
            createdAt: new Date()
        }).then(()=> {
           dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    }
};