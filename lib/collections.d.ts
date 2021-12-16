import { AxiosInstance } from "axios";
import { Balance, FailureReason, Party, PartyIdType, TransactionStatus } from "./common";
export interface PaymentRequest {
    /**
     * Amount that will be debited from the payer account
     */
    amount: string;
    /**
     * ISO4217 Currency
     */
    currency: string;
    /**
     * External id is used as a reference to the transaction.
     * External id is used for reconciliation.
     * The external id will be included in transaction history report.
     * External id is not required to be unique.
     */
    externalId?: string;
    /**
     * Party identifies a account holder in the wallet platform.
     * Party consists of two parameters, type and partyId.
     * Each type have its own validation of the partyId
     *   - MSISDN - Mobile Number validated according to ITU-T E.164. Validated with IsMSISDN
     *   - EMAIL - Validated to be a valid e-mail format. Validated with IsEmail
     *   - PARTY_CODE - UUID of the party. Validated with IsUuid
     */
    payer: Party;
    /**
     * Message that will be written in the payer transaction history message field.
     */
    payerMessage?: string;
    /**
     * Message that will be written in the payee transaction history note field.
     */
    payeeNote?: string;
    /**
     * URL to the server where the callback should be sent.
     */
    callbackUrl?: string;
}
export interface Payment {
    /**
     * Financial transactionIdd from mobile money manager.
     * Used to connect to the specific financial transaction made in the account
     */
    financialTransactionId: string;
    /**
     * External id provided in the creation of the requestToPay transaction
     */
    externalId: string;
    /**
     * Amount that will be debited from the payer account.
     */
    amount: string;
    /**
     * ISO4217 Currency
     */
    currency: string;
    /**
     * Party identifies a account holder in the wallet platform.
     * Party consists of two parameters, type and partyId.
     * Each type have its own validation of the partyId
     *   - MSISDN - Mobile Number validated according to ITU-T E.164. Validated with IsMSISDN
     *   - EMAIL - Validated to be a valid e-mail format. Validated with IsEmail
     *   - PARTY_CODE - UUID of the party. Validated with IsUuid
     */
    payer: Party;
    /**
     * Message that will be written in the payer transaction history message field.
     */
    payerMessage: string;
    /**
     * Message that will be written in the payee transaction history note field.
     */
    payeeNote: string;
    reason?: FailureReason;
    status: TransactionStatus;
}
export default class Collections {
    private client;
    constructor(client: AxiosInstance);
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
    requestToPay({ callbackUrl, ...paymentRequest }: PaymentRequest): Promise<string>;
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
    getTransaction(referenceId: string): Promise<Payment>;
    /**
     * Get the balance of the account.
     */
    getBalance(): Promise<Balance>;
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
    isPayerActive(id: string, type?: PartyIdType): Promise<string>;
}
