const URL = require('../models/urlSchema');

const redirectURL = async (req, res)=> {
    const shortId = req.params.shortId;
    const doc = await URL.findOneAndUpdate(
        { shortId }, 
        {
            $push: {
                visitHistory: { timestamp: Date.now() },
            }
        }
    )
    res.redirect(doc.redirectURL);
}

module.exports = { redirectURL };