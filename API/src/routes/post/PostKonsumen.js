const model = require('../../model/KonsumenModel');
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
    let KodePlg = data.KodePlg;
    let NamaPlg = data.NamaPlg;
    let AlamatPlg = data.AlamatPlg;
    let TelpPlg = data.TelpPlg;

    (async () => {

        await model.storeA([KodePlg, NamaPlg, AlamatPlg, TelpPlg])

        res.send({
            message: "Berhasil menambahkan Konsumen"
        })

    })().catch(e => setImmediate(() => {
        console.log(e)
        errLog.error("Error adding Konsumen", { 'err': e.message })
        res.status(500).send({ message: "Terjadi kesalahan pada system, hubungi andministrator!" })
    }))

}