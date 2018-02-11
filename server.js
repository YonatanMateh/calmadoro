const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const url = 'mongodb://localhost/weatherReactDB';

// mongoose.connect(url, function (err, db) {
//   if (err) {
//     console.log('Unable to connect to the mongoDB server. Error:', err);
//   } else {
//     console.log('Connection established to', url);
//   }
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
