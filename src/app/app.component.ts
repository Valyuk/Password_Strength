import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthService } from './password-strength/password-strength.service';
import { PasswordInputComponent } from './password-strength/password-input.component';
import { PasswordStrengthIndicatorComponent } from './password-strength/password-strength-indicator.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		ReactiveFormsModule,
		PasswordInputComponent,
		PasswordStrengthIndicatorComponent,
	],
	providers: [PasswordStrengthService],
	template: `
		<form [formGroup]="form">
			<app-password-input formControlName="password"></app-password-input>
			<app-password-strength-indicator
				[strength]="strength"></app-password-strength-indicator>
		</form>
	`,
	styles: [
		`
			form {
				background-color: #ffffff;
				padding: 50px;
				border-radius: 5px;
				box-shadow: 0 0 10px teal;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		`,
	],
})
export class AppComponent {
	form: FormGroup;
	strength: string = '';

	constructor(
		private fb: FormBuilder,
		private passwordStrengthService: PasswordStrengthService
	) {
		this.form = this.fb.group({
			password: [''],
		});

		this.form.get('password')?.valueChanges.subscribe((value) => {
			this.strength = this.passwordStrengthService.calculateStrength(value);
		});
	}
}
