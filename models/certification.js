var mongoose = require('mongoose');



var certificationSchema = mongoose.Schema({
    user_id: {
        'type': String
    },
    education_level: {
        'type': String
    },
    school: {
        'type': String
    },
    specialization: {
        'type': String
    },
    begin_year: {
        'type': String
    },
    begin_month: {
        'type': String
    },
    present:{
        'type':Boolean
    },
    end_month: {
        'type': String
    },
    end_year: {
        'type': String
    },
    certificate_num: {
        'type': String
    },
    certification_type: {
        'type': String
    }
});

module.exports = mongoose.model('certification', certificationSchema);