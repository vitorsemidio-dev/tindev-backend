const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { user: loggedId } = req.headers;
        const { devId: targetId } = req.params;


        const loggedDev = await Dev.findById(loggedId);
        const targetDev = await Dev.findById(targetId);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json( loggedDev );
    }
}