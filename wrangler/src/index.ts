import { DEFAULT_LIBRARY, TITLE } from './consts';
import DaumPostcodeHtml from './DaumPostcodeHtml';
import libraries from './libraries';
import type Theme from './theme';
import {
	validateBooleanParams,
	validateNumberParams,
	validateSizeParams,
} from './utils/validateParams';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const { pathname, searchParams } = new URL(request.url);
		if (pathname !== '/') {
			return new Response('Not found', { status: 404 });
		}

		const title = searchParams.get('title') ?? TITLE;
		const library = searchParams.get('library') ?? DEFAULT_LIBRARY;

		const onComplete = libraries.get(library);
		// https://postcode.map.daum.net/guide
		/*
			Default

			minWidth: 300 (0 ~ 300),
			width: 500 (< 300),
			height: 500 (< 400),
      animation: false,
      shorthand: true,
      focusInput: true,
      autoMappingRoad: true,
      autoMappingJibun: true,
      pleaseReadGuide: 0 (3 ~ 20),
      pleaseReadGuideTimer: 1.5 (0.1 ~ 60)
      maxSuggestItems: 10 (1 ~ 10),
      showMoreHName: false,
      hideMapBtn: false (recommend true),
      hideEngBtn: false,
      alwaysShowEngAddr: false,
      submitMode: true,
      useBannerLink: true (recommend false),
    */
		const width = validateSizeParams({
			value: searchParams.get('width'),
			defaultValue: '100%',
			min: 300,
		});
		const height = validateSizeParams({
			value: searchParams.get('height'),
			defaultValue: '100%',
			min: 400,
		});
		const animation = validateBooleanParams({
			value: searchParams.get('animation'),
			defaultValue: false,
		});
		const shorthand = validateBooleanParams({
			value: searchParams.get('shorthand'),
			defaultValue: true,
		});
		const focusInput = validateBooleanParams({
			value: searchParams.get('focusInput'),
			defaultValue: true,
		});
		const autoMappingRoad = validateBooleanParams({
			value: searchParams.get('autoMappingRoad'),
			defaultValue: true,
		});
		const autoMappingJibun = validateBooleanParams({
			value: searchParams.get('autoMappingJutable'),
			defaultValue: true,
		});
		const pleaseReadGuide = validateNumberParams({
			value: searchParams.get('pleaseReadGuide'),
			defaultValue: 0,
			min: 3,
			max: 20,
		});
		const pleaseReadGuideTimer = validateNumberParams({
			value: searchParams.get('pleaseReadGuideTimer'),
			defaultValue: 1.5,
			min: 0.1,
			max: 60,
		});
		const maxSuggestItems = validateNumberParams({
			value: searchParams.get('maxSuggestItems'),
			defaultValue: 10,
		});
		const showMoreHName = validateBooleanParams({
			value: searchParams.get('showMoreHNameEnabled'),
			defaultValue: false,
		});
		const hideMapBtn = validateBooleanParams({
			value: searchParams.get('hideMapBtnEnabled'),
			defaultValue: true,
		});
		const hideEngBtn = validateBooleanParams({
			value: searchParams.get('hideEngBtn'),
			defaultValue: false,
		});
		const alwaysShowEngAddr = validateBooleanParams({
			value: searchParams.get('alwaysShowEngAddr'),
			defaultValue: false,
		});
		const submitMode = validateBooleanParams({
			value: searchParams.get('submitMode'),
			defaultValue: true,
		});
		const useBannerLink = validateBooleanParams({
			value: searchParams.get('useBannerLink'),
			defaultValue: false,
		});

		// theme
		const bgColor = searchParams.get('bgColor');
		const searchBgColor = searchParams.get('searchBgColor');
		const contentBgColor = searchParams.get('contentBgColor');
		const pageBgColor = searchParams.get('pageBgColor');
		const textColor = searchParams.get('textColor');
		const queryTextColor = searchParams.get('queryTextColor');
		const postcodeTextColor = searchParams.get('postcodeTextColor');
		const emphTextColor = searchParams.get('emphTextColor');
		const outlineColor = searchParams.get('outlineColor');
		const theme: Theme = {
			bgColor,
			searchBgColor,
			contentBgColor,
			pageBgColor,
			textColor,
			queryTextColor,
			postcodeTextColor,
			emphTextColor,
			outlineColor,
		};

		const html = DaumPostcodeHtml({
			onComplete,
			title,
			width,
			height,
			animation,
			shorthand,
			focusInput,
			autoMappingRoad,
			autoMappingJibun,
			pleaseReadGuide,
			pleaseReadGuideTimer,
			maxSuggestItems,
			showMoreHName,
			hideMapBtn,
			hideEngBtn,
			alwaysShowEngAddr,
			submitMode,
			useBannerLink,
			theme,
		});

		return new Response(html, {
			headers: { 'Content-Type': 'text/html; charset=utf-8', 'Content-Encoding': 'utf-8' },
		});
	},
} satisfies ExportedHandler<Env>;
