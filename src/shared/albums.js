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
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109690/IMG_0662_ptyfyy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109690/IMG_0666_yrzwzz.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109689/IMG_0660_ptclyo.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109699/IMG_0693_oqtloa.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109691/IMG_0668_ogxw86.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109708/IMG_0716_fetlty.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109704/IMG_0707_rue9j1.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109694/IMG_0678_rsbn7s.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109701/IMG_0696_w5wtln.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109706/IMG_0708_kal5oi.jpg',

]
},
{
slug: 'backtoblack',
title: 'BACK TO BLACK',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109576/IMG_0603_w5nwhn.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109576/IMG_0603_w5nwhn.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109548/IMG_0581_svuhgg.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109556/IMG_0613_nza8az.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109547/IMG_0572_mgx8qf.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109547/IMG_0573_p0vork.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109579/IMG_0621_zyksyw.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109555/IMG_0612_bg1isc.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109572/IMG_0566_l2saih.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109580/IMG_0629_qafxtk.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109556/IMG_0605_ixbwul.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109581/IMG_0624_omfxjj.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109548/IMG_0578_n4wrnt.jpg',

]
},
{
slug: 'TANK TOP',
title: 'TANK TOP',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110009/IMG_0960_wqr0qh.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110009/IMG_0960_wqr0qh.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109989/IMG_0883_tzom93.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110010/IMG_0938_qgzw9c.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110000/IMG_0894_vy3gp3.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109998/IMG_0961_hygtdb.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109992/IMG_0888_cdzme1.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110000/IMG_0962_kv3gey.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109987/IMG_0882_hs8f8q.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109995/IMG_0932_eulzbs.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110004/IMG_0881_xxmraa.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762110021/IMG_0916_corcmg.jpg',

'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109983/IMG_0876_dmp9ez.jpg',

]
},
{
slug: 'WHITE',
title: 'WHITE',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109933/IMG_0825_heyelq.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109967/IMG_0802_jazeum.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109959/IMG_0859_zv0fqd.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109928/IMG_0824_mggzcm.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109965/IMG_0804_fpjvuq.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109970/IMG_0871_at6f51.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109935/IMG_0822_kskcro.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109934/IMG_0823_trweo8.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109943/IMG_0853_dsas3h.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109931/IMG_0817_wgd0cf.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109976/IMG_0868_ps5lcw.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109927/IMG_0811_bi1bix.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109978/IMG_0872_lwmjvs.jpg',

]
},
{
slug: 'STREETWEAR',
title: 'STREETWEAR',
cover: 'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109791/IMG_0772_okmbvn.jpg',
images: [
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109791/IMG_0772_okmbvn.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109767/IMG_0731_nendpy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109779/IMG_0755_tsqfyn.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109778/IMG_0753_h167fe.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109781/IMG_0762_oioryo.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109773/IMG_0746_yfoncy.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109782/IMG_0766_okakro.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109767/IMG_0734_qbut7x.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109786/IMG_0768_xq6mvt.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109766/IMG_0730_tzceme.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762109770/IMG_0741_j7lehy.jpg',
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
'https://res.cloudinary.com/dkirmhlji/image/upload/v1763891849/IMG_6480_vsowqc.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1763891865/IMG_6531_kvuejp.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1763891859/IMG_6526_ys8hsa.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1763891816/IMG_6444_vmqnxl.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1763891822/IMG_6449_oaqj1c.jpg',
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
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883898/IMG_0176_tmuszc.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883894/IMG_6452_x9c9gh.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883906/_DSC0940_m5nwce.jpg',
'https://res.cloudinary.com/dkirmhlji/image/upload/v1762883444/IMG_1744_gii1vx.jpg'
]
},
]


export default albums
