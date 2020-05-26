// modules.exports = {
//     configurewebpack:{
//         resolve:{
//             extensions:[],
//             alians:{
//                 '@':'src',
//                 'assets':'@/assets',
//                 'common':'@/common',
//                 'components':'@/assets',
//                 'assets':'@/assets',
//                 'assets':'@/assets',
//             }
//         }
//     }
// }
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}

