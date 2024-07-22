import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-password-strength',
	standalone: true,
	imports: [NgClass, FormsModule],
	templateUrl: './password-strength.component.html',
	styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent implements OnInit {
	password: string = '';
	firstSectionClass: string = '';
	secondSectionClass: string = '';
	thirdSectionClass: string = '';

	ngOnInit() {
		this.setClasses('gray', 'gray', 'gray');
	}

	checkPasswordStrength() {
		const password = this.password;
		this.resetClasses();

		if (password.length === 0) {
			this.setClasses('gray', 'gray', 'gray');
			return;
		}

		if (password.length < 8) {
			this.setClasses('red', 'red', 'red');
			return;
		}

		const hasLetters = /[a-zA-Z]/.test(password);
		const hasDigits = /[0-9]/.test(password);
		const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

		if (hasLetters && hasDigits && hasSymbols) {
			this.setClasses('green', 'green', 'green');
		} else if (
			(hasLetters && hasDigits) ||
			(hasLetters && hasSymbols) ||
			(hasDigits && hasSymbols)
		) {
			this.setClasses('yellow', 'yellow', 'gray');
		} else {
			this.setClasses('red', 'gray', 'gray');
		}
	}

	resetClasses() {
		this.firstSectionClass = '';
		this.secondSectionClass = '';
		this.thirdSectionClass = '';
	}

	setClasses(first: string, second: string, third: string) {
		this.firstSectionClass = first;
		this.secondSectionClass = second;
		this.thirdSectionClass = third;
	}
}
