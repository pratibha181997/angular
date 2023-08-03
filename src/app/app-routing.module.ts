import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintComponent } from './paint/paint.component';
import { PipeComponent } from './pipe/pipe.component';
import { PumpComponent } from './pump/pump.component';
import { SandComponent } from './sand/sand.component';
import { SolarComponent } from './solar/solar.component';
import { SteelComponent } from './steel/steel.component';
import { ValveComponent } from './valve/valve.component';
import { CementComponent } from './cement/cement.component';
import { NavComponent } from './nav/nav.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'paint', component:PaintComponent},
  {path:'pipe', component:PipeComponent},
  {path:'pump', component:PumpComponent},
  {path:'sand', component:SandComponent},
  {path:'solar', component:SolarComponent},
  {path:'steel', component:SteelComponent},
  {path:'valve', component:ValveComponent},
  {path:'cement', component:CementComponent},
  {path:'edit', component:EditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
