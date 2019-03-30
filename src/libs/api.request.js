import HttpRequest from '@/libs/axios'
import config from '@/config'
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const authURL = config.baseUrl.authURL
const manageURL = config.baseUrl.managerURL

export const auth_axios = new HttpRequest(authURL)
export const manage_axios = new HttpRequest(manageURL)
// export default axios
