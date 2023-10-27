import type { Config } from 'jest';

const config: Config = {
	preset: 'jest-preset-angular',
	globalSetup: 'jest-preset-angular/global-setup',
	moduleNameMapper: {
		/**
		 * Bypass icon registration error that occurs in JEST
		 *
		 * In CCA, we import icons from `es` directory... which is bundled as EcmaScript Modules (esm).
		 * Jest has experimental support for `esm` as of now. Hence we need to bypass this error
		 * by pointing to the common js equivalent.
		 *
		 */
		"^@carbon/icons/es/(.*)$": "@carbon/icons/lib/$1.js",
	},
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};

export default config;
