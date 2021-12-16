"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var errors_1 = require("./errors");
var validate_1 = require("./validate");
var common_1 = require("./common");
var Collections = /** @class */ (function () {
    function Collections(client) {
        this.client = client;
    }
    /**
     * This method is used to request a payment from a consumer (Payer).
     * The payer will be asked to authorize the payment. The transaction will
     * be executed once the payer has authorized the payment.
     * The requesttopay will be in status PENDING until the transaction
     * is authorized or declined by the payer or it is timed out by the system.
     * Status of the transaction can be validated by using `getTransation`
     *
     * @param paymentRequest
     */
    Collections.prototype.requestToPay = function (_a) {
        var _this = this;
        var callbackUrl = _a.callbackUrl, paymentRequest = __rest(_a, ["callbackUrl"]);
        return validate_1.validateRequestToPay(paymentRequest).then(function () {
            var referenceId = uuid_1.v4();
            return _this.client
                .post("/collection/v1_0/requesttopay", paymentRequest, {
                headers: __assign({ "X-Reference-Id": referenceId }, (callbackUrl ? { "X-Callback-Url": callbackUrl } : {}))
            })
                .then(function () { return referenceId; });
        });
    };
    /**
     * This method is used to retrieve transaction information. You can invoke it
     * at intervals until your transaction fails or succeeds.
     *
     * If the transaction has failed, it will throw an appropriate error. The error will be a subclass
     * of `MtnMoMoError`. Check [`src/error.ts`](https://github.com/sparkplug/momoapi-node/blob/master/src/errors.ts)
     * for the various errors that can be thrown
     *
     * @param referenceId the value returned from `requestToPay`
     */
    Collections.prototype.getTransaction = function (referenceId) {
        return this.client
            .get("/collection/v1_0/requesttopay/" + referenceId)
            .then(function (response) { return response.data; })
            .then(function (transaction) {
            if (transaction.status === common_1.TransactionStatus.FAILED) {
                return Promise.reject(errors_1.getTransactionError(transaction));
            }
            return Promise.resolve(transaction);
        });
    };
    /**
     * Get the balance of the account.
     */
    Collections.prototype.getBalance = function () {
        return this.client
            .get("/collection/v1_0/account/balance")
            .then(function (response) { return response.data; });
    };
    /**
     * This method is used to check if an account holder is registered and active in the system.
     *
     * @param id Specifies the type of the party ID. Allowed values [msisdn, email, party_code].
     *   accountHolderId should explicitly be in small letters.
     *
     * @param type The party number. Validated according to the party ID type (case Sensitive).
     *   msisdn - Mobile Number validated according to ITU-T E.164. Validated with IsMSISDN
     *   email - Validated to be a valid e-mail format. Validated with IsEmail
     *   party_code - UUID of the party. Validated with IsUuid
     */
    Collections.prototype.isPayerActive = function (id, type) {
        if (type === void 0) { type = common_1.PartyIdType.MSISDN; }
        return this.client
            .get("/collection/v1_0/accountholder/" + type + "/" + id + "/active")
            .then(function (response) { return response.data; });
    };
    return Collections;
}());
exports.default = Collections;
