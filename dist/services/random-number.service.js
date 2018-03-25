"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomNumberService {
    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.RandomNumberService = RandomNumberService;
//# sourceMappingURL=random-number.service.js.map