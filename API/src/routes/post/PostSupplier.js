const model = require('../../model/SupplierModel');
const uuid = require('../../helper/utility');
const errLog = require('../../helper/logger').errorlog;
const { validationResult } = require('express-validator/check') //for post

module.exports = (req, res) => {
    /**
     * check request params
     */
const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        return res.status(422).json(errors.mapped());
    }
    const data = req.body;
    let KodeSup = data.KodeSup;
    let NamaSup = data.NamaSup;
    let AlamatSup = data.AlamatSup;
    let TelpSup = data.TelpSup;

    (async () => {

        await model.storeB([KodeSup, NamaSup, AlamatSup, TelpSup])

        res.send({
            message: "Berhasil menambahkan Supplier"
        })

    })().catch(e => setImmediate(() => {
        console.log(e)
        errLog.error("Error adding Konsumen", { 'err': e.message })
        res.status(500).send({ message: "Terjadi kesalahan pada system, hubungi andministrator!" })
    }))

}