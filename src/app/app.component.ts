import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { TableData } from './table-data.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
    export class AppComponent implements  OnInit  {
      data: TableData[] = [ { from: new Date(), to: new Date() } ];
      dataSource = new BehaviorSubject<AbstractControl[]>([]);
      displayColumns = ['from', 'to'];
      rows: FormArray = this.fb.array([]);
      form: FormGroup = this.fb.group({ 'dates': this.rows });

      constructor(private fb: FormBuilder) { }

      ngOnInit() {
        this.data.forEach((d: TableData) => this.addRow(d, false));
        this.updateView();
      }

      emptyTable() {
        while (this.rows.length !== 0) {
          this.rows.removeAt(0);
        }
      }

      addRow(d?: TableData, noUpdate?: boolean) {
        const row = this.fb.group({
          'from'   : [d && d.from ? d.from : null, []],
          'to'     : [d && d.to   ? d.to   : null, []]
        });
        this.rows.push(row);
        if (!noUpdate) { this.updateView(); }
      }

      updateView() {
        this.dataSource.next(this.rows.controls);
      }
    }
