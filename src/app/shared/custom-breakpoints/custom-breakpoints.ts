import {BREAKPOINT} from '@angular/flex-layout';

const NTX_BREAKPOINTS = [{
		alias: 'ntx.xs',
		suffix: 'ntxXsScreen',
		mediaQuery: 'screen and (max-width: 599px)',
		overlapping: false
	}, {
		alias: 'ntx.sm',
		suffix: 'ntxSmScreen',
		mediaQuery: 'screen and (min-width: 600px) and (max-width: 1023px)',
		overlapping: false
	}, {
		alias: 'ntx.md',
		suffix: 'ntxMdScreen',
		mediaQuery: 'screen and (min-width: 1024px) and (max-width: 1279px)',
		overlapping: false
	}, {
		alias: 'ntx.lg',
		suffix: 'ntxLgScreen',
		mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1479px)',
		overlapping: false
	}, {
		alias: 'ntx.xl',
		suffix: 'ntxXlScreen',
		mediaQuery: 'screen and (min-width: 1480px)',
		overlapping: false
	}];

export const CustomBreakPointsProvider = {
	provide: BREAKPOINT,
	useValue: NTX_BREAKPOINTS,
	multi: true
};

// 'xs'    : 'screen and (max-width: 599px)',
// 'gt-xs' : 'screen and (min-width: 600px)',
// 'sm'    : 'screen and (min-width: 600px) and (max-width: 1023px)',
// 'gt-sm' : 'screen and (min-width: 1024px)',
// 'md'    : 'screen and (min-width: 1024px) and (max-width: 1440px)',
// 'gt-md' : 'screen and (min-width: 1440px)',
// 'lg'    : 'screen and (min-width: 1440px) and (max-width: 1919px)',
// 'gt-lg' : 'screen and (min-width: 1920px)',
// 'xl'    : 'screen and (min-width: 1920px) and (max-width: 5000px)'