// You can mix local images (from /public) and CDN images (e.g., Cloudinary URLs)
// Local example requires placing files in /public/albums/<slug>/


const albums = [
{
slug: 'portraits',
title: 'PORTRAITS',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109483/IMG_0447_fizse4.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109469/IMG_0414_qotbxq.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109469/IMG_0417_zdsvyy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109470/IMG_0435_d0lkza.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109470/IMG_0439_uo0jkx.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109471/IMG_0436_sfiljg.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109472/IMG_0442_qcibpu.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109472/IMG_0466_ntb0qt.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109473/IMG_0376_unxmpq.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109473/IMG_0468_knpu6c.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109473/IMG_0375_zdzdds.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109483/IMG_0452_kk61oc.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109483/IMG_0447_fizse4.jpg',

]
},
{
slug: 'Pola',
title: 'POLA',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109688/IMG_0659_jwcd79.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109708/IMG_0657_muuoch.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109688/IMG_0659_jwcd79.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109689/IMG_0660_ptclyo.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109690/IMG_0662_ptyfyy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109690/IMG_0666_yrzwzz.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109691/IMG_0668_ogxw86.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109694/IMG_0678_rsbn7s.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109696/IMG_0683_d9rorc.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109699/IMG_0693_oqtloa.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109704/IMG_0707_rue9j1.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109708/IMG_0716_fetlty.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109690/IMG_0661_grbuek.jpg',
]
},
{
slug: 'backtoblack',
title: 'BACK TO BLACK',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109546/IMG_0570_etuh2k.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109546/IMG_0570_etuh2k.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109547/IMG_0572_mgx8qf.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109547/IMG_0573_p0vork.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109556/IMG_0613_nza8az.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109556/IMG_0605_ixbwul.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109575/IMG_0574_ifoywo.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109575/IMG_0577_ec6wty.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109579/IMG_0620_crueia.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109580/IMG_0629_qafxtk.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109581/IMG_0624_omfxjj.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109556/IMG_0605_ixbwul.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109548/IMG_0578_n4wrnt.jpg',

]
},
{
slug: 'DOCKER',
title: 'DOCKER',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110000/IMG_0962_kv3gey.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109989/IMG_0883_tzom93.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109992/IMG_0888_cdzme1.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109991/IMG_0889_casb9h.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109998/IMG_0961_hygtdb.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110000/IMG_0962_kv3gey.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110003/IMG_0892_g2hsws.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110004/IMG_0881_xxmraa.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110009/IMG_0960_wqr0qh.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110021/IMG_0916_corcmg.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110022/IMG_0918_iobwcl.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109983/IMG_0876_dmp9ez.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109987/IMG_0882_hs8f8q.jpg',
]
},
{
slug: 'WHITE',
title: 'WHITE',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109933/IMG_0825_heyelq.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109978/IMG_0872_lwmjvs.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109967/IMG_0802_jazeum.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109965/IMG_0804_fpjvuq.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109935/IMG_0822_kskcro.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109934/IMG_0823_trweo8.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109931/IMG_0817_wgd0cf.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109927/IMG_0811_bi1bix.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109976/IMG_0868_ps5lcw.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109973/IMG_0866_uz2wdk.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109971/IMG_0809_ndcguy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109951/IMG_0846_xtkhh7.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109952/IMG_0832_rwll9x.jpg',
]
},
{
slug: 'STREETWEAR',
title: 'STREETWEAR',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109780/IMG_0756_yanlah.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109786/IMG_0770_hky68g.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109786/IMG_0768_xq6mvt.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109782/IMG_0766_okakro.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109778/IMG_0753_h167fe.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109773/IMG_0746_yfoncy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109768/IMG_0739_anj3bx.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109766/IMG_0730_tzceme.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109767/IMG_0734_qbut7x.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109770/IMG_0741_j7lehy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109781/IMG_0762_oioryo.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109767/IMG_0731_nendpy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109768/IMG_0736_xl6hr0.jpg',
]
},
{
slug: 'CONCOURS',
title: 'CONCOURS',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883396/IMG_9636_s87gdm.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883396/IMG_9635_qeb9mb.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883396/IMG_9636_s87gdm.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883396/IMG_9637_b5vea1.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883786/DSC_0146_desyig.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883786/DSC_0147_fpc566.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883787/DSC_0150_xk6ymf.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883788/DSC_0151_bkiwlk.jpg',
]
},
{
slug: 'DIVERS',
title: 'DIVERS',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883895/IMG_7170_oudkep.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883902/IMG_0039_dvstin.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883900/IMG_5919_pdykqc.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883893/IMG_5770_bmkbcx.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883901/IMG_6048_a9zlml.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883903/IMG_3849_w1bflo.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883899/IMG_1558_m23c1r.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883895/IMG_7170_oudkep.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883892/IMG_5493_zcycrs.jpg',
]
},
]


export default albums
