const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        console.log(req.io, req.connectedUsers);
        
        const { user: loggedId } = req.headers;
        const { devId: targetId } = req.params;


        const loggedDev = await Dev.findById(loggedId);
        const targetDev = await Dev.findById(targetId);

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }

        if (targetDev.likes.includes(loggedId)) {
            const loggedSocket = req.connectedUsers[loggedId];
            const targetSocket = req.connectedUsers[targetId];

            if (loggedSocket) {
                req.io.to(loggedSocket).emit('match', targetDev);
            }

            if (targetSocket) {
                req.io.to(targetSocket).emit('match', loggedDev);
            }
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json( loggedDev );
    }
}