import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PipeComponent } from './pipe/pipe.component';
import { PaintComponent } from './paint/paint.component';
import { PumpComponent } from './pump/pump.component';
import { SteelComponent } from './steel/steel.component';
import { SolarComponent } from './solar/solar.component';
import { SandComponent } from './sand/sand.component';
import { ValveComponent } from './valve/valve.component';
import { CementComponent } from './cement/cement.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { EditComponent } from './edit/edit.component';
import { DataSharingService } from './data-sharing.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PipeComponent,
    PaintComponent,
    PumpComponent,
    SteelComponent,
    SolarComponent,
    SandComponent,
    ValveComponent,
    CementComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
