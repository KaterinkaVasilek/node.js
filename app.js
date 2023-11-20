const express = require('express');
const persons = require('./routes/persons.js');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());

app.use('/persons', persons);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
