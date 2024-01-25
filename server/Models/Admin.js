const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  nom: { 
    type: String,
    required: true 
},
  prenom: {
    type: String,
    required: true 
},
  email: {
    type: String, 
    required: true 
},
  password: {
    type: String, 
    required: true 
},
  role: {
    type: String,
    required: true
  }

});

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;