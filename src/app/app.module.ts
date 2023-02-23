import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { PostComponent } from './events/posts.component';
import { EventService } from './events/shared/event.service';
import { PostService } from './events/shared/prac.service';
import { appRoutes } from './routes';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { NavComponent } from './nav/nav.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { Error404Component } from './error/error.component';
import { EventListResolver } from './events/shared/events-list-resolver.service';
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    NavComponent,
    EventsListComponent,
    EventThumbnailComponent,
    PostComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [EventService,
    PostService,
    EventRouteActivator,
    // provide: EventService, useValue: EventService
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
    AuthService
  ],


  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {

    return window.confirm("You have not save this event,do u really want to cancel")
  }
  return true
}
