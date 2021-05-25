import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileData= {path:'',fileName:'',modelName:'',uploadDateTime:'',data:''};
  displayedColumns = ['path', 'fileName', 'modelName', 'uploadDateTime','data'];
  dataSource: MatTableDataSource<UploadData>;
  uploadData: Array<UploadData> = new Array;
  fileInfo:any
  fileName = '';

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  

  constructor() { 
  //   this.uploadData.push({path:'asdf',fileName:'asdf', uploadDateTime:'23 May 2021', modelName:'fgsdf',data:'gfdgsh'});
    this.dataSource = new MatTableDataSource(this.uploadData);
  }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  getFileInfo(e: any){
    console.log(e.target.value);
    this.fileData.path = e.target.value;
    this.fileData.fileName = e.target.files[0].name;
    this.fileData.uploadDateTime = new Date().toLocaleString();
    this.fileData.data = 'WillDo';
    this.fileName = this.fileData.fileName
    // console.log(this.fileName);

    

  }

  upload(){
    let deepCopyFileData = JSON.parse(JSON.stringify(this.fileData));
    this.uploadData.push(deepCopyFileData);
    this.dataSource =  new MatTableDataSource(this.uploadData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(e: any) {
    let filterValue = e.target!.value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource!.filter = filterValue;
  }


}


export interface UploadData {
  path: string;
  fileName: string;
  modelName: string;
  uploadDateTime: string;
  data: string;
}