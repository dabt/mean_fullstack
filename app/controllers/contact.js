var contacts = [
  {_id: 1, name: 'Contato Exemplo 1', 
   email: 'cont1@empresa.com.br'},
  {_id: 2, name: 'Contato Exemplo 2', 
   email: 'cont2@empresa.com.br'},
  {_id: 3, name: 'Contato Exemplo 3', 
   email: 'cont3@empresa.com.br'}
]; 

module.exports = function() {
  var controller = {};
  controller.listContacts = function(req, res) {
      res.json(contacts);
  };
  controller.getContact = function(req, res) {
  	var idContact = req.params.id;
  	var contact = contacts.filter(function(contact) {
  		return contact._id == idContact;
  	})[0];
  	contact ? 
  	  res.json(contact) : 
      res.status(404).send('Contact not found!');
  };
  return controller;
};