const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user: loggedId } = req.headers;
        const { devId: targetId } = req.params;


        const loggedDev = await Dev.findById(loggedId);
        const targetDev = await Dev.findById(targetId);

        console.log(loggedDev);
        console.log(targetDev);

        return res.json( {like: true} );
    }
}