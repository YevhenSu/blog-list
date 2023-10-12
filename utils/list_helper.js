const dummy = () => {
  return 1
}

const totalLikes = ( blogs ) => {
  const likes = blogs.map( blog => blog.likes )
  return likes.reduce( ( acc, val ) => acc + val, 0 )
}

module.exports = {
  dummy,
  totalLikes
}
