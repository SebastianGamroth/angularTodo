import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { ArchivComponent } from './archiv/archiv.component';
import { TrashComponent } from './trash/trash.component';


const routes: Routes = [
  { path: '', component: AddNoteComponent },
  { path: 'archiv', component: ArchivComponent },
  { path: 'trash', component: TrashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
