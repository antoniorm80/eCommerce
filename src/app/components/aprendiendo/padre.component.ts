import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadreComponent implements AfterViewInit{

  @Input() label!: string;

  @Output() newItemEvent = new EventEmitter<string>();
  
  @ViewChild('newItem') myInput!: ElementRef;

  ngAfterViewInit(): void {
    this.myInput.nativeElement.focus();
  }



  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
    this.myInput.nativeElement.value = "";
    this.myInput.nativeElement.focus();
  }
}
