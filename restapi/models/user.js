const db = require('mongoose');

const userSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    firstname:      { type: String, required: true },
    surname:        { type: String, required: true },
    org:            { type: String, required: false },
    address:        { type: String, required: true },
    postalcode:     { type: String, required: true },
    city:           { type: String, required: true },
    country:        { type: String, required: true },

    email:          { type: String, required: true, unique: true},
    password:       { type: String, required: true },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
    
});

module.exports = db.model("User", userSchema);

