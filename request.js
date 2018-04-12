const requestlib = require('request');

const base_path = 'http://localhost:5678';

function request(url = '', method = 'GET', params = []) {
    return new Promise((resolve, reject) => {
        let options = getOptions(url, method, params);
        requestlib(options, (err, res, body) => {
            let statusCode = res.statusCode;
            if (!err && (statusCode == 200 || statusCode == 201)) {
                resolve({ body, statusCode });
            } else {
                reject(err, statusCode, body)
            }
        });
    });
}

function getOptions(url, method, params) {
    url = `${base_path}/${url}`;
    return {
        url,
        method,
        headers: {
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
        }
    };
}

module.exports = request;