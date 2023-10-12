const listHelper = require( '../utils/list_helper' )
const { listWithOneBlog, listWithManyBlogs } = require( './dataForTests' )

describe('total likes', () => {

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })


  test('when list has many blogs, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithManyBlogs)
    expect(result).toBe(36)
  })
})




