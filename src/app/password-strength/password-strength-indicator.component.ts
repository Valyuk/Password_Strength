import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IndicatorColors } from '../shared/enums/indicator-colors.enum';
import { StrengthLvls } from '../shared/enums/strength-lvl.enum';

@Component({
	standalone: true,
	imports: [NgClass],
	selector: 'app-password-strength-indicator',
	template: `
		<div class="strength-indicators">
			<div [ngClass]="firstSectionClass"></div>
			<div [ngClass]="secondSectionClass"></div>
			<div [ngClass]="thirdSectionClass"></div>
		</div>
	`,
	styles: [
		`
			.strength-indicators {
				display: flex;
				justify-content: space-between;
				width: 300px;
				margin-top: 20px;
			}
			.strength-indicators div {
				width: 30%;
				height: 10px;
			}
			.gray {
				background-color: gray;
			}
			.red {
				background-color: red;
			}
			.yellow {
				background-color: yellow;
			}
			.green {
				background-color: green;
			}
		`,
	],
})
export class PasswordStrengthIndicatorComponent {
	@Input() strength: string = '';

	get firstSectionClass() {
		return this.getClass(0);
	}

	get secondSectionClass() {
		return this.getClass(1);
	}

	get thirdSectionClass() {
		return this.getClass(2);
	}

	private getClass(index: number) {
		switch (this.strength) {
			case StrengthLvls.EMPTY:
				return IndicatorColors.GRAY;
			case StrengthLvls.SHORT:
				return IndicatorColors.RED;
			case StrengthLvls.WEAK:
				return index === 0 ? IndicatorColors.RED : IndicatorColors.GRAY;
			case StrengthLvls.MEDIUM:
				return index < 2 ? IndicatorColors.YELLOW : IndicatorColors.GRAY;
			case StrengthLvls.STRONG:
				return IndicatorColors.GREEN;
			default:
				return IndicatorColors.GRAY;
		}
	}
}
