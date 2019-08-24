const express = require('express')
const app = express()
const port = process.env.PORT || 1337;

console.log("Server running at http://localhost:%d", port);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
