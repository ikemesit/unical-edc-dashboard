export interface Transaction {
    serialNo: number;
    name: string;
    department: string;
    matricNo: number;
    paymentCode: string;
    item: string;
    amount: number;
    portalCharge: number;
    paymentGatewayFee: number;
    remittanceAmount: number;
    dateTime: Date;
    refId: string;
}
