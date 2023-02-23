import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventService } from './shared/event.service'
@Component({
    selector: 'events-list',
    template: `
    <h1>Upcoming angular events</h1>
    <hr />
    <div class="row">
    <event-thumbnail *ngFor="let event of events" [event]="event" class="col-md-5"></event-thumbnail>
    <!--<post-list></post-list>-->
    </div>
    <!-- <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail> --> 
    <!--<event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>-->
    <!--<h1>{{thumbnail.some}}</h1>-->
    <!--<button class="btn btn-primary" (click)="thumbnail.logfoo()">Log me</button>-->
  

    `
})
export class EventsListComponent implements OnInit {
    events: any
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        // this.events = this.eventService.getEvents()
        // this.eventService.getEvents().subscribe(events => { this.events = events })
        this.events = this.route.snapshot.data['events']
        // the 'events' over here sghould match with key events in route.ts
    }
    handleEventClicked(data: any) {
        console.log("rec", data)
    }
}