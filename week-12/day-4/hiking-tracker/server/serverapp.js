const express = require('express')
const cors = require('cors')
const app = express() 
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/bookstoredb'
const db = pgp(connectionString)
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())
