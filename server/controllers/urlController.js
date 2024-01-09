const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });
const URL = require('../models/urlSchema');

async function generateShortURL(req, res) {
  if (!req.body) return res.status(400).json({ error: 'url was not found in the request body' });

  const shortId = uid.rnd();
  
  try {
    await URL.create({
      shortId,
      redirectURL: req.body.url,
      visitedHistory: [],
    });

    return res.json({ shortId });

  } catch (err) {
    res.status(500).json({ error: 'An error occurred in the MongoDB server' });
  }
}

module.exports = { generateShortURL };
