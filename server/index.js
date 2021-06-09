// server/index.js
const express = require("express");
const path = require('path');
import youtuberouter from './routers/youtuberouter'

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

// Route requests for the user endpoints
app.use('/api/youtube', youtuberouter)

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server Test!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


