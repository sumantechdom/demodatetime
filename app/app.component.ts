import { DateService } from './date.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DateTime';
  today = null;
  currentTime = null;
  constructor(private dateService: DateService){}

  ngOnInit(){
    this.today = this.dateService.date.getDate()+'-'+(this.dateService.date.getMonth()+1)+'-'+this.dateService.date.getFullYear();
    console.log(this.today);
    this.currentTime=this.dateService.date.getHours()+':'+this.dateService.date.getMinutes()+':'+this.dateService.date.getSeconds();
  }
}
