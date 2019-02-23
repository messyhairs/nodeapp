const uploadFolder = __basedir + '/uploads/';
const fs = require('fs');
 
exports.uploadFile = (req, res) => {
	res.send('File uploaded successfully! -> filename = ' + req.file.filename);
}
 
exports.listUrlFiles = (req, res) => {
	fs.readdir(uploadFolder, (err, files) => {
		for (let i = 0; i < files.length; ++i) {
			files[i] = "http://localhost:8080/api/file/" + files[i];
		}
		
		res.send(files);
	})
}

exports.downloadFile = (req, res) => {
	let filename = req.params.filename;
	res.download(uploadFolder + filename);  
}

let customers = {
				customer1: {
					id: 1,
					comment:"hello! nice post",
					likes:"76",
					url:"diam.png"
				},
				
			}
 
exports.create = function(req, res) {
	// find the largest ID
	let arr = Object.keys( customers ).map(function ( key ) { return customers[key].id; });
	let newId = Math.max.apply( null, arr ) + 1;
	
	let newCustomer = req.body;
	newCustomer.id = newId;
    customers["customer" + newId] = newCustomer;
    res.json(newCustomer);
};
 
exports.findAll = function(req, res) {
    res.json(Object.values(customers));  
};
 
exports.findOne = function(req, res) {
    let customer = customers["customer" + req.params.id];
    res.json(customer);
};
 
exports.update = function(req, res) {
	let updatedCustomer = req.body; 
	customers["customer" + updatedCustomer.id] = updatedCustomer;
	res.json({msg: "Customer Updated Successfully!"});
};
 
exports.delete = function(req, res) {
    delete customers["customer" + req.params.id];
    res.json({msg: "Customer Deleted Successfully!"});
};

