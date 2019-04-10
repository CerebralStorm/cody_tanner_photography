import axios from '../custom_axios';
import { snakeCase } from '../utils'

class BlogApi {
  static loadBlogs(params = {}) {
    return axios.get(`/api/v1/blogs`, snakeCase(params))
  }

  static loadBlog(blogId, params = {}) {
    return axios.get(`/api/v1/blogs/${blogId}`, snakeCase(params))
  }
}

export default BlogApi;
export { BlogApi };