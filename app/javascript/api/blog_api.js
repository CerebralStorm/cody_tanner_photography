import axios from '../custom_axios';
import { snakeCase } from '../utils'

class BlogApi {
  static loadBlogs(params = {}) {
    return axios.get(`/api/v1/blogs`, snakeCase(params))
  }

  static loadBlog(orderId, params = {}) {
    return axios.get(`/api/v1/blogs/${orderId}`, snakeCase(params))
  }
}

export default BlogApi;
export { BlogApi };