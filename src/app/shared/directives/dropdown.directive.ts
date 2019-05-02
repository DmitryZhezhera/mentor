import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.active') isActive = false;

    @HostListener('click') onClick() {
        this.isActive = !this.isActive;
        console.log('clicked');
    }
}
