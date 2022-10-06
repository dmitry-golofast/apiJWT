const express = require('express');
const cors = require('cors');
const db = require('./index');
db.sequelize.sync();
const Role = db.role;

const app = express();
let corsOptions = {
    origin: 'http://localhost:8081'
}

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
    initial();
})

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}