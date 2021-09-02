const mongoose = require("mongoose");

const MahasiswaSchema = mongoose.Schema({
    // nim,nama, jurusan, semester
    nim : {
        type: Number,
        required: true
    },
    nama : {
        type: String,
        required :true
    },
    jurusan : {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

// export model Mahasiswa
const Mahasiswa = module.exports = mongoose.model('mahasiswa', MahasiswaSchema);

module.exports.get = function(callback, limit) {
    Mahasiswa.find(callback).limit(limit);
}