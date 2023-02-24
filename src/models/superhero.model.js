const mongoose = require('mongoose');
const superhero_schema = mongoose.Schema({
    superhero: {type: String, required: true},
    universe: {type: String, required: true},
    superpowers: {type: Array, required: true},
    address: {
        type: Object,
        required: true,
        city: {type: String, required: true},
        code_zip: {type: String, required: true},
    },
});
module.exports = mongoose.model("SuperheroCollection", superhero_schema);