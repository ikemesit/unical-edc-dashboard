import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Transaction } from '../../interfaces/transaction.interface';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    transactions: Transaction[] = [];

    constructor() {}

    getTransactions(count = 1): Transaction[] {
        for (let i = 0; i < count; i++) {
            const randomTransaction = {
                serialNo: faker.datatype.number(),
                name: faker.name.fullName(),
                department: faker.helpers.arrayElement([
                    'Economics',
                    'Pharmacy',
                    'Physics',
                    'Food Science',
                ]),
                matricNo: faker.datatype.number(),
                paymentCode: faker.datatype.uuid(),
                item: faker.commerce.productName(),
                amount: faker.datatype.number(),
                portalCharge: faker.datatype.number(),
                paymentGatewayFee: faker.datatype.number(),
                remittanceAmount: faker.datatype.number(),
                dateTime: faker.date.past(),
                refId: `${faker.lorem.word(3)}${faker.datatype.number({
                    min: 1000,
                    max: 99999,
                })}`,
            };

            this.transactions.push(randomTransaction);
        }

        return this.transactions;
    }
}
