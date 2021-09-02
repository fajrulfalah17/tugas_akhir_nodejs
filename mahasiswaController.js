Mahasiswa = require("./mahasiswaModel");

exports.index = function (req, res) {
    Mahasiswa.get(function (err, mahasiswa) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        }

        res.json({
            status: "Success",
            message: "Data Mahasiswa berhasil didapatkan",
            data: mahasiswa
        })
    })
}

// create mahasiswa
exports.create = function (req, res) {
    let mahasiswa = new Mahasiswa();
    mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim
    mahasiswa.nama = req.body.nama
    mahasiswa.jurusan = req.body.jurusan
    mahasiswa.semester = req.body.semester

    // save
    mahasiswa.save().then(data => {
        res.json({
            status: "Success",
            message: "Mahasiswa Baru Terdaftar",
            mahasiswa: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Server Error"
        })
    })
}

// view mahasiswa
exports.view = function (req, res) {
    Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if (err) {
            res.json({
                status: "Error",
                message: err
            })
        }
        res.json({
            message: "Mahasiswa details loading..",
            data: mahasiswa
        })
    })
}

// update mahasiswa
exports.update = function (req, res) {
    Mahasiswa.findById(req.params.mahasiswa_id, function (err, mahasiswa) {
        if (err) {
            res.json({
                status: "Error",
                message: req.params.mahasiswa_id + " not found"
            })
        }
        mahasiswa.nim = req.body.nim
        mahasiswa.nama = req.body.nama
        mahasiswa.jurusan = req.body.jurusan
        mahasiswa.semester = req.body.semester

        // save
        mahasiswa.save().then(data => {
            res.json({
                status: "Success",
                message: "Mahasiswa info Updated",
                mahasiswa: data
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Server Error"
            })
        })
    })
}

// delete data mahasiswa
exports.delete = (req, res) => {
    const mahasiswa = req.params.mahasiswa_id;

    Mahasiswa.findOneAndDelete({
            "mahasiswa": mahasiswa
        })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: "cannot delete user with mahasiswa " + req.params.mahasiswa_id
                })
            } else {
                res.json({
                    status: "Success",
                    message: "succes delete data user"
                })
            }
        })
}