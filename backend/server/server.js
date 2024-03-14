const express = require("express");
const app = express();
const cors = require('cors')
const loginRoute = require('./routes/userLogin')
const getAllUsersRoute = require('./routes/userGetAllUsers')
const registerRoute = require('./routes/userSignUp')
const getUserByIdRoute = require('./routes/userGetUserById')
const dbConnection = require('./config/db.config')
const editUser = require('./routes/userEditUser')
const deleteUser = require('./routes/userDeleteAll')
// Favorite

const favoriteGetAll = require('./routes/favoriteGetAll')
const addNewFavoriteRoute = require('./routes/favoriteNew')
const editTheFavRoute = require('./routes/favoriteEditById')
const deleteTheFavRoute = require('./routes/favoriteDeleteById')
const deleteAllFav = require('./routes/deleteAll')



require('dotenv').config();
const SERVER_PORT = 8081

dbConnection()
app.use(cors({origin: '*'}))
app.use(express.json())
app.use('/user', loginRoute)
app.use('/user', registerRoute)
app.use('/user', getAllUsersRoute)
app.use('/user', getUserByIdRoute)
app.use('/user', editUser)
app.use('/user', deleteUser)
app.use('/favorite', favoriteGetAll)
app.use('/favorite', addNewFavoriteRoute)
app.use('/favorite', editTheFavRoute)
app.use('/favorite', deleteTheFavRoute)
app.use('/favorite', deleteAllFav)

app.listen(SERVER_PORT, (req, res) => {
    console.log(`The backend service is running on port ${SERVER_PORT} and waiting for requests.`);
})
