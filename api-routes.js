const express = require("express");
const router = express.Router();
// import controller
// const controller = require("./mahasiswaController");

router.get('/', (req, res) => {
    res.json({
        status: "API is running",
        message: "Selamat datang"
    })
})

// import mahasiswa controller
const mahasiswaController = require('./mahasiswaController');

// mahasiswa Router
router.route('/mahasiswa')
.get(mahasiswaController.index)
.post(mahasiswaController.create)

router.route('/mahasiswa/:mahasiswa_id')
.get(mahasiswaController.view)
.patch(mahasiswaController.update)
.put(mahasiswaController.update)
.delete(mahasiswaController.delete)


// export api routes
module.exports = router