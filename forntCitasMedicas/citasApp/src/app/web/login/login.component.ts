import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LoginComponent implements OnInit {
  visible = false;
  inputType = 'password';

  fromLogin = this.fb.group({
    usuario: ['', Validators.required],
    pass: ['', Validators.required],
  });


  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }
  submit() {
    if (this.fromLogin.valid) {
      this.submitEM.emit(this.fromLogin.value);
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
