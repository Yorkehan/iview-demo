import {auth_axios,manage_axios} from '@/libs/api.request'

export const login = ({ userName, password }) => {
  debugger
  const data = {
    userName,
    password
  }
  return manage_axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}

export const getUserInfo = (token) => {
  return auth_axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return auth_axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return auth_axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return auth_axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return auth_axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return auth_axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return auth_axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return auth_axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
