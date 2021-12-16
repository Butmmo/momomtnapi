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
var Disbursements = /** @class */ (function () {
    function Disbursements(client) {
        this.client = client;
    }
    /**
     * Transfer operation is used to transfer an amount from the owner’s
     * account to a payee account.
     * Status of the transaction can be validated by using the
     *
     * @param paymentRequest
     */
    Disbursements.prototype.transfer = function (_a) {
        var _this = this;
        var callbackUrl = _a.callbackUrl, _b = _a.referenceId, referenceId = _b === void 0 ? uuid_1.v4() : _b, payoutRequest = __rest(_a, ["callbackUrl", "referenceId"]);
        return validate_1.validateTransfer(__assign({ referenceId: referenceId }, payoutRequest)).then(function () {
            return _this.client
                .post("/disbursement/v1_0/transfer", payoutRequest, {
                headers: __assign({ "X-Reference-Id": referenceId }, (callbackUrl ? { "X-Callback-Url": callbackUrl } : {}))
            })
                .then(function () { return referenceId; });
        });
    };
    /**
     * This method is used to retrieve the transaction. You can invoke this method
     * to at intervals until your transaction fails or succeeds.
     *
     * If the transaction has failed, it will throw an appropriate error. The error will be a subclass
     * of `MtnMoMoError`. Check [`src/error.ts`](https://github.com/sparkplug/momoapi-node/blob/master/src/errors.ts)
     * for the various errors that can be thrown
     *
     * @param referenceId the value returned from `transfer`
     */
    Disbursements.prototype.getTransaction = function (referenceId) {
        return this.client
            .get("/disbursement/v1_0/transfer/" + referenceId)
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
    Disbursements.prototype.getBalance = function () {
        return this.client
            .get("/disbursement/v1_0/account/balance")
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
    Disbursements.prototype.isPayerActive = function (id, type) {
        if (type === void 0) { type = common_1.PartyIdType.MSISDN; }
        return this.client
            .get("/disbursement/v1_0/accountholder/" + String(type).toLowerCase() + "/" + id + "/active")
            .then(function (response) { return response.data; })
            .then(function (data) { return data.result ? data.result : false; });
    };
    return Disbursements;
}());
exports.default = Disbursements;
