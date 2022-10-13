const express = require('express');
const cors = require('cors');
const db = require('./models');
db.sequelize.sync();
// const Tag = db.;
const app = express();
let corsOptions = {
    origin: 'http://localhost:8081'
}

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extend: true}))

app.get('/', (req, res) => {
    res.json({message: 'Welcome to app'})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync Db');
    // initial();
})

// function initial() {
//     Tag.create({
//         id: 1,
//         name: "user"
//     });
//
//     Tag.create({
//         id: 2,
//         name: "moderator"
//     });
//
//     Tag.create({
//         id: 3,
//         name: "admin"
//     });
// }