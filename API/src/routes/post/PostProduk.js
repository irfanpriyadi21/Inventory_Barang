const model = require('../../model/ProdukModel');
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
    let KodeBrg = data.KodeBrg;
    let NamaBrg = data.NamaBrg;
    let SatuanBrg = data.SatuanBrg;
    let HargaJual = data.HargaJual;
    let StokBrg = data.StokBrg;

    (async () => {

        await model.storeC([KodeBrg, NamaBrg, SatuanBrg, HargaJual, StokBrg])

        res.send({
            message: "Berhasil menambahkan Produk"
        })

    })().catch(e => setImmediate(() => {
        console.log(e)
        errLog.error("Error adding Konsumen", { 'err': e.message })
        res.status(500).send({ message: "Terjadi kesalahan pada system, hubungi andministrator!" })
    }))

}