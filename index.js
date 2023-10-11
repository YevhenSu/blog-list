const config = require( './utils/config' )
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require( './utils/logger' )
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set( 'toJSON', {
  transform: ( document, returnedObject ) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
} )

const Blog = mongoose.model('Blog', blogSchema)

mongoose
  .connect(config.MONGODB_URI)
  .then( () => logger.info( 'connected to mongodb' ) )
  .catch( error => logger.error( 'error connecting to MongoDB', error.message ) )

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
