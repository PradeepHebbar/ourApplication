// var httpRequest = require('request');
// var login = require('./Login.js');

// const getAllRepos = (request, callback) => {
//     var userName = login.userName;
//     httpRequest.get({
//         url: 'https://api.github.com/users/' + userName + '/repos',
//     }, function (err, res, body) {
//         if (err) {
//             console.log("Login Failed!!!!")
//             callback(err, null)
//         } else {
//             var result = {
//                 statusCode: res.statusCode,
//                 body: res.body
//             }
//             callback(err, result);
//         }
//     });
// }

// const GetBranches = (request, callback) => {
//     console.log("branches");
// }

// module.exports = {
//     getAllRepos: getAllRepos,
//     getBranches: GetBranches
// }