import { ApiService } from "./apiService";

export default async function request(type, params) {
    switch (type) {
        case 'geo':
            return ApiService.geocodeAddress(params.address);
        case 'regeo':
            return ApiService.regeocodeLocation(params.lon, params.lat);
        case 'keywordSearch':
            return ApiService.searchKeyword(params.keyword, params.city);
        case 'aroundSearch':
            return ApiService.searchAround(params.location, params.radius, params.keywords);
        case 'polygonSearch':
            return ApiService.searchPolygon(params.polygon, params.keywords);
        case 'idSearch':
            return ApiService.searchByID(params.id);
        case 'autocomplete':
            return ApiService.autocompleteKeywords(params.keywords, params.city);
        case 'routePlan':
            return ApiService.routePlan(params.origin, params.destination, params.strategy);
        case 'convertCoordinates':
            return ApiService.convertCoordinates(params.locations, params.coordsys);
        case 'districtQuery':
            return ApiService.districtQuery(params.keywords, params.subdistrict);
        case 'ipLocate':
            return ApiService.locateIP(params.ip, params.type);
        case 'weather':
            return ApiService.weatherInfo(params.city, params.extensions);
        case 'rectTraffic':
            return ApiService.rectangleTraffic(params.rectangle);
        case 'circleTraffic':
            return ApiService.circleTraffic(params.location, params.radius);
        case 'roadTraffic':
            return ApiService.roadTraffic(params.name, params.adcode);
        case 'geoFence':
            return ApiService.geoFence(params);
        case 'trackService':
            return ApiService.trackService(params);
        case 'geoHUB':
            return ApiService.geoHUBService(params);
        default:
            throw new Error('Unsupported request type');
    }
}
