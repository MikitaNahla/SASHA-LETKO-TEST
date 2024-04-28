import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./core/main-page/main-page.component').then(
        (value) => value.MainPageComponent
      ),
  },
  {
    path: 'aboutUs',
    loadComponent: () =>
      import('./core/about-us/about-us.component').then(
        (value) => value.AboutUsComponent
      ),
  },
  {
    path: 'firstSteps',
    loadComponent: () =>
      import('./core/first-steps/first-steps.component').then(
        (value) => value.FirstStepsComponent
      ),
  },
  {
    path: 'knowledgeBase',
    loadComponent: () =>
      import('./core/knowledge-base/knowledge-base.component').then(
        (value) => value.KnowledgeBaseComponent
      ),
  },
  {
    path: 'knowledgeBase/:id',
    loadComponent: () =>
      import('./core/knowledge-base/picture-page/picture-page.component').then(
        (value) => value.PicturePageComponent
      )
  },
  {
    path: 'generatePicture',
    loadComponent: () =>
      import('./core/generate-picture/generate-picture.component').then(
        (value) => value.GeneratePictureComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
