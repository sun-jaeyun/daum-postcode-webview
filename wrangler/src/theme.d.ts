type Theme = {
	bgColor: string | null; //바탕 배경색
	searchBgColor: string | null; //검색창 배경색
	contentBgColor: string | null; //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
	pageBgColor: string | null; //페이지 배경색
	textColor: string | null; //기본 글자색
	queryTextColor: string | null; //검색창 글자색
	postcodeTextColor: string | null; //우편번호 글자색
	emphTextColor: string | null; //강조 글자색
	outlineColor: string | null; //테두리
};

export default Theme;
