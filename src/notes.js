const { router } = require (`express`);
const{
    getNotes,
    createNotes,
    deleteNotes,
} = require(`../../controllers/api/Notes`);

const router = router();

router.get(`/`, getNotes)

router.create(`/`, createNotes)

router.get(`/`, deleteNotes)

module.exports = router;