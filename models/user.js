// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   tradingExperience: { type: String, required: true },
//   mobileNumber: { 
//     type: String, 
//     required: true,
//     validate: {
//       validator: function(v) {
//         return /^\d{10}$/.test(v); // Adjust regex based on your needs
//       },
//       message: props => `${props.value} is not a valid mobile number!`
//     }
//   },
//   dob: { type: Date } // Adjust to 'required: true' if necessary
// });

// module.exports = mongoose.model('User', userSchema);






const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true },
  tradingExperience: { type: String, required: true },
  mobileNumber: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v); // Adjust regex as needed
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  registrationDate: { type: Date, default: Date.now } // Field to store registration date
});

module.exports = mongoose.model('User', userSchema);
