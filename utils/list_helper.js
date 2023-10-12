const dummy = () => {
  return 1
}

const totalLikes = ( blogs ) => {
  const likes = blogs.map( blog => blog.likes )
  return likes.reduce( ( acc, val ) => acc + val, 0 )
}

const favoriteBlog = ( blogs ) => {
  const maxRating = blogs.sort( ( a, b )  => b.likes - a.likes )
  const { title, author, likes } = maxRating[ 0 ]
  return { title, author, likes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
