import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { LastcomponentComponent } from './lastcomponent/lastcomponent.component';
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    LastcomponentComponent,
    SecondComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
