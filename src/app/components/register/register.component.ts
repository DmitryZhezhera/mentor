import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    userDataControl: FormGroup;

    constructor(private _auth: AuthService,
                private _router: Router,
                public _formBuilder: FormBuilder) {
        this.userDataControl = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            login: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
            eMail: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required]
        }, {
            validators: (f) => {
                // console.log(f);
                if (f.value.password !== f.value.passwordConfirm) {
                    return {'mustMatch': true};
                }
                return null;
            }
        });
    }

    ngOnInit() {
        // this.userDataControl.valueChanges.subscribe(status => {
        //     console.log(status);
        // });
        // this.userDataControl.statusChanges.subscribe(status => {
        //     console.log(status);
        // });
    }

    get controls() {
        // console.log('f:', this.userDataControl.controls);
        return this.userDataControl.controls;
    }

    cancel() {
        event.preventDefault();
        this._router.navigate(['']);
    }

    registerUser() {
        console.log('RegisterComponent_', this.userDataControl.value);
        this._auth.registerUser(this.userDataControl.value)
            .subscribe(
                result => {
                    console.log('result is:');
                    console.log(result.token);
                    localStorage.setItem('token', result.token);
                    this._router.navigate(['student']);
                },
                err => {
                    console.log(err);
                    console.log(err.error);
                }
            );
    }
}


