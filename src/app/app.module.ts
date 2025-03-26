import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule, RouterModule],
})

export class AppModule {
    // constructor() {
    //     console.log('AppModule created');
    // }
    // constructor(private tasksService: TasksService) {
}