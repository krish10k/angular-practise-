import { Component, Input, Output, EventEmitter } from '@angular/core'



@Component({
    selector: 'event-thumbnail',
    template: `<div [routerLink]="['/events',event.id]">
    <div  class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>{{event?.date}}</div>
        <div>{{event?.price}}</div>
        <div>{{event?.time}}</div>
        <!--<div [ngClass]="{green: event?.time==='8:00 am',bold:event?.time==='8:00 am'}" [ngSwitch]="event?.time">-->
        <!--<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">-->
        <div [ngStyle]="{'color':event?.time==='8:00 am' ?'red':'grey'}" [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
        </div>
        <div *ngIf="event?.location">
            <span>{{event?.location?.city}}{{" "}}{{event?.location?.state}}</span>
            <span></span>
            <span></span>
        </div>
        <!-- <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button> -->
    </div>
    
    `,
    styles: [`
    .green {color:green !important;}
    .bold {font-weight:bold;}
    .thumbnail {min-height:210px;}
    `]
})
export class EventThumbnailComponent {
    //parent data to child
    @Input() event: any
    @Input() event1: any
    // some: any= "random"
    //child data to parent
    // @Output() eventClick = new EventEmitter()
    // handleClickMe() {
    //     console.log(this.event.name)
    //FOR TEMPLATE REFERENCE VARIABLE
    // logfoo() {
    //     console.log("hello")
    // }


    // getStartTimeStyle():any {
    //     if (this.event && this.event.time == '8:00 am') {
    //         return {color:'green', 'font-weight':'bold'}
    //         // return {}
    //     }

    //Class bindinfg for styles
    // getStartTimeClass() {
    //     if (this.event && this.event.time == '8:00 am') {
    //         return ['green', 'bold']
    //         // return 'green bold'
    //     }
    //     return ''
    // const isEarlyStart = this.event && this.event.time == '8:00 am'
    // return { green: isEarlyStart, bold: isEarlyStart }

    // }

}