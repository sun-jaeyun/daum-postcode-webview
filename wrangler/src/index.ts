import { DEFAULT_LIBRARY, TITLE } from './consts';
import DaumPostcodeHtml from './DaumPostcodeHtml';
import libraries from './libraries';
import type Theme from './types/theme';
import {
	validateBooleanParams,
	validateNumberParams,
	validateSizeParams,
} from './utils/validateParams';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const { pathname, searchParams } = new URL(request.url);

		// 루트를 제외하곤 Not found
		if (pathname !== '/') {
			return new Response('Not found', { status: 404 });
		}

		// Document Title
		const title = searchParams.get('title') ?? TITLE;

		// onComplete
		const library = searchParams.get('library') ?? DEFAULT_LIBRARY;
		const onComplete = libraries.get(library);

		/*
			parameters - https://postcode.map.daum.net/guide

			minWidth: 300 (0 ~ 300),
			width: 500 (> 300),
			height: 500 (> 400),
      animation: false,
      focusInput: true,
      autoMappingRoad: true,
      autoMappingJibun: true,
      shorthand: true,
      pleaseReadGuide: 0 (3 ~ 20),
      pleaseReadGuideTimer: 1.5 (0.1 ~ 60)
      maxSuggestItems: 10 (1 ~ 10),
      showMoreHName: false,
      hideMapBtn: false,
      hideEngBtn: false,
      alwaysShowEngAddr: false,
      submitMode: true,
      useBannerLink: true,
    */
		const width = validateSizeParams(searchParams.get('width'), {
			defaultValue: '100%',
			min: 300,
		});
		const height = validateSizeParams(searchParams.get('height'), {
			defaultValue: '100%',
			min: 400,
		});
		const animation = validateBooleanParams(searchParams.get('animation'));
		const focusInput = validateBooleanParams(searchParams.get('focusInput'));
		const autoMappingRoad = validateBooleanParams(searchParams.get('autoMappingRoad'));
		const autoMappingJibun = validateBooleanParams(searchParams.get('autoMappingJutable'));
		const shorthand = validateBooleanParams(searchParams.get('shorthand'));
		const pleaseReadGuide = validateNumberParams(searchParams.get('pleaseReadGuide'), {
			min: 3,
			max: 20,
		});
		const pleaseReadGuideTimer = validateNumberParams(searchParams.get('pleaseReadGuideTimer'), {
			min: 0.1,
			max: 60,
		});
		const maxSuggestItems = validateNumberParams(searchParams.get('maxSuggestItems'));
		const showMoreHName = validateBooleanParams(searchParams.get('showMoreHNameEnabled'));
		const hideMapBtn = validateBooleanParams(searchParams.get('hideMapBtnEnabled'));
		const hideEngBtn = validateBooleanParams(searchParams.get('hideEngBtn'));
		const alwaysShowEngAddr = validateBooleanParams(searchParams.get('alwaysShowEngAddr'));
		const submitMode = validateBooleanParams(searchParams.get('submitMode'));
		const useBannerLink = validateBooleanParams(searchParams.get('useBannerLink'));

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

		// make html output
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

		// return response with html content type and encoding utf-8
		return new Response(html, {
			headers: { 'Content-Type': 'text/html; charset=utf-8', 'Content-Encoding': 'utf-8' },
		});
	},
} satisfies ExportedHandler<Env>;
