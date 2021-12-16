"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("./common");
var MtnMoMoError = /** @class */ (function (_super) {
    __extends(MtnMoMoError, _super);
    function MtnMoMoError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return MtnMoMoError;
}(Error));
exports.MtnMoMoError = MtnMoMoError;
var ApprovalRejectedError = /** @class */ (function (_super) {
    __extends(ApprovalRejectedError, _super);
    function ApprovalRejectedError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ApprovalRejectedError";
        return _this;
    }
    return ApprovalRejectedError;
}(MtnMoMoError));
exports.ApprovalRejectedError = ApprovalRejectedError;
var ExpiredError = /** @class */ (function (_super) {
    __extends(ExpiredError, _super);
    function ExpiredError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ExpiredError";
        return _this;
    }
    return ExpiredError;
}(MtnMoMoError));
exports.ExpiredError = ExpiredError;
var InternalProcessingError = /** @class */ (function (_super) {
    __extends(InternalProcessingError, _super);
    function InternalProcessingError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "InternalProcessingError";
        return _this;
    }
    return InternalProcessingError;
}(MtnMoMoError));
exports.InternalProcessingError = InternalProcessingError;
var InvalidCallbackUrlHostError = /** @class */ (function (_super) {
    __extends(InvalidCallbackUrlHostError, _super);
    function InvalidCallbackUrlHostError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "InvalidCallbackUrlHostError";
        return _this;
    }
    return InvalidCallbackUrlHostError;
}(MtnMoMoError));
exports.InvalidCallbackUrlHostError = InvalidCallbackUrlHostError;
var InvalidCurrencyError = /** @class */ (function (_super) {
    __extends(InvalidCurrencyError, _super);
    function InvalidCurrencyError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "InvalidCurrencyError";
        return _this;
    }
    return InvalidCurrencyError;
}(MtnMoMoError));
exports.InvalidCurrencyError = InvalidCurrencyError;
var NotAllowedTargetEnvironmentError = /** @class */ (function (_super) {
    __extends(NotAllowedTargetEnvironmentError, _super);
    function NotAllowedTargetEnvironmentError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "NotAllowedTargetEnvironmentError";
        return _this;
    }
    return NotAllowedTargetEnvironmentError;
}(MtnMoMoError));
exports.NotAllowedTargetEnvironmentError = NotAllowedTargetEnvironmentError;
var NotAllowedError = /** @class */ (function (_super) {
    __extends(NotAllowedError, _super);
    function NotAllowedError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "NotAllowedError";
        return _this;
    }
    return NotAllowedError;
}(MtnMoMoError));
exports.NotAllowedError = NotAllowedError;
var NotEnoughFundsError = /** @class */ (function (_super) {
    __extends(NotEnoughFundsError, _super);
    function NotEnoughFundsError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "NotEnoughFundsError";
        return _this;
    }
    return NotEnoughFundsError;
}(MtnMoMoError));
exports.NotEnoughFundsError = NotEnoughFundsError;
var PayeeNotFoundError = /** @class */ (function (_super) {
    __extends(PayeeNotFoundError, _super);
    function PayeeNotFoundError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "PayeeNotFoundError";
        return _this;
    }
    return PayeeNotFoundError;
}(MtnMoMoError));
exports.PayeeNotFoundError = PayeeNotFoundError;
var PayeeNotAllowedToReceiveError = /** @class */ (function (_super) {
    __extends(PayeeNotAllowedToReceiveError, _super);
    function PayeeNotAllowedToReceiveError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "PayeeNotAllowedToReceiveError";
        return _this;
    }
    return PayeeNotAllowedToReceiveError;
}(MtnMoMoError));
exports.PayeeNotAllowedToReceiveError = PayeeNotAllowedToReceiveError;
var PayerLimitReachedError = /** @class */ (function (_super) {
    __extends(PayerLimitReachedError, _super);
    function PayerLimitReachedError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "PayerLimitReachedError";
        return _this;
    }
    return PayerLimitReachedError;
}(MtnMoMoError));
exports.PayerLimitReachedError = PayerLimitReachedError;
var PayerNotFoundError = /** @class */ (function (_super) {
    __extends(PayerNotFoundError, _super);
    function PayerNotFoundError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "PayerNotFoundError";
        return _this;
    }
    return PayerNotFoundError;
}(MtnMoMoError));
exports.PayerNotFoundError = PayerNotFoundError;
var PaymentNotApprovedError = /** @class */ (function (_super) {
    __extends(PaymentNotApprovedError, _super);
    function PaymentNotApprovedError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "PaymentNotApprovedError";
        return _this;
    }
    return PaymentNotApprovedError;
}(MtnMoMoError));
exports.PaymentNotApprovedError = PaymentNotApprovedError;
var ResourceAlreadyExistError = /** @class */ (function (_super) {
    __extends(ResourceAlreadyExistError, _super);
    function ResourceAlreadyExistError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ResourceAlreadyExistError";
        return _this;
    }
    return ResourceAlreadyExistError;
}(MtnMoMoError));
exports.ResourceAlreadyExistError = ResourceAlreadyExistError;
var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ResourceNotFoundError";
        return _this;
    }
    return ResourceNotFoundError;
}(MtnMoMoError));
exports.ResourceNotFoundError = ResourceNotFoundError;
var ServiceUnavailableError = /** @class */ (function (_super) {
    __extends(ServiceUnavailableError, _super);
    function ServiceUnavailableError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "ServiceUnavailableError";
        return _this;
    }
    return ServiceUnavailableError;
}(MtnMoMoError));
exports.ServiceUnavailableError = ServiceUnavailableError;
var TransactionCancelledError = /** @class */ (function (_super) {
    __extends(TransactionCancelledError, _super);
    function TransactionCancelledError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "TransactionCancelledError";
        return _this;
    }
    return TransactionCancelledError;
}(MtnMoMoError));
exports.TransactionCancelledError = TransactionCancelledError;
var UnspecifiedError = /** @class */ (function (_super) {
    __extends(UnspecifiedError, _super);
    function UnspecifiedError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "UnspecifiedError";
        return _this;
    }
    return UnspecifiedError;
}(MtnMoMoError));
exports.UnspecifiedError = UnspecifiedError;
function handleError(error) {
    if (!error.response) {
        return error;
    }
    var _a = error.response.data || {}, code = _a.code, message = _a.message;
    return getError(code, message);
}
exports.handleError = handleError;
function getError(code, message) {
    if (code === common_1.FailureReason.APPROVAL_REJECTED) {
        return new ApprovalRejectedError(message);
    }
    if (code === common_1.FailureReason.EXPIRED) {
        return new ExpiredError(message);
    }
    if (code === common_1.FailureReason.INTERNAL_PROCESSING_ERROR) {
        return new InternalProcessingError(message);
    }
    if (code === common_1.FailureReason.INVALID_CALLBACK_URL_HOST) {
        return new InvalidCallbackUrlHostError(message);
    }
    if (code === common_1.FailureReason.INVALID_CURRENCY) {
        return new InvalidCurrencyError(message);
    }
    if (code === common_1.FailureReason.NOT_ALLOWED) {
        return new NotAllowedError(message);
    }
    if (code === common_1.FailureReason.NOT_ALLOWED_TARGET_ENVIRONMENT) {
        return new NotAllowedTargetEnvironmentError(message);
    }
    if (code === common_1.FailureReason.NOT_ENOUGH_FUNDS) {
        return new NotEnoughFundsError(message);
    }
    if (code === common_1.FailureReason.PAYEE_NOT_FOUND) {
        return new PayeeNotFoundError(message);
    }
    if (code === common_1.FailureReason.PAYEE_NOT_ALLOWED_TO_RECEIVE) {
        return new PayeeNotAllowedToReceiveError(message);
    }
    if (code === common_1.FailureReason.PAYER_LIMIT_REACHED) {
        return new PayerLimitReachedError(message);
    }
    if (code === common_1.FailureReason.PAYER_NOT_FOUND) {
        return new PayerNotFoundError(message);
    }
    if (code === common_1.FailureReason.PAYMENT_NOT_APPROVED) {
        return new PaymentNotApprovedError(message);
    }
    if (code === common_1.FailureReason.RESOURCE_ALREADY_EXIST) {
        return new ResourceAlreadyExistError(message);
    }
    if (code === common_1.FailureReason.RESOURCE_NOT_FOUND) {
        return new ResourceNotFoundError(message);
    }
    if (code === common_1.FailureReason.SERVICE_UNAVAILABLE) {
        return new ServiceUnavailableError(message);
    }
    if (code === common_1.FailureReason.TRANSACTION_CANCELED) {
        return new TransactionCancelledError(message);
    }
    return new UnspecifiedError(message);
}
exports.getError = getError;
function getTransactionError(transaction) {
    var error = getError(transaction.reason);
    error.transaction = transaction;
    return error;
}
exports.getTransactionError = getTransactionError;
