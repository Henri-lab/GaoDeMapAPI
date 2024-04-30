request使用说明：
===
API 请求函数 request
request 函数是一个中央调度器，用于处理对高德地图提供的各种 API 的请求。它根据传入的请求类型和参数，调用对应的服务函数。
您的高德地图密钥应该在axiosConfig文件下配置
且确保您已经在您的项目中安装了axios


**函数签名**
```javascript
Copy code
async function request(type, params)
```
**参数**
type (String): 请求的类型，决定将调用哪个 API 功能。
params (Object): 传递给 API 函数的参数，不同的 API 可能需要不同的参数。
返回值
返回一个 Promise，该 Promise 解析为 API 调用的结果。
支持的请求类型及参数
下面列出了 request 函数支持的所有请求类型及其所需的参数：
总览：
静态地图API地理编码API
逆地理编码API
关键字搜索API
周边搜索API
多边形搜索API
ID查询API
输入提示API
路径规划API
坐标转换API
行政区划查询API
IP定位API
天气查询API
矩形区域交通态势API
圆形区域交通态势API
指定线路交通态势API
地理围栏API
猎鹰服务API
GeoHUB服务API
===
**地理编码 (geo)**
address: 要编码的地址字符串。
**逆地理编码 (regeo)**
lon: 经度。
lat: 纬度。
**关键字搜索 (keywordSearch)**
keyword: 搜索关键词。
city: 城市名。
**周边搜索 (aroundSearch)**
location: 中心点坐标。
radius: 搜索半径（可选，默认为1000米）。
keywords: 搜索关键词（可选）。
**多边形搜索 (polygonSearch)**
polygon: 多边形坐标字符串。
keywords: 搜索关键词（可选）。
**ID查询 (idSearch)**
id: 地点的唯一标识符。
输入提示 (autocomplete)
keywords: 提示关键词。
city: 城市名。
**路径规划 (routePlan)**
origin: 起点坐标。
destination: 终点坐标。
strategy: 路径规划策略（可选）。
**坐标转换 (convertCoordinates)**
locations: 坐标列表字符串。
coordsys: 坐标系统（如：gps、mapbar）。
**行政区划查询 (districtQuery)**
keywords: 查询关键字。
subdistrict: 查询下级行政区级别（可选，默认为0）。
**IP定位 (ipLocate)**
ip: IP地址（可选）。
type: IP类型（如：4为IPv4）。
**天气查询 (weather)**
city: 城市代码或名称。
extensions: 天气类型（如：base为基础天气信息）。
**矩形区域交通态势 (rectTraffic)**
rectangle: 矩形区域坐标字符串。
**圆形区域交通态势 (circleTraffic)**
location: 中心点坐标。
radius: 圆形区域半径（单位：米）。
**指定线路交通态势 (roadTraffic)**
name: 道路名称。
adcode: 行政区划代码。
**地理围栏 (geoFence), 猎鹰服务 (trackService), GeoHUB服务 (geoHUB)**
参数根据具体需求设定。
**错误处理**
如果传入的 type 不支持，函数将抛出 "Unsupported request type" 错误。
API 调用失败将返回相应的错误信息。
**示例**
使用 request 函数获取*北京天安门*的地理编码：

```javascript
Copy code
request('geo', { address: '北京天安门' }).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

