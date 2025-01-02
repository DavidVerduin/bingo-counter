import { Component } from '@angular/core';
import { HoverCardComponent } from '../../shared/components/cards/hover-card/hover-card.component';
import { HoverCardDateComponent } from '../../shared/components/cards/hover-card-date/hover-card-date.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HoverCardComponent,
    HoverCardDateComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public cardList: {title: string, description: string, imgUrl: string, extra?: string, link?: {text: string, ref: string}}[] = [
    {title: 'Cat 1', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=1'},
    {title: 'Cat 2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=2'},
    {title: 'Cat 3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=3'},
    {title: 'Cat 4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=4'},
    {title: 'Cat 5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=5'},
    {title: 'Cat 6', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=6'},
    {title: 'Cat 7', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=7'},
    {title: 'Cat 8', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=8'},
    {title: 'Cat 9', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=9'},
    {title: 'Cat 10', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=10'},
    {title: 'Cat 11', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=11'},
    {title: 'Cat 12', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=12'},
    {title: 'Cat 13', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=13'},
    {title: 'Cat 14', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', imgUrl: 'https://cataas.com/cat?some=14'},
  ];

  public cardDateList: {title: string, subTitle: string, date: string, backgroundColor?: string, click?: (index: number) => void}[] = [
    {title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', subTitle: 'Cat', date: '01/09/2024', click: console.log}
  ];
}
