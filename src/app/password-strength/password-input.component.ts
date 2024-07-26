import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	standalone: true,
	selector: 'app-password-input',
	template: `
		<input
			type="password"
			(input)="onInput($event)"
			[value]="value"
			placeholder="Password" />
	`,
	styles: [
		`
			input {
				font-size: 20px;
				width: 300px;
				padding: 10px 5px;
			}
		`,
	],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => PasswordInputComponent),
			multi: true,
		},
	],
})
export class PasswordInputComponent implements ControlValueAccessor {
	value: string = '';

	onChange: any = () => {};
	onTouched: any = () => {};

	writeValue(value: any): void {
		this.value = value;
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	onInput(event: any) {
		const value = event.target.value;
		this.value = value;
		this.onChange(value);
	}
}
