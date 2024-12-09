import type Theme from './theme';

type Props = {
	onComplete: string | undefined;
	title: string;
	width: number | string;
	height: number | string;
	animation: boolean;
	shorthand: boolean;
	focusInput: boolean;
	autoMappingRoad: boolean;
	autoMappingJibun: boolean;
	pleaseReadGuide: number;
	pleaseReadGuideTimer: number;
	maxSuggestItems: number;
	showMoreHName: boolean;
	hideMapBtn: boolean;
	hideEngBtn: boolean;
	alwaysShowEngAddr: boolean;
	submitMode: boolean;
	useBannerLink: boolean;
	theme: Theme;
};

export default Props;
