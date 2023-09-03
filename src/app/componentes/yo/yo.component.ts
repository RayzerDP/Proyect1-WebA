import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.css']
})
export class YoComponent implements OnInit{
  public title: string;
  public subtitle: string;

  constructor(){
    this.title = "Diego Pablo Peña Villarroel";
    this.subtitle = "Ingeniero Informatico";
  }

  ngOnInit(): void {
    
  }

}
