import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public title: string = 'Example';

  public links: {name: string, href: string}[] = [
    {name: 'Home', href: 'home'},
    {name: 'Feature', href: '#'},
    {name: 'Product', href: '#'},
    {name: 'Support', href: '#'}
  ]

  public menuLink: {name: string, href: string} = {name: 'Discover', href: '#'};

  public burgerActive: boolean = false;

  public scrolling: boolean = false;

  ngOnInit(): void {
    // Change Header Background on Scrolling
    window.addEventListener("scroll", () => {
      if (window?.scrollY >= 35) {
        this.scrolling = true;
      } else {
        this.scrolling = false;
      }
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", () => {});
  }
}
