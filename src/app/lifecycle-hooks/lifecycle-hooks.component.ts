import { 
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() testInput: string = '';

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges() {
    console.log('👉 ngOnChanges called (when @Input value changes)');
  }

  ngOnInit() {
    console.log('👉 ngOnInit called (once after first ngOnChanges)');
  }

  ngDoCheck() {
    console.log('👉 ngDoCheck called (runs on every change detection)');
  }

  ngAfterContentInit() {
    console.log('👉 ngAfterContentInit called (after <ng-content> initialized)');
  }

  ngAfterContentChecked() {
    console.log('👉 ngAfterContentChecked called (after <ng-content> checked)');
  }

  ngAfterViewInit() {
    console.log('👉 ngAfterViewInit called (after component view initialized)');
  }

  ngAfterViewChecked() {
    console.log('👉 ngAfterViewChecked called (after component view checked)');
  }

  ngOnDestroy() {
    console.log('👉 ngOnDestroy called (just before component destroyed)');
  }
}
