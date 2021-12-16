"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Users = /** @class */ (function () {
    function Users(client) {
        this.client = client;
    }
    /**
     * Used to create an API user in the sandbox target environment
     * @param host The provider callback host
     */
    Users.prototype.create = function (host) {
        var userId = uuid_1.v4();
        return this.client
            .post("/v1_0/apiuser", { providerCallbackHost: host }, {
            headers: {
                "X-Reference-Id": userId
            }
        })
            .then(function () { return userId; });
    };
    /**
     * Used to create an API key for an API user in the sandbox target environment.
     * @param userId
     */
    Users.prototype.login = function (userId) {
        return this.client
            .post("/v1_0/apiuser/" + userId + "/apikey")
            .then(function (response) { return response.data; });
    };
    return Users;
}());
exports.default = Users;
