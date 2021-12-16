"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var common_1 = require("./common");
function validateRequestToPay(paymentRequest) {
    var _a = paymentRequest || {}, amount = _a.amount, currency = _a.currency, payer = _a.payer;
    return Promise.resolve().then(function () {
        assert_1.strictEqual(isTruthy(amount), true, "amount is required");
        assert_1.strictEqual(isNumeric(amount), true, "amount must be a number");
        assert_1.strictEqual(isTruthy(currency), true, "currency is required");
        assert_1.strictEqual(isTruthy(payer), true, "payer is required");
        assert_1.strictEqual(isTruthy(payer.partyId), true, "payer.partyId is required");
        assert_1.strictEqual(isTruthy(payer.partyIdType), true, "payer.partyIdType is required");
        assert_1.strictEqual(isString(currency), true, "amount must be a string");
    });
}
exports.validateRequestToPay = validateRequestToPay;
function validateTransfer(payoutRequest) {
    var _a = payoutRequest || {}, amount = _a.amount, currency = _a.currency, payee = _a.payee, referenceId = _a.referenceId;
    return Promise.resolve().then(function () {
        assert_1.strictEqual(isTruthy(referenceId), true, "referenceId is required");
        assert_1.strictEqual(isUuid4(referenceId), true, "referenceId must be a valid uuid v4");
        assert_1.strictEqual(isTruthy(amount), true, "amount is required");
        assert_1.strictEqual(isNumeric(amount), true, "amount must be a number");
        assert_1.strictEqual(isTruthy(currency), true, "currency is required");
        assert_1.strictEqual(isTruthy(payee), true, "payee is required");
        assert_1.strictEqual(isTruthy(payee.partyId), true, "payee.partyId is required");
        assert_1.strictEqual(isTruthy(payee.partyIdType), true, "payee.partyIdType is required");
        assert_1.strictEqual(isString(currency), true, "amount must be a string");
    });
}
exports.validateTransfer = validateTransfer;
function validateGlobalConfig(config) {
    var callbackHost = config.callbackHost, baseUrl = config.baseUrl, environment = config.environment;
    assert_1.strictEqual(isTruthy(callbackHost), true, "callbackHost is required");
    if (environment && environment !== common_1.Environment.SANDBOX) {
        assert_1.strictEqual(isTruthy(baseUrl), true, "baseUrl is required if environment is not sandbox");
        assert_1.strictEqual(isString(baseUrl), true, "baseUrl must be a string");
    }
}
exports.validateGlobalConfig = validateGlobalConfig;
function validateProductConfig(config) {
    validateSubscriptionConfig(config);
    validateUserConfig(config);
}
exports.validateProductConfig = validateProductConfig;
function validateSubscriptionConfig(config) {
    var primaryKey = config.primaryKey;
    assert_1.strictEqual(isTruthy(primaryKey), true, "primaryKey is required");
    assert_1.strictEqual(isString(primaryKey), true, "primaryKey must be a string");
}
exports.validateSubscriptionConfig = validateSubscriptionConfig;
function validateUserConfig(_a) {
    var userId = _a.userId, userSecret = _a.userSecret;
    assert_1.strictEqual(isTruthy(userId), true, "userId is required");
    assert_1.strictEqual(isString(userId), true, "userId must be a string");
    assert_1.strictEqual(isTruthy(userSecret), true, "userSecret is required");
    assert_1.strictEqual(isString(userSecret), true, "userSecret must be a string");
    assert_1.strictEqual(isUuid4(userId), true, "userId must be a valid uuid v4");
}
exports.validateUserConfig = validateUserConfig;
function isNumeric(value) {
    return !isNaN(parseInt(value, 10));
}
function isTruthy(value) {
    return !!value;
}
function isString(value) {
    return typeof value === "string";
}
function isUuid4(value) {
    return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(value);
}
