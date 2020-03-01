import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from './loading.component';


@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoadingModule {
}
