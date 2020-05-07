export default {
    namespaced: true,
    state: {
        notes: JSON.parse(localStorage.getItem('notes')) || [],
        lastChangedNotes: JSON.parse(localStorage.getItem('lastChangedNotes')) || [],
        currentNotes: [],
    },
    mutations: {
        updateNote(state, data) {
            state.notes = data;
            localStorage.setItem('notes', JSON.stringify(data));
        },
        updateLastChangedNotes(state, data) {
            state.lastChangedNotes = data;
            localStorage.setItem('lastChangedNotes', JSON.stringify(data));
        },
    },
    actions: {
        createNote({commit}, data) {
            const notes = JSON.parse(localStorage.getItem('notes')) || [];
            notes.push(data);

            commit('updateNote', notes);
        },
        editNote({state, commit}, data) {
            const oldNotes = JSON.parse(localStorage.getItem('lastChangedNotes')) || [];

            if (Object.values(oldNotes).some(note => note.id === data.oldNote.id)) {
                const foundIndex = oldNotes.findIndex(note => note.id === data.oldNote.id);
                oldNotes[foundIndex] = data.oldNote;
            } else {
                oldNotes.push(data.oldNote);
            }

            commit('updateLastChangedNotes', oldNotes);

            const currentNote = Object.values(state.notes).findIndex(note => note.id === data.updatedNote.id)
            state.notes[currentNote] = data.updatedNote;

            commit('updateNote', state.notes);
        },
        deleteNote({state, dispatch, commit}, data) {
            return new Promise(resolve => {
                const updatedNotes = Object.values(state.notes).filter(note => note.id !== data.noteId);

                switch (data.type) {
                    case 'deleteOne':
                        dispatch('setModalState', {type: data.type, noteId: data.noteId}, {root: true});

                        if (data.answer !== 'true') {
                            return;
                        }

                        commit('updateNote', updatedNotes);
                        resolve();
                        break;
                    case 'deleteAll':
                        dispatch('setModalState', {type: data.type, noteId: data.noteId}, {root: true});

                        if (data.answer !== 'true') {
                            console.log('not delete')
                            return;
                        }

                        commit('updateNote', []);
                        resolve();
                        break;
                }
            });
        },
        resetLastChange({state, commit}, data) {
            const lastChangedNote = Object.values(state.lastChangedNotes).filter(note => note.id === data.noteId)[0],
                foundIndex = Object.values(state.notes).findIndex(note => note.id === data.noteId);

            state.notes[foundIndex] = lastChangedNote;

            commit('updateNote', state.notes);
        },
    },
}