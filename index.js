require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns');
const app = express();

// Middleware to parse JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic Configuration
const port = process.env.PORT || 3000;
const urlDatabase = []; // stores original URLs

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl', (req, res) => {
  const { url } = req.body;
  try {
    // Extract hostname from the URL
    const hostname = new URL(url).hostname;

    // Validate hostname using DNS lookup
    dns.lookup(hostname, (err, address) => {
      if (err) {
        return res.json({ error: 'invalid url' });
      }

      const existingIndex = urlDatabase.indexOf(url);
      if (existingIndex !== -1) {
        return res.json({ original_url: url, short_url: existingIndex });
      }

      const shortUrl = urlDatabase.length;
      urlDatabase.push(url);
      return res.json({ original_url: url, short_url : shortUrl });
    });
  } catch (error) {
    return res.json({ error: 'invalid url' });
  }
})

app.get('/api/shorturl/:short_url', (req, res) => {
  const shortUrl = parseInt(req.params.short_url);

  if (shortUrl >= 0 && shortUrl < urlDatabase.length) {
    return res.redirect(urlDatabase[shortUrl]);
  } else {
    return res.json({ error: 'No short URL found' });
  }
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
