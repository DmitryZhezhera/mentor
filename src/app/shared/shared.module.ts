import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseCardComponent} from './course-card/course-card.component';
import {CoursePreviewComponent} from './course-preview/course-preview.component';
import {RouterModule} from '@angular/router';
// import {DropdownDirective} from './directives/dropdown.directive';

@NgModule({
    declarations: [
        CourseCardComponent,
        CoursePreviewComponent,
        // DropdownDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CourseCardComponent,
        CoursePreviewComponent
    ]
})
export class SharedModule {
}
