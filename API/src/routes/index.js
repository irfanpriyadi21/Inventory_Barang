'use strict'
const routes = require('express').Router();
const multer = require('multer');
const { check } = require('express-validator/check')

const postNewsStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__basedir}/assets/images`);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const newsUpload = multer({ storage: postNewsStorage });
// Post Konsumen
const postKonsumen = require('./post/PostKonsumen')
routes.post('/post/konsumen', [
    check([
        'KodePlg',
        'NamaPlg',
        'AlamatPlg',
        'TelpPlg'
    ]).exists()
], postKonsumen);

// Post Produk
const postProduk = require('./post/PostProduk')
routes.post('/post/produk', [
    check([
        'KodeBrg',
        'NamaBrg',
        'SatuanBrg',
        'HargaJual',
        'StokBrg'
    ]).exists()
], postProduk);

// Post Supplier
const postSupplier = require('./post/PostSupplier')
routes.post('/post/supplier', [
    check([
        'KodeSup',
        'NamaSup',
        'AlamatSup',
        'TelpSup'
    ]).exists()
], postSupplier)
module.exports = routes;