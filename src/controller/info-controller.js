
const {statusCode} = require('http-status-code')

const info = (req, res) => {
    return res.json({
        success: true,
        messege : "API is live",
        error : {},
        data : {}

    })
};

module.exports = {
    info
}