
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets = []
class DataSet {
	constructor(sub_title, menuNum) { this.sub_title = sub_title }
	user_fill = ""
	sub_content = []
	sub_img = []
	set_content(content) { this.sub_content.push(content) }
	set_img(num, obj) {
		if (!this.sub_img[num]) { this.sub_img[num] = [] }
		this.sub_img[num].push(obj)
	}
	set_fill(ufill) { this.user_fill = ufill }
}

let d1 = new DataSet("로또번호 예측 선형회귀분석")//메인 타이틀 //메뉴번호
d1.set_content("1.1 데이터 수집 및 전처리")//서브 타이틀
//https://drive.google.com/file/d/1pH0u_bTV-i8gsKw_UME5xb2Sq3QWCIRA/view?usp=drive_link
d1.set_img(0, { imgtitle: "1.원천데이터수집", imgurl: "https://drive.google.com/file/d/1pH0u_bTV-i8gsKw_UME5xb2Sq3QWCIRA/view?usp=drive_link", imglog: "로또365페이지를 이용하여 1회차 ~ 1183회차 로또 당첨번호 수집", sourceurl: "https://dhlottery.co.kr/gameResult.do?method=byWin" })
d1.set_img(0, { imgtitle: "2.데이터변환", imgurl: "https://drive.google.com/file/d/1K5MmWk3luLpfrYkMqF_wAiBZn2UiIE_g/view?usp=drive_link", imglog: "xlsx 형식의 데이터를 pandas 에서 로딩하기 편리하도록 csv 파일로 변환 ", sourceurl: "" })
d1.set_img(0, { imgtitle: "3.csv파일읽기와 시계열데이터생성 모듈 구성", imgurl: "https://drive.google.com/file/d/1mpLgt-1c566ffoZY8SzMOgdg0GwF3LOC/view?usp=drive_link", imglog: "DAS에 저장된 csv 파일 불러오는 readFileData모듈과 시간 스탭에 따른 시계열 데이터 생성 모듈 구현", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
//https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb
d1.set_img(0, { imgtitle: "4.데이터전처리", imgurl: "https://drive.google.com/file/d/1QkmZqnSC1jYcQvAU-J-KKwdbEjR5kTPN/view?usp=drive_link", imglog: "환경상수설정 및 날짜데이터 변환과 밀리타임 필드 추가", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(0, { imgtitle: "5.데이터분석", imgurl: "https://drive.google.com/file/d/1h9Cw7L46T7Cv3dfVLlgz-ftIHq0ruZNH/view?usp=drive_link", imglog: "판다스통계를 이용한 데이터 분석", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(0, { imgtitle: "6.데이터분석및통계", imgurl: "https://drive.google.com/file/d/15klYV1-z3pMnDij7Pybw_PUktOg7g1a1/view?usp=drive_link", imglog: "데이터 박스플롯과 히스토그램으로 데이터 분포및 이상치 데이터 시각화 확인 후 통계출력", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(0, { imgtitle: "7.밀집데이터복원함수", imgurl: "https://drive.google.com/file/d/1_pd2eFd38iD1-OPOTaHNFO0tyb92MMMz/view?usp=drive_link", imglog: "스케일링된 정답데이터를 원래의 스케일링으로 복원 모듈 생성 및 테스트", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_content("1.2 회귀예측 모델 구성")//서브 타이틀
d1.set_img(1, { imgtitle: "8.시계열데이터생성", imgurl: "https://drive.google.com/file/d/1yIq16Rh7G3irLqPM0sq-Tt1vncGAbW5M/view?usp=drive_link", imglog: "타임스텝에 따른 시계열 훈련 데이터 생성", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(1, { imgtitle: "9.LSTM 및 ConvLSTM1D 순차모델 구성", imgurl: "https://drive.google.com/file/d/173f05icDE8RK2Z4YAPwhMiiINw2exlw5/view?usp=drive_link", imglog: "환경설정에 따른 LSTM 또는 ConvLSTM1D 모델을 구축 및 컴파일", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(1, { imgtitle: "10.조기종료/출력콜백함수 훈련실행", imgurl: "https://drive.google.com/file/d/1rAsP5jQtM5Scr22tLvM8nCz5N-9Zf5OF/view?usp=drive_link", imglog: "최적값 수렴후 훈련 조기종료와 훈련과정 verbose 콜백함수 등록후 훈련 실시", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(1, { imgtitle: "11.훈련결과 시각화", imgurl: "https://drive.google.com/file/d/1yblI21SX9N0KoUULPvbtvBIQUnH-8F6c/view?usp=drive_link", imglog: "MSE , MAE LOSS 시각화 그래프", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(1, { imgtitle: "12.모델 오차율 산정", imgurl: "https://drive.google.com/file/d/1JZyfi6svpYXDOITlBBnqJUioVOxLo__G/view?usp=drive_link", imglog: "모델의 평균 오차율과 필드별 오차율 산정", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
d1.set_img(1, { imgtitle: "13.모델저장 및 실제예측값출력", imgurl: "https://drive.google.com/file/d/1v_O6Z_eOYFYTB7CFnl4v10kjaLyTyPyS/view?usp=drive_link", imglog: "다음 회차 번호 예측", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/jupyer_ai/lotto_rnn.ipynb" })
//d1.set_img(0, { imgtitle: "", imgurl: "", imglog: "", sourceurl: "" })
d1.set_content("1.3 코드 리팩토링")//서브 타이틀
d1.set_img(2, { imgtitle: "14.코드리팩토링", imgurl: "https://drive.google.com/file/d/1jDf8Lt-fNa1tEKuJdXKddnFZcCDMwBqF/view?usp=drive_link", imglog: "저장된모델불러오기,데이터전처리,스케일링복원,예측출력,모델업그레이드(미구현),오차율출력,번호예측실행시점모듈", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/lotto_AI/service_model.py" })
d1.set_img(2, { imgtitle: "15.프로젝트 디렉토리구성", imgurl: "https://drive.google.com/file/d/1DPV3TsPi-Nn1YRxn8FQDhX3g8QWWH_au/view?usp=drive_link", imglog: "모델디렉터리 및 서비스페이지 분리", sourceurl: "https://github.com/dmsgur/AISEC_0612/tree/codeone/lotto_AI" })
d1.set_content("1.4 플라스크 미들웨어 구현")//서브 타이틀
d1.set_img(3, { imgtitle: "16.인덱스페이지 라우팅", imgurl: "https://drive.google.com/file/d/1xDlCOijnb240UosqcpW3QU5FVNV6g-sP/view?usp=drive_link", imglog: "템플릿츠 디렉터리의 최초 인덱스 페이지  출력 주소 라우팅", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/lotto_AI/WebFlask.py" })
d1.set_img(3, { imgtitle: "17.모델 예측 페이지 라우팅", imgurl: "https://drive.google.com/file/d/16wpnrLNbw52LwhbgpcDI4rvi3WZ4NfvC/view?usp=drive_link", imglog: "예측날짜, 모델명 파라미터 수신 후 모델의 예측값 형식에 따른 JSON 데이터로 송출", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/lotto_AI/WebFlask.py" })
d1.set_img(3, { imgtitle: "18.플라스크 미들웨어 가동", imgurl: "https://drive.google.com/file/d/1nk9X9Euh1bc7lFHcXG8gRe8lRQZnG-Qt/view?usp=drive_link", imglog: "플라스크 미들웨어 서버 가동 화면 스냅샷(웹서버 연동 미구현)", sourceurl: "" })
d1.set_content("1.5 사용자 UI 구현")//서브 타이틀
d1.set_img(4, { imgtitle: "19.사용자 인덱스 페이지 액세스", imgurl: "https://drive.google.com/file/d/1xvOlQ1CiBriYHTsZ64dKa2Fivi7ImrWZ/view?usp=drive_link", imglog: "이용자가 접근할 최초 인덱스 페이지 스냅샷(예측 날짜 및 모델 선택 가능)", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/lotto_AI/templates/index.html" })
d1.set_img(4, { imgtitle: "20.모델별 타입스텝별 예측서비스 선택", imgurl: "https://drive.google.com/file/d/1nWX-a_DVPBhZGOlXgErksoMxKmGP8Xms/view?usp=drive_link", imglog: "원하는 날짜와 지정된 모델별 타임스텝별 서비스 항목 선택", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/lotto_AI/templates/index.html" })
d1.set_img(4, { imgtitle: "21.예측 진행중 스냅샷", imgurl: "https://drive.google.com/file/d/1kpRRx7QqD1j1AixO-OY2bzaTYmsWDgHS/view?usp=drive_link", imglog: "이용자 서비스 요구시 미들웨어로 부터 예측값 출력 수신 로딩 화면 스냅샷", sourceurl: "https://github.com/dmsgur/AISEC_0612/blob/codeone/lotto_AI/templates/index.html" })
d1.set_content("1.6 로또 예측 서비스 구동")//서브 타이틀
d1.set_img(5, { imgtitle: "22.예측 결과 스냅샷", imgurl: "https://drive.google.com/file/d/1y8rO9oyajK-5U6mCH6y-qHM_opOKzVhg/view?usp=drive_link", imglog: "각 번호별 예측 번호 추출과 오차확률 출력", sourceurl: "" })
d1.set_img(5, { imgtitle: "23.모델별 다중예측 진행중 스냅샷", imgurl: "https://drive.google.com/file/d/1wK3gU4laONoxgHxn8ijxW2Iz7C4Jhmtu/view?usp=drive_link", imglog: "기존 예측과 다른 모델의 예측 결과 비교를 위한 다중모델예측 진행 스냅샷", sourceurl: "" })
d1.set_img(5, { imgtitle: "24.모델별 다중예측 결과 스냅샷", imgurl: "https://drive.google.com/file/d/1eOSrChblEJm9Yb6PaKSIL5dKg_HYv35b/view?usp=drive_link", imglog: "원하는 모델 선택 후 예측결과를 모델별로 비교 분석할 수 있는 다중모델 예측 결과 스냅샷", sourceurl: "" })
d1.set_img(5, { imgtitle: "25.원하는 모델을 선택하여 여러 예측값 출력", imgurl: "https://drive.google.com/file/d/1OFSXgdIrDJTwiZlGB_RWgqPdFcRPJ-7v/view?usp=drive_link", imglog: "원하는 모델 선택 후 여러 모델의 예측값을 조합하여 번호를 선택할 수 있는 결과 스냅샷 ", sourceurl: "" })

d1.set_fill("로또 추첨일의 날짜로 당첨번호를 스케일링 한 후 두가지 유형의 모델로 예측값과 오차를 출력, 차후 각 번호의 자리별 다중분류(softmax) 형태의 예측값 출력 개선 예정 ")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
//d2.set_img(0, { imgtitle: "", imgurl: "", imglog: "", sourceurl: "" })
let d2 = new DataSet("네이버 영화리뷰 감성 이진분류 예측")//메인타이틀
d2.set_content("2.1 데이터 수집 및 전처리")//서브 타이틀
d2.set_img(0, { imgtitle: "1.한글형태소분류등 필요라이브러리", imgurl: "https://drive.google.com/file/d/1Yvfot6HWRuuXGuZAKg_7TN2WPlL2VPOn/view?usp=drive_link", imglog: "KONLP 및 필요라이브러리 설치 및 import", sourceurl: "" })
d2.set_img(0, { imgtitle: "2.데이터수집 및 읽어오기", imgurl: "https://drive.google.com/file/d/1JQS5bLXISc3UAnVJ0J2LNsnp0QMyvsAI/view?usp=drive_link", imglog: "네이버 영화감상평 리뷰 수집 및 판다스로 읽어오기", sourceurl: "" })
d2.set_img(0, { imgtitle: "3.데이터 수량 및 정보확인", imgurl: "https://drive.google.com/file/d/1y6W5WkzeWuNOUNW_w2wIE1QArI5ap9DO/view?usp=drive_link", imglog: "판다스로 데이터수량파악과 데이터의 타입등을 확인", sourceurl: "" })
d2.set_img(0, { imgtitle: "4.결측데이터 보정", imgurl: "https://drive.google.com/file/d/1tWpG_ybyX2Q4j4l24vD3nG5uCr02R3dS/view?usp=drive_link", imglog: "결측데이터 수량 확인 및 제거 후 수량 확인", sourceurl: "" })
d2.set_img(0, { imgtitle: "5.중복데이터 처리", imgurl: "https://drive.google.com/file/d/13G0olCucqCPC6Ec1axgaZO5BNtIIgVrK/view?usp=drive_link", imglog: "중복된 데이터 확인과 제거", sourceurl: "" })
d2.set_img(0, { imgtitle: "6.한글데이터 처리", imgurl: "https://drive.google.com/file/d/13-hRyrqTYfmbWURHrQ3k-KGuOTb9epmQ/view?usp=drive_link", imglog: "한글과 공백을 제외한 모든 문자 제거", sourceurl: "" })
d2.set_img(0, { imgtitle: "7.한글 형태소 분리", imgurl: "https://drive.google.com/file/d/1xvlW-zdJiyI5E10owU6xxlUSnbN6QRU6/view?usp=drive_link", imglog: "사용하지 않는 불용어 처리와 KONLP를 활용한 형태소 분리", sourceurl: "" })
d2.set_img(0, { imgtitle: "8.단어사이즈분석", imgurl: "https://drive.google.com/file/d/17KRZREGUEN1ZXGdxzCThtN_q91qKQ2R3/view?usp=drive_link", imglog: "단어의 출현빈도에 따른 단어사전 사이즈 분석 및 결정", sourceurl: "" })
d2.set_img(0, { imgtitle: "9.문장의 길이 분석", imgurl: "https://drive.google.com/file/d/1c6AIVTWlUk5OnGwMKhfadU3wdtvJVfWq/view?usp=drive_link", imglog: "히스토그램에의한 문장의 길이 분석후 적절한 최대문장 길이 선정", sourceurl: "" })
d2.set_img(0, { imgtitle: "10.단어 사전 생성", imgurl: "https://drive.google.com/file/d/1sugj8mW1Ddrltc13OGiGTshndUQvEEEd/view?usp=drive_link", imglog: "단어사이즈와 문장사이즈를 설정하여 TextVectorize 레이어를 활용한 단어 사전 생성", sourceurl: "" })
d2.set_img(0, { imgtitle: "11.환경저장", imgurl: "https://drive.google.com/file/d/1MGnPYbKMp_sKrGXta0Wgm0mqOS2pSxnA/view?usp=drive_link", imglog: "단어사이즈, 문장길이, 단어사전을 환경설정 파일로 저장", sourceurl: "" })
d2.set_content("2.2 LSTM 모델 구성 및 훈련")//서브 타이틀
d2.set_img(1, { imgtitle: "12.희소텐서 및 임베딩", imgurl: "https://drive.google.com/file/d/1-8jmW_K8AE3lSMfpUt8c81mHv8OgWau7/view?usp=drive_link", imglog: "TextVectorize를 활용한 단어 정수 변환과 Embedding 레이어를 이용한 밀집텐서(부동소수점) 변환 테스트", sourceurl: "" })
d2.set_img(1, { imgtitle: "13.모델 구성", imgurl: "https://drive.google.com/file/d/1gfLjmMbKSIVciD4AhG-qBsL_B98VXFMQ/view?usp=drive_link", imglog: "임베딩레이어 및 LSTM 레이어를 주축으로 이진분류 모델 구성 및 컴파일", sourceurl: "" })
d2.set_img(1, { imgtitle: "14.모델의 훈련", imgurl: "https://drive.google.com/file/d/1in43oYgQC3YjkrhSb66XhEOX4vdsIipk/view?usp=drive_link", imglog: "조기종료 콜백함수를 탑재한 모델을 훈련", sourceurl: "" })
d2.set_content("2.3 모델 훈련 평가")//서브 타이틀
d2.set_img(2, { imgtitle: "15.훈련결과 그래프", imgurl: "https://drive.google.com/file/d/1Kcm_sijIUtfFMEhZ5JjXwyyr1NHqhUDr/view?usp=drive_link", imglog: "훈련데이터와 검증데이터의 손실율, 정확률 시각화 판단", sourceurl: "" })
d2.set_img(2, { imgtitle: "16.서비스를 위한 리팩토링", imgurl: "https://drive.google.com/file/d/1OFfBHsQvr0WEGVyzG5pMGXDI8Jvof18M/view?usp=drive_link", imglog: "모델 서비스를 위한 코드 리팩토링", sourceurl: "" })
d2.set_content("2.4 서비스페이지는 네이버 쇼핑리뷰에 탑재")//서브 타이틀
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("네이버 쇼핑상품리뷰 감성 이진분류 예측")//메인타이
d3.set_content("3.1 상품리뷰데이터수집 및 전처리")//서브 타이틀
d3.set_img(0, { imgtitle: "데이터수집하기", imgurl: "https://drive.google.com/file/d/1v39veBvEuGXcpTAoXMy4sNVPN7K1na96/view?usp=drive_link", imglog: "네이버 쇼핑상품 리뷰 수집 및 판다스데이터 변환", sourceurl: "" })
d3.set_img(0, { imgtitle: "정답데이터 범위 수정", imgurl: "https://drive.google.com/file/d/1H2t29Bu5OYYqiipLBuu_kiBUmG5eLxJZ/view?usp=drive_link", imglog: "이진분류를 위한 별점의 수량에 따른 긍정과 부정 분류", sourceurl: "" })
d3.set_img(0, { imgtitle: "결측치 및 중복 제거", imgurl: "https://drive.google.com/file/d/1Kr0uqDrMXhDmRLzvrHL0dLxgyCAbljtz/view?usp=drive_link", imglog: "결측데이터 및 중복데이터 확인과 제거", sourceurl: "" })
d3.set_img(0, { imgtitle: "데이터 분할", imgurl: "https://drive.google.com/file/d/1aXoiIvQyKpWlko_PWAiuAT6PgjVvzOoJ/view?usp=drive_link", imglog: "훈련데이터,검증데이터,테스트데이트 분할", sourceurl: "" })
d3.set_img(0, { imgtitle: "한글 영문 공백 외 제거", imgurl: "https://drive.google.com/file/d/1GB22g1AlW2P5-1BVuI9FDe0zMbrWLdLy/view?usp=drive_link", imglog: "정규식을 이용한 한글 및 영문, 공백을 제외한 모든 문자 제거", sourceurl: "" })
d3.set_img(0, { imgtitle: "불용어 처리 및 형태소 분리", imgurl: "https://drive.google.com/file/d/1VHobeVTHfXWYEMDnPTKKEvuBcgOhdgt4/view?usp=drive_link", imglog: "불용어 처리와 KONLP를 이용한 한글 형태소를 분리", sourceurl: "" })
d3.set_img(0, { imgtitle: "단어 사이즈 결정", imgurl: "https://drive.google.com/file/d/1qYfkL3w8sFyzRvGiYewc8PMBw1ABPegt/view?usp=drive_link", imglog: "단어의 출현 빈도를 계산한 사전 사이즈 결정", sourceurl: "" })
d3.set_img(0, { imgtitle: "문장 사이즈 결정", imgurl: "https://drive.google.com/file/d/1qYfkL3w8sFyzRvGiYewc8PMBw1ABPegt/view?usp=drive_link", imglog: "문장길이별 히스토그램 분석으로 최대 문장의 길이 결정", sourceurl: "" })
d3.set_img(0, { imgtitle: "문장 정합성 확인과 정수 변경", imgurl: "https://drive.google.com/file/d/1DYduVV067IeXaVjMSLHS-Cr62fr5_W7c/view?usp=drive_link", imglog: "TextVectorize를 이용한 문장의 정수 변경 및 zero 패딩 수행", sourceurl: "" })
d3.set_img(0, { imgtitle: "변경 데이터 확인", imgurl: "https://drive.google.com/file/d/1pqw0j-ob7-lqwJi5-pS6nd2RjHXK5A-K/view?usp=drive_link", imglog: "정수로 변경된 데이터와 zero 패딩된 데이터 확인", sourceurl: "" })
d3.set_content("3.2 CONV1DLSTM 모델 구성 및 훈련")//서브 타이틀
d3.set_img(1, { imgtitle: "밀집수로 변경", imgurl: "https://drive.google.com/file/d/1yWQiGNd4i7IPGuWgBKe3t4ogVbLzIv8v/view?usp=drive_link", imglog: "정수로 변경된 데이터를 Embedding 레이어를 이용한 밀집값으로 변경 여부 확인", sourceurl: "" })
d3.set_img(1, { imgtitle: "모델 구성", imgurl: "https://drive.google.com/file/d/18yZKsF1V0648l9utGQjikwUX7feXcD7n/view?usp=drive_link", imglog: "Embedding 레이어와 CONV1DLSTM 레이어를 활용한 모델 구성", sourceurl: "" })
d3.set_img(1, { imgtitle: "조기종료 콜백과 모델 훈련", imgurl: "https://drive.google.com/file/d/1GGa5TYe2WuU_YxS2T1DCUmcqIwXIOwzk/view?usp=drive_link", imglog: "조기종료 콜백을 탑재한 후 모델 훈련", sourceurl: "" })
d3.set_img(1, { imgtitle: "훈련결과 시각화", imgurl: "https://drive.google.com/file/d/1S9GW9CwFZnEaZhhyBSYQ27y-2AxlMtrG/view?usp=drive_link", imglog: "분류모델의 손실율 및 정확율 훈련 결과 그래프 시각화", sourceurl: "" })
d3.set_content("3.3 CONV1DLSTM 모델 평가")//서브 타이틀
d3.set_img(2, { imgtitle: "모델 평가", imgurl: "https://drive.google.com/file/d/1GrnVAo0TaubnkVp-0qIePYMBlboTEwSG/view?usp=drive_link", imglog: "테스트 데이터와 evaluate 메소드를 이용한 훈련된 모델의 최종 평가", sourceurl: "" })
d3.set_img(2, { imgtitle: "혼동행렬", imgurl: "https://drive.google.com/file/d/17kIDcEaVD8WKUJ0oYLggs9nqyWQXZbrd/view?usp=drive_link", imglog: "분류모델 평가를 위한 혼동행렬 그래프 출력", sourceurl: "" })
d3.set_img(2, { imgtitle: "F1 스코어", imgurl: "https://drive.google.com/file/d/1PGnWH8XFzSpL8XiUbcKv59-7RSLKiTmQ/view?usp=drive_link", imglog: "최종 F1스코어로 정밀도, 재현율, f1-score 모델 성능 판별", sourceurl: "" })
d3.set_content("3.4 CONV1DLSTM 서비스 구현")//서브 타이틀
d3.set_img(3, { imgtitle: "모델의 저장 및 확인", imgurl: "https://drive.google.com/file/d/1c-katEOisOPnGwp6s4mo18jg_s9BVqR8/view?usp=drive_link", imglog: "모델 저장후 저장된 모델 불러오기", sourceurl: "" })
d3.set_img(3, { imgtitle: "실제 데이터 입력 및 처리 구현", imgurl: "https://drive.google.com/file/d/1nsc8cGEHEWURyqltrsyFU4haRldB6OPf/view?usp=drive_link", imglog: "가상의 실제 데이터를 입력하여 최종 결과물 처리 구현", sourceurl: "" })
d3.set_img(3, { imgtitle: "모델 서비스 리팩토링", imgurl: "https://drive.google.com/file/d/15RkvVR8UG1MP-2zP0K4P6AJ2pk6nMbVe/view?usp=drive_link", imglog: "최종 서비스를 위한 모델 함수 리팩토링", sourceurl: "" })
d3.set_img(3, { imgtitle: "최종 서비스 페이지", imgurl: "", imglog: "최종 서비스 페이지 결과 화면", sourceurl: "" })
data_sets.push(d3)
