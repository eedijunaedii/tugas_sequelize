// controller.js

const Biodata = require('./model');

// Create Biodata
exports.createBiodata = async (req, res) => {
  try {
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;
    const biodata = await Biodata.create({ nama, tempat_lahir, tanggal_lahir, alamat });
    res.status(201).json(biodata);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create biodata' });
  }
};

// Read Biodata
exports.getBiodata = async (req, res) => {
  try {
    const biodata = await Biodata.findAll();
    res.json(biodata);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch biodata' });
  }
};

// Update Biodata
exports.updateBiodata = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, tempat_lahir, tanggal_lahir, alamat } = req.body;
    const [updated] = await Biodata.update({ nama, tempat_lahir, tanggal_lahir, alamat }, {
      where: { id }
    });
    if (updated) {
      res.json({ message: 'Biodata updated successfully' });
    } else {
      res.status(404).json({ error: 'Biodata not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update biodata' });
  }
};

// Delete Biodata
exports.deleteBiodata = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Biodata.destroy({
      where: { id }
    });
    if (deleted) {
      res.json({ message: 'Biodata deleted successfully' });
    } else {
      res.status(404).json({ error: 'Biodata not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete biodata' });
  }
};
