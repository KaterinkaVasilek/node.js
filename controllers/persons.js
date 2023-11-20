const fs = require('fs');
const dataFilePath = 'data.json';

const getAllPersons = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  res.json(data);
}

const addPerson = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  const personIndex = data.findIndex(p => p.name == req.body.name);
  if (personIndex !== -1) {
    return res.status(404).json({ error: 'Person already exist' });
  }

  const maxId = data.reduce((max, person) => (person.id > max ? person.id : max), 0);
  const newPersonId = Number(maxId) + 1;

  data.push({id: newPersonId, ...req.body});
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  res.json({ message: 'Person successfully added' });
}

const getPersona = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  console.log(req.params.id)
  const person = data.find(p => p.id == parseInt(req.params.id));
  if (!person) {
    return res.status(404).json({ error: 'Person not found' });
  }
  res.json(person);
}

const updatePersona = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  const personIndex = data.findIndex(p => p.id == parseInt(req.params.id));
  if (personIndex === -1) {
    return res.status(404).json({ error: 'Person not found' });
  }
  data[personIndex] = { id: req.params.id, ...req.body};
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  res.json({ message: 'Person updated successfully' });
}

const deletePersona = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  const newData = data.filter(p => p.id != parseInt(req.params.id));
  if (newData.length === data.length) {
    return res.status(404).json({ error: 'Person not found' });
  }
  fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
  res.json({ message: 'Person deleted successfully' });
}

module.exports = { getAllPersons, addPerson, getPersona, deletePersona, updatePersona };
