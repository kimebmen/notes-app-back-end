const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
  } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
      //   handler: () => {},
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
        // handler: () => {},
      },
      {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
        // handler: () => {},
      },
      {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
        // handler: () => {},
      },
      {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
        // handler: () => {},
      },
    
  ];
   
  module.exports = routes;