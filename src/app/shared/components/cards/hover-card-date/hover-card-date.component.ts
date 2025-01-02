import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-card-date',
  standalone: true,
  imports: [],
  templateUrl: './hover-card-date.component.html',
  styleUrl: './hover-card-date.component.scss'
})
export class HoverCardDateComponent {
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() date!: string;
  @Input() backgroundColor?: string;
  @Input() index!: number;
  @Input() click?: (index: number) => void;
}
