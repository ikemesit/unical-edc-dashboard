import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from '../../interfaces/transaction.interface';
import { TransactionService } from './transaction.service';

const ELEMENT_DATA: Transaction[] = [
    {
        serialNo: 1,
        name: 'Sara Ukpong',
        department: 'Economics',
        matricNo: 21432,
        paymentCode: 'test code',
        amount: 40.32,
        item: 'school fees',
        portalCharge: 5.0,
        paymentGatewayFee: 10.0,
        remittanceAmount: 10.0,
        refId: 'akfd34',
        dateTime: new Date(),
    },
];

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = [
        // 'serialNo',
        'name',
        'department',
        'matricNo',
        'refId',
        // 'paymentCode',
        'item',
        'dateTime',
    ];
    dataSource: MatTableDataSource<Transaction>;

    isDrawerOpen = false;

    constructor(
        private dialogService: MatDialog,
        private transactionService: TransactionService
    ) {}

    ngOnInit(): void {
        const data = this.transactionService.getTransactions(100);
        this.dataSource = new MatTableDataSource(data);
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event): void {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    editAcademicSession(): void {}
}
