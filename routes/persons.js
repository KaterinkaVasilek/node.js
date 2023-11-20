const express = require('express');
const router = express.Router();
const { getAllPersons, addPerson, getPersona, updatePersona, deletePersona } = require('../controllers/persons.js');

router.route('/').get(getAllPersons).post(addPerson);
router.route('/:id').get(getPersona).put(updatePersona).delete(deletePersona);

module.exports = router;
