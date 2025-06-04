const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAllUsers, createUser, updateUser, deleteUser } = require('./controllers/userController');    
