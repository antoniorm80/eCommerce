import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnChanges,  OnInit, OnDestroy  {
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Changes ->', changes);
  }
  ngOnInit(): void {
    // console.log('OnInit');
  }
  ngOnDestroy(): void {
    // console.log('OnDestroy');
  }

}
