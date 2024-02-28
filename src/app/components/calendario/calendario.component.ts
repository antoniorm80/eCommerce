import { Component, ElementRef, signal, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import { INITIAL_EVENTS, createEventId } from './eventos';
import * as confetti from 'canvas-confetti';
import { en } from '@fullcalendar/core/internal-common';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit{
  public eventos: any[];
  public opciones: any;
  visible4: boolean = false;
  ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
  cvc: any;
  fecha: string;
  titleEvento: string;
  public usuario: string;

  expiration: any;

  clicked = false;
  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    locale: "es",
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });
  
  currentEvents = signal<EventApi[]>([]);
  

  constructor(private renderer2: Renderer2, private elementRef: ElementRef, private changeDetector: ChangeDetectorRef) {}

  // ngOnInit(): void {
   
  //  this.opciones = {
  //   initialView: 'dayGridMonth',     
  //   plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin,  listPlugin],
  //   weekends: true,
  //   editable: true,
  //   selectable: true,
  //   selectMirror: true,
  //   dayMaxEvents: true,    
  //   defaultDate: new Date(),
  //   locale: esLocale,    
  //   headerToolbar: {
  //     left: "prev,next today",
  //     center: "title",
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //   },
  //  //  dateClick: this.handleDateClick.bind(this), 
  //  select: this.handleDateSelect.bind(this),
  //  eventClick: this.handleEventClick.bind(this),
  //  eventsSet: this.handleEvents.bind(this)
  //  };
   
   
  //  this.eventos = [
  //   {
  //     title: "Evento 1",
  //     start: new Date(),
  //     description: "Modesto Martínez"
  //   },
  //   {
  //     title: "Evento 2",
  //     start: new Date(new Date().getTime()  + 86400000),
  //     description: "Oscar Avina"      
  //   },
  //   {
  //     title: "Evento 3",
  //     start: new Date(new Date(new Date().getTime()  + (86400000 * 2)),),
  //     end: new Date(new Date(new Date().getTime()  + (86400000 * 3)),),
  //     description: "Rene Campillo"
  //   },
  //  ];
   
  // }

  ngOnInit(): void {
    console.log("Se ha iniciado");

    setInterval (() => {
      confetti();
    },1000)

  }
  
  handleDateClick(arg) {
    // alert('date click! ' + arg.dateStr);
    this.fecha = arg.dateStr;
    this.usuario = "Antonio Rivera";
    this.visible4 = true;
    // this.surprise();
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    //muestro la modal 
    // this.visible4 = true
    
    // // Asigno los valores a los elementos
    // this.fecha = selectInfo.startStr;
    // this.usuario = "Antonio Rivera";

    // Agrego el evento
    if(title) {      
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });

    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }
  
  handleEvents(events: EventApi[]) {        
    this.currentEvents.set(events);        
    this.changeDetector.detectChanges(); 
  }
  
  toggleWeekends() {
    this.opciones.weekends = !this.opciones.weekends // toggle the boolean!
  }
  randonRange (min: number, max: number) {
    return Math.random() * (max - min ) + min;
  }
  
 


  surprise(): void {
    const canvas = this.renderer2.createElement('canvas');

     this.renderer2.appendChild(this.elementRef.nativeElement, canvas);

    const myConfetti = confetti.create(canvas, {
      resize: true
    })

    myConfetti( {
      angle: this.randonRange(55, 125),
      spread: this.randonRange(50, 70),
      particleCount: this.randonRange(50, 100),      
      origin: { y: 0.6}
    });
      this.clicked = false
    //  this.renderer2.removeChild("", myConfetti);
  }

  

}
