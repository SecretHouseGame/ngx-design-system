import { Component, Input, OnInit } from '@angular/core';
import { TableColumn, TableConfig } from '../../interfaces/table';

@Component({
  selector: 'sh-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	@Input() config?: TableConfig;
	@Input() columns: TableColumn[] = [];
	@Input() rows: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
