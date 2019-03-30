import {manage_axios} from '@/libs/api.request'

export const getTableData = () => {
  return manage_axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return manage_axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const errorReq = () => {
  return manage_axios.request({
    url: 'error_url',
    method: 'post'
  })
}

export const saveErrorLogger = info => {
  return manage_axios.request({
    url: 'save_error_logger',
    data: info,
    method: 'post'
  })
}

export const uploadImg = formData => {
  return manage_axios.request({
    url: 'image/upload',
    data: formData
  })
}

export const getOrgData = () => {
  return manage_axios.request({
    url: 'get_org_data',
    method: 'get'
  })
}

export const getTreeSelectData = () => {
  return manage_axios.request({
    url: 'get_tree_select_data',
    method: 'get'
  })
}
