let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');

let fileWorker = require('../controllers/file.controller.js');

router.post('/api/file/upload', upload.single("file"), fileWorker.uploadFile);

router.get('/api/file/all', fileWorker.listUrlFiles);
 
router.get('/api/file/:filename', fileWorker.downloadFile);
 
let customers = require('../controllers/file.controller.js');

// Create a new Customer
router.post('/api/customers', customers.create);

// Retrieve all Customer
router.get('/api/customers', customers.findAll);

// Retrieve a single Customer by Id
router.get('/api/customers/:id', customers.findOne);

// Update a Customer with Id
router.put('/api/customers', customers.update);

// Delete a Customer with Id
router.delete('/api/customers/:id', customers.delete);

module.exports = router;