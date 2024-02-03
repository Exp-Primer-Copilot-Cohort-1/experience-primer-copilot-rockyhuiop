// Create web server
// To run: node comment.js
// To test: curl -d "comment=Hello" http://localhost:3000/comment

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.post('/comment', (req, res) => {
  res.send('Your comment was: ' + req.body.comment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
```
####