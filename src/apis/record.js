import request from '~@/utils/request.js'

export function getFoodList( page = 1,pageSize = 10) {
  return request.get('/food/list',{data:{
    page,pageSize
  }})
}
export function  recordDiet( options) {
  return request.post('/food/report',options)
}
export function  getDietByDate( currentTime = '') {
  return request.get('/food',{
    data:{
      currentTime
    }
  })
}
export function  getSportByDate( currentTime = '') {
  return request.get('/sport',{
    data:{
      currentTime
    }
  })
}
export function  addDaily( options) {
  return request.post('/info',options)
}
export function getSportList( page = 1,pageSize = 10) {
  return request.get('/sport/list',{data:{
    page,pageSize
  }})
}
export function  recordSport( options) {
  return request.post('/sport',options)
}

export function getSportConsume(){
  return request.get('/sport/calorie')
}
export function getFoodConsume(params){
  return request.get('/food/calorie',{
    data:{
      calorie:params
    }
  })
}
