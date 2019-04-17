import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


// function passwordMatcher(c: AbstractControl) {
//     return c.get('password').value === c.get('confirm').value
//         ? null : {'nomatch': true};
// }

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    // registerUserData = {};

    userDataControl: FormGroup;

    constructor(private _auth: AuthService,
                private _router: Router,
                public _formBuilder: FormBuilder) {
        this.userDataControl = this._formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            login: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            eMail: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required]
        });

    }

    ngOnInit() {
        // this.userDataControl = new FormGroup({
        //     firstName: new FormControl('', Validators.required),
        //     lastName: new FormControl('', Validators.required),
        //     login: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
        //     eMail: new FormControl('', [Validators.required, Validators.email]),
        //     password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
        //     passwordConfirm: new FormControl('', [Validators.required])
        // });

        this.userDataControl.valueChanges.subscribe(status => {
            console.log(status);
        });
        this.userDataControl.statusChanges.subscribe(status => {
            console.log(status);
        });
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


