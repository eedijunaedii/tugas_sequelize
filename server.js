const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const BiodataController = require('./controller');

// Create Biodata
app.post('/biodata', BiodataController.createBiodata);

// Read Biodata
app.get('/biodata', BiodataController.getBiodata);

// Update Biodata
app.put('/biodata/:id', BiodataController.updateBiodata);

// Delete Biodata
app.delete('/biodata/:id', BiodataController.deleteBiodata);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
