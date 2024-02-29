/* eslint-disable no-empty */
import { OnChanges, SimpleChanges } from '@angular/core';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Allowancemodel } from 'src/Model/AllowanceModel';
import { Requestpaging } from 'src/Model/other/requestpaging';
import { AllowanceServiceService } from 'src/Services/Allowance/AllowanceService.service';
import { NotificationComponent } from 'src/app/theme/shared/components/Notification/Notification.component';
import { PagingnavComponent } from 'src/app/theme/shared/components/pagingnav/pagingnav.component';


@Component({
  selector: 'app-allowance-list',
  templateUrl: './allowance-list.component.html',
  styleUrls: ['./allowance-list.component.scss']
})



export class AllowanceListComponent implements OnInit,OnChanges  {
  constructor(private service : AllowanceServiceService, private router : Router){}
  datas:Allowancemodel[];
  messagerequest:string=''
  searchText : any
  pagecount : number = 1
  ShowFormAdd : boolean = false
  ShowFormUpdate : boolean = false
  ShowForm : boolean = false
  selectedID : string
  spinner : boolean = false

  paging : Requestpaging={
    keyword : '',
    pageindex : 1,
    pagesize : 10

  }

  @ViewChild(PagingnavComponent) child: PagingnavComponent;
  @ViewChild(NotificationComponent) childnoti: NotificationComponent;

  ngOnInit(): void{
    this.GetPaging();


  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['datas']){

    }
  }

  ClicktoShowFormAdd(): void{
    this.ShowFormAdd = !this.ShowFormAdd
    this.ShowForm =!this.ShowForm
  }

  ButtonClickToUpdate(id : string){
    this.ShowFormUpdate =! this.ShowFormUpdate
    this.ShowForm =!this.ShowForm
    this.selectedID = id

  }



  OnSuccess(){
    this.ShowFormUpdate = false
    this.ShowFormAdd = false
  }


  GetAll(){
    this.service.getAllowance().subscribe((res)=>{
      this.datas = res

    })
  }

  GetPaging(){
    this.service.getAllowancePaging(this.paging).subscribe((res)=>{
        setTimeout(() => {
          this.datas = res.items
          this.pagecount = res.pageCount
        }, 2000);
        setTimeout(() => {
          this.spinner = true
        }, 2000);

    })
  }


  Delete(event:any,id : string){
    if(confirm('Delete this data ?')){
      this.service.DeleteAllowance(id).subscribe((res)=>{
        if(res){
          alert('Delete Success');
          this.GetPaging();
        } else{
          alert('Fail')
          this.GetPaging();
        }
      })
    }
  }

  pagechange(pagenumber : number) : void{
    this.paging.pageindex = pagenumber
    this.GetPaging()
  }

  buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '5',
    width: '50px', // Đặt chiều rộng mong muốn
    height: 'auto', // Đặt chiều cao tự động hoặc bạn có thể đặt giá trị cụ thể
  };


}