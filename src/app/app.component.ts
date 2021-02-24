import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { distinctUntilChanged, filter, map, pairwise, takeUntil, throttleTime } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { fromEvent, Subject } from 'rxjs';

export enum VisibilityState { Visible = 'visible', Hidden = 'hidden' }
export enum Direction { None = 'None', Up = 'Up', Down = 'Down' }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state(VisibilityState.Visible, style({ display: 'translateY(0)' })),
      state(VisibilityState.Hidden, style({ transform: 'translateY(-20rem)' })), // adjust this to the height of your header
      transition(`${VisibilityState.Visible} => ${VisibilityState.Hidden}`, animate('250ms')),
      transition(`${VisibilityState.Hidden} => ${VisibilityState.Visible}`, animate('250ms'))
    ])
  ]
})
export class AppComponent implements AfterViewInit, OnDestroy{
  previousUrl: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  isHeader1Visible = VisibilityState.Visible;
  isHeader2Visible = VisibilityState.Hidden;
  slideHeader2InAtPosition = 50;
  @ViewChild('sidebar') sidebar: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (event.url === '/') {
        localStorage.removeItem('token');
      }
   });
  }
  @HostListener('document:click', ['$event'])
  documentClick(event): void {
    try {
      const classes = event.target.attributes.class.value.toString().split(' ');
      if (classes.indexOf('categories-menu') === -1) {
        const openElements: NodeListOf<Element> = document.querySelectorAll('.menu-open');
        if (openElements) {
          Array.from(openElements, el => {el.classList.remove('menu-open'); });
        }
        }
    } catch (error) {
      const openElements: NodeListOf<Element> = document.querySelectorAll('.menu-open');
      if (openElements) {
        Array.from(openElements, el => {el.classList.remove('menu-open'); });
      }
    }

  }

  ngAfterViewInit(): void {

    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 > this.slideHeader2InAtPosition ? Direction.Down :  Direction.Up)),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    );

    // subscribe to the UP / DOWN scroll direction stream and set the header state accordingly
    scroll$.subscribe(
      dir => {
      if (dir === Direction.Down) { // scrolling down
        this.isHeader1Visible = VisibilityState.Hidden;
        this.isHeader2Visible = VisibilityState.Visible;
      } else { // scrolling up
        this.isHeader1Visible = VisibilityState.Visible;
        this.isHeader2Visible = VisibilityState.Hidden;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  openSidebar(): void {
    this.renderer.addClass(this.sidebar.nativeElement, 'show');
  }
  closeSidebar(): void {
    this.renderer.removeClass(this.sidebar.nativeElement, 'show');
  }
}
