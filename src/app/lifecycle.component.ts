import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, Input, ViewChild, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParaghraph>{{bindable}}</p>
    <!--<p>{{boundParaghraph.textContent}}</p>-->
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input() bindable = 1000;
  @ViewChild('boundParaghraph')
  boundParaghraph: HTMLElement;

  @ContentChild('boundContent')
  boundContent: HTMLElement;

  ngOnInit() {
    this.log('ngOnInit');
    console.log(this.boundContent);
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
    console.log(this.boundContent);
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
    console.log(this.boundParaghraph);
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');

  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
