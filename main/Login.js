var httpRequest = require('request');

const Login = (request, callback) => {
    var userName = request.body.user_name;
    var password = request.body.password;
    console.log("Username: " + userName + " Password: " + password);
    var auth = `Basic ${Buffer.from(`${userName}:${password}`).toString('base64')}`;
    httpRequest.get({
        url: 'https://api.github.com/',
        headers: {
            "Authorization": auth,
             'User-Agent': 'https://api.github.com/meta'
        }
    }, function (err, res, body) {
        if (err) {
            console.log("Login Failed!!!!")
            callback(err, null)
        }else{
            var result = {statusCode : res.statusCode,body:res.body}
            callback(err,result);
    }
    });
}

module.exports = {
    login: Login
}