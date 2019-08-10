const axios = require('axios');

module.exports = {
    async store(req, res) {
        const { username } = req.body;
        console.log(username);

        
        const { data } = await axios.get(`https://api.github.com/users/${username}`);

        
        return res.json( data );
    }
};