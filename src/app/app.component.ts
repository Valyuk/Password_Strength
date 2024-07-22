import { Component } from '@angular/core';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [PasswordStrengthComponent],
	template: ` <app-password-strength></app-password-strength> `,
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'app-password-strength';
}
