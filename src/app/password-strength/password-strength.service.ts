import { Injectable } from '@angular/core';
import { StrengthLvls } from '../shared/enums/strength-lvl.enum';

@Injectable({
	providedIn: 'root',
})
export class PasswordStrengthService {
	calculateStrength(password: string): string {
		if (password.length === 0) {
			return StrengthLvls.EMPTY;
		}

		if (password.length < 8) {
			return StrengthLvls.SHORT;
		}

		const hasLetters = /[a-zA-Z]/.test(password);
		const hasDigits = /[0-9]/.test(password);
		const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
		const isStrongPass = hasLetters && hasDigits && hasSymbols;

		if (isStrongPass) {
			return StrengthLvls.STRONG;
		}

		const isMediumPass =
			(hasLetters && hasDigits) ||
			(hasLetters && hasSymbols) ||
			(hasDigits && hasSymbols);

		if (isMediumPass) {
			return StrengthLvls.MEDIUM;
		}

		return StrengthLvls.WEAK;
	}
}
