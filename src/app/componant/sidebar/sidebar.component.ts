import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
// import { add } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  @ViewChild('second' , {static:false}) secondhand:ElementRef;
  @ViewChild('minute' , {static:false}) minutehand:ElementRef;
  @ViewChild('hour' , {static:false}) hourhand:ElementRef;
  


  months=['Jan','Feb','March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
  currentDate = new Date().getDate();
  currentMonth ;
  getHr;
  getMinute;
  getSecond;
  day;
  timeZone = new Date().getHours();
  currentYear = new Date().getFullYear();
  constructor() { 
    
 

  }
  Hour = [0,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];
  Day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
 
  ngOnInit(): void {
   
    setInterval(()=>{      
      const date=new Date(); 
      this.clockTime(date);
this.day = this.Day[new Date().getDay()];
      this.currentMonth = this.months[new Date().getMonth()];
      this.getHr= this.Hour[this.timeZone]<10? '0' + this.Hour[this.timeZone]: this.Hour[this.timeZone] ;
      this.getMinute = new Date().getMinutes()<10? '0' + new Date().getMinutes() : new Date().getMinutes();
      this.getSecond = new Date().getSeconds()<10? '0' + new Date().getSeconds() : new Date().getSeconds();
      this.timeZone>=12?document.getElementById("AMPM").innerText = "PM":document.getElementById("AMPM").innerText = "AM";

    },1000);
  }
  // ngAfterViewInit():void {
   
  // }

  clockTime(date){
this.secondhand.nativeElement.style.transform = 'rotate('+ date.getSeconds() * 6 + 'deg )';
this.minutehand.nativeElement.style.transform = 'rotate('+ (date.getMinutes() *6 + date.getSeconds() * 0.1 ) + 'deg )';
this.hourhand.nativeElement.style.transform = 'rotate('+ (date.getHours() * 30 + date.getMinutes() *0.5) + 'deg )';



  }

}

