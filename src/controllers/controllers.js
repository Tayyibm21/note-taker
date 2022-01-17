const getNote = (req, res) => {
    res.send(`getNote`);
};

 const createNotes = (req, res) => {
     res.send(`createNotes`);
 };

  const deleteNotes = (req, res) => {
      res.send(`deletenote`);
  };

  module.exports = {
      getNote,
      createNotes,
      deleteNotes,
  };