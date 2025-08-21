const express = require('express');
const router = express.Router();

// Example public route
router.get('/', (req, res) => {
  res.json({ message: 'Projects route working!' });
});

module.exports = router;
