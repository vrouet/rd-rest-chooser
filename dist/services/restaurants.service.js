"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RestaurantsService {
    constructor(_restaurants, _randomNumberService) {
        this._restaurants = _restaurants;
        this._randomNumberService = _randomNumberService;
    }
    getRestaurant() {
        const idx = this._randomNumberService.getRandomInteger(0, this._restaurants.length - 1);
        return this._restaurants[idx];
    }
}
exports.RestaurantsService = RestaurantsService;
//# sourceMappingURL=restaurants.service.js.map