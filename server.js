const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

const WISHES_FILE = path.join(__dirname, 'src', 'wishes.json');

app.use(bodyParser.json());

app.post('/api/submit-wish', (req, res) => {
  const newWish = {
    id: Date.now(),
    name: req.body.name,
    message: req.body.message,
    attending: req.body.attending,
    guest: req.body.guest,
    invitedBy: req.body.invitedBy,
    timestamp: new Date().toISOString(),
  };

  fs.readFile(WISHES_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading wishes file.');
    }

    const wishes = JSON.parse(data);
    wishes.push(newWish);

    fs.writeFile(WISHES_FILE, JSON.stringify(wishes, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error saving wish.');
      }
      res.status(200).json({ success: true, message: 'Wish saved successfully!' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});