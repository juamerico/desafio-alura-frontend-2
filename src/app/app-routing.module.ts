import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityComponent } from './community/community.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: CodeEditorComponent
  },
  {
    path: "community",
    component: CommunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
