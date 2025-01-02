import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-card',
  standalone: true,
  imports: [],
  templateUrl: './hover-card.component.html',
  styleUrl: './hover-card.component.scss'
})
export class HoverCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() link?: {text: string, ref: string};
  @Input() extra?: string;
  @Input() imgUrl!: string;
}
