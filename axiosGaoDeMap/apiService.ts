import api from './axiosConfig';

export namespace ApiService {
  // 地理编码API
  export function geocodeAddress(address: any) {
    return api.get('/geocode/geo', { params: { address } });
  }

  // 逆地理编码API
  export function regeocodeLocation(lon: any, lat: any) {
    return api.get('/geocode/regeo', { params: { location: `${lon},${lat}` } });
  }

  // 关键字搜索API
  export function searchKeyword(keyword: any, city: any) {
    return api.get('/place/text', { params: { keywords: keyword, city } });
  }

  // 周边搜索API
  export function searchAround(location: any, radius = 1000, keywords = '') {
    return api.get('/place/around', { params: { location, radius, keywords } });
  }

  // 多边形搜索API
  export function searchPolygon(polygon: any, keywords = '') {
    return api.get('/place/polygon', { params: { polygon, keywords } });
  }

  // ID查询API
  export function searchByID(id: any) {
    return api.get('/place/detail', { params: { id } });
  }

  // 输入提示API
  export function autocompleteKeywords(keywords: any, city: any) {
    return api.get('/assistant/inputtips', { params: { keywords, city } });
  }

  // 路径规划API
  export function routePlan(origin: any, destination: any, strategy = 0) {
    return api.get('/direction/driving', {
      params: { origin, destination, strategy },
    });
  }

  // 坐标转换API
  export function convertCoordinates(locations: any, coordsys = 'gps') {
    return api.get('/assistant/coordinate/convert', {
      params: { locations, coordsys },
    });
  }

  // 行政区划查询API
  export function districtQuery(keywords: any, subdistrict = 0) {
    return api.get('/config/district', { params: { keywords, subdistrict } });
  }

  // IP定位API
  export function locateIP(ip = '', type = '4') {
    return api.get('/ip', { params: { ip, type } });
  }

  // 天气查询API
  export function weatherInfo(city: any, extensions = 'base') {
    return api.get('/weather/weatherInfo', { params: { city, extensions } });
  }

  // 矩形区域交通态势API
  export function rectangleTraffic(rectangle: any) {
    return api.get('/traffic/status/rectangle', { params: { rectangle } });
  }

  // 圆形区域交通态势API
  export function circleTraffic(location: any, radius = 1000) {
    return api.get('/traffic/status/circle', { params: { location, radius } });
  }

  // 指定线路交通态势API
  export function roadTraffic(name: any, adcode: any) {
    return api.get('/traffic/status/road', { params: { name, adcode } });
  }

  // 地理围栏API
  export function geoFence() {
    console.log('开发中');
    return null;
  }

  // 猎鹰服务API
  export function trackService() {
    console.log('开发中');
    return null;
  }
  // GeoHUB服务API
  export function geoHUBService() {
    console.log('开发中');
    return null;
  }
}
