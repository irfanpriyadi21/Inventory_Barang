//example of pool connection
const pool = require('../dbconnection')

const storeA = (payload) => { //payload being a parameter that needed to run query, each $1 (parameter) is being represented by the payload respectively
    return pool.query("INSERT INTO inv_konsumen(KodePlg, NamaPlg, AlamatPlg, TelpPlg) VALUES($1, $2, $3, $4)", payload)
}

// const getA = (payload) => { //payload being a parameter that needed to run query, each $1 (parameter) is being represented by the payload respectively
//     return pool.query("SELECT id, no_anggota, nama_perusahaan, cabang, jabatan, masa_berlaku_keanggotaan, (CASE WHEN status_keanggotaan = '0' THEN 'Tidak Aktif' WHEN status_keanggotaan = '1' THEN 'Aktif' END) status_keanggotaan FROM daftar_anggota ORDER BY created_date ASC", payload);
// }

// const getSA = (id) => {
//     return pool.query("SELECT id, no_anggota, nama_perusahaan, cabang, jabatan, alamat, no_telp, status_keanggotaan, created_date, masa_berlaku_keanggotaan FROM daftar_anggota WHERE no_anggota = $1", [id]);
// }

// const editA = (payload) => { //payload being a parameter that needed to run query, each $1 (parameter) is being represented by the payload respectively
//     return pool.query("UPDATE daftar_anggota SET (nama_perusahaan, cabang, jabatan, alamat, no_telp, status_keanggotaan) = ($1, $2 , $3, $4, COALESCE($5, no_telp), COALESCE($6, status_keanggotaan)) WHERE id = $7", payload)
// }

// const deleteA = (payload) => { //payload being a parameter that needed to run query, each $1 (parameter) is being represented by the payload respectively
//     return pool.query("DELETE FROM daftar_anggota WHERE id = $1", payload)
// }

module.exports = {
    'storeA' : storeA
    // 'getA' : getA,
    // 'getSA' : getSA,
    // 'editA' : editA,
    // 'deleteA' : deleteA

}