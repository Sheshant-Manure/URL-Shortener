const User = require('../models/userSchema');

const createNewAccount = async (req, res) => {
    const { username, email, password } = req.body
    await User.create({
        username,
        email,
        password,
    })
    .then((user)=> {
        return res.json({ data: user });
    })
    .catch((err)=>{
        return res.status(500).json({ error: 'Error creating user' });
    })
}

module.exports = { createNewAccount };