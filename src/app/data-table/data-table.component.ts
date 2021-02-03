import { Component, OnInit } from '@angular/core';

interface PeriodicElement {
  CustomerName: string;
  Truck: string;
  Spec: string;
  // symbol: string;

  MixerSize : any;

  TagAxle : string;
  LastChanged:string;
  WB:number;
  CA:number;
  Boggle:number;
  Front:number;
  Rear:number;
  PusherAxle:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  {CustomerName: 'someswararao', Truck: 'CV55', Spec: 'ct', MixerSize: 11,TagAxle:'Bridge Master',LastChanged:'22/33/1995',WB:28.1,CA:56.4 ,Boggle:55 ,Front:4444, Rear:89889, PusherAxle:'Tendum Steel'},
  
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['CustomerName', 'Truck', 'Spec', 'symbol', ' MixerSize', '  TagAxle', 'LastChanged','WB','CA','Boggle','Front','Rear','PusherAxle'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }
}

