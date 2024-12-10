import type Theme from './theme';

type Props = {
	onComplete: string | undefined;
	title: string;
	width: number | string | null;
	height: number | string | null;
	animation: boolean | null;
	shorthand: boolean | null;
	focusInput: boolean | null;
	autoMappingRoad: boolean | null;
	autoMappingJibun: boolean | null;
	pleaseReadGuide: number | null;
	pleaseReadGuideTimer: number | null;
	maxSuggestItems: number | null;
	showMoreHName: boolean | null;
	hideMapBtn: boolean | null;
	hideEngBtn: boolean | null;
	alwaysShowEngAddr: boolean | null;
	submitMode: boolean | null;
	useBannerLink: boolean | null;
	theme: Theme;
};

export default Props;
