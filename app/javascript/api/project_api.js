import axios from '../custom_axios';
import { snakeCase } from '../utils'

class ProjectApi {
  static loadProjects(params = {}) {
    return axios.get(`/api/v1/projects`, snakeCase(params))
  }

  static loadProject(projectId, params = {}) {
    return axios.get(`/api/v1/projects/${projectId}`, snakeCase(params))
  }
}

export default ProjectApi;
export { ProjectApi };