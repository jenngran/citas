import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/core/helpers/routes';
import { WebstorgeService } from 'src/app/shared/webstorge.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public routes = routes;
  password = '';
  show = false;

  form = this.fb.group({
    nombre: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  constructor(private storage: WebstorgeService, private fb: FormBuilder,) { }

  ngOnInit() {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
    }
  }


  submit() {
    if (this.form.valid) {
      this.storage.login(this.form.get("nombre")?.value, this.form.get("password")?.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
