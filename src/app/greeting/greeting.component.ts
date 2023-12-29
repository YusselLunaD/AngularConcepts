import {Component, OnInit} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NameListService} from "../name-list.service";
import {HighlightDirective} from "../highlight.directive";

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle,
    FormsModule,
    HighlightDirective
  ],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent implements OnInit{
  names: string[] =[];
  constructor(private nameListService: NameListService) {
  }

  ngOnInit():void{
    this.names = this.nameListService.getNames();
  }

  protected readonly name = name;
}
