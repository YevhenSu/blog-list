const config = require( './utils/config' )
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require( './controllers/blogs' )
const logger = require( './utils/logger' )
const mongoose = require('mongoose')
const Blog = require( './models/blog' )

mongoose
  .connect(config.MONGODB_URI)
  .then( () => logger.info( 'connected to mongodb' ) )
  .catch( error => logger.error( 'error connecting to MongoDB', error.message ) )

app.use(cors())
app.use(express.json())
app.use( '/api/blogs', blogsRouter )

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
