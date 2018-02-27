var httpRequest = require('request');

const Login = (request, callback) => {
    var auth = `Basic ${Buffer.from(`${request.user_name}:${request.password}`).toString('base64')}`;
    httpRequest.get({
        url: 'https://api.github.com/',
        headers: {
            "Authorization": auth,
            'User-Agent': 'https://api.github.com/meta'
        }
    }, function (err, res, body) {
        if (err) {
            callback(err)
        }
        if (res.statusCode == 200) {
            console.log(body)
            callback(body)

        }
    });
}

module.exports = {
    login: Login
}