import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Message} from '../../models/Message';
import {MatPaginator} from '@angular/material/paginator';
import {BaseAngularComponent} from '../base-angular/base-angular.component';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent<T> extends BaseAngularComponent implements OnInit {
  @Input()
  data: T[] = [];

  @Input()
  displayedColumns: string[] = ['id'];

  dataSource = new MatTableDataSource<T>(this.data);

  @ViewChild('paginator_01', {static: true}) paginator: MatPaginator;

  constructor(protected appService: AppService) {
    super(appService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.dataSource = new MatTableDataSource<T>(this.data);
    this.dataSource.paginator = this.paginator;
  }

}
