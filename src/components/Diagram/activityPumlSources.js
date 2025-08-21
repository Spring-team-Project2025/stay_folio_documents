// Export PlantUML sources used by ActivityDiagrams
export const ACTIVITY_PUML = {
  signup_duplicate_check: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:입력값 검증(이름, 이메일, 전화, 비밀번호);
:전화/이메일 정규화;
:중복체크 요청;

|Service|
if (isEmailDuplicate?) then (Y)
  :에러: 중복 이메일;
  |Controller|
  :메시지 반환(EMAIL_DUPLICATE);
  stop
else (N)
endif

if (isPhoneDuplicate?) then (Y)
  :에러: 중복 전화;
  |Controller|
  :메시지 반환(PHONE_DUPLICATE);
  stop
else (N)
endif

:비밀번호 해시 및 MemberVO 구성;
:회원 저장(handleRegister);

|Mapper/DB|
:INSERT INTO MEMBER;

|Service|
:가입 완료 후 후처리(로그/알림 선택);

|Controller|
:리다이렉트(/login);
stop
@enduml`,

  recommend_fetch: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:파라미터 파싱(rcId 또는 lcId);
:RecommendService 호출;

|Service|
if (rcId 존재?) then (Y)
  :카테고리 추천 조회;
  |Mapper/DB|
  :SELECT stays BY rcId (RecommendMapper.getRecommend);
  |Service|
else (N)
  :지역 추천 조회(lcId, limit);
  |Mapper/DB|
  :SELECT stays BY lcId LIMIT n (StayMapper.selectRecommendStayListByLcId);
  |Service|
endif
:사용자 컨텍스트 반영(북마크 플래그 등, 옵션);

|Controller|
:뷰 모델 구성(타이틀/목록/메타);
:JSON 또는 뷰로 응답;
stop
@enduml`,

  bookmark_toggle: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:인증 확인(미로그인 → 401);
:요청 파싱(miId, siId);
:BookmarkService 호출;

|Service (Tx)|
if (북마크 여부 ) then (Y)
  :BookmarkMapper.deleteBookmark(miId, siId);
  :StayMapper.decBookmarkCount(siId);
  :status=removed;
else (N)
  :BookmarkMapper.addBookmark(miId, siId);
  :StayMapper.incBookmarkCount(siId);
  :status=added;
endif
:현재 카운트 조회(옵션);

|Mapper/DB|
:INSERT/DELETE bookmark;
:UPDATE stay.bookmark_count;

|Controller|
:JSON {status, count} 반환;
stop
@enduml`,

  room_detail_and_unavailable_dates: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:params(siId, riId, checkin, checkout) 파싱;
:RoomService.getRoomDetail 호출;

|Service|
:객실 본문 조회(getRoomById);
|Mapper/DB|
:SELECT * FROM ROOM WHERE siId, riId;
|Service|
:사진/시설/어메니티 조회;
|Mapper/DB|
:SELECT photos/facilities/amenities;
|Service|
:예약불가일 계산(getReservedDates, getCheckinDates);
|Mapper/DB|
:SELECT reserved dates, checkin only;
|Service|
:Map<String, List<Date>> 로 변환;

|Controller|
:모델 바인딩 후 상세 페이지 렌더;
stop
@enduml`,

  reserve_and_price_calc: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:파라미터 수집(siId, riId, 인원, 기간);
:ReservationService.calculateRoomPrice 호출;

|Service|
:ReservationPriceMapper.getReservationPriceInfo(siId, riId);
|Mapper/DB|
:SELECT siPeak, siOff, siDiscount, riPrice;
|Service|
:기간/인원 기반 가격 계산(ResultDTO);
:중복체크 isDuplicateReservation(siId, riId, 기간);
|Mapper/DB|
:SELECT count(*) overlap;
|Service|
if (중복?) then (Y)
  |Controller|
  :에러 반환(DUPLICATE_DATE);
  stop
else (N)
  |Controller|
  :submitReservation 호출(ReservationDetailVO);
endif

|Service (Tx)|
:ReservationMapper.insertReservation(vo);
|Mapper/DB|
:INSERT INTO RESERVATION;
|Service|
:이메일/알림 큐잉(옵션);

|Controller|
:완료 페이지로 리다이렉트;
stop
@enduml`,

  cancel_reservation: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:srId/검증정보 수신;
:ReservationService.getReservationById(srId) 호출;

|Service|
|Mapper/DB|
:SELECT reservation for cancel;
|Service|
if (취소 가능 상태?) then (Y)
  :ReservationService.cancelReservation(srId);
  |Mapper/DB|
  :UPDATE reservation SET status='CANCELLED';
  |Service|
  :환불/알림 처리(옵션);
else (N)
  |Controller|
  :취소 불가 메시지;
  stop
endif

|Controller|
:취소 완료 안내 후 목록/상세 이동;
stop
@enduml`,

  search_suggestions: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:q 파라미터 수신 및 sanitize;
:StayService.searchStaysSuggestions(q) 호출;

|Service|
|Mapper/DB|
:SELECT siName LIKE keyword LIMIT 10;
|Service|
:필요 시 북마크 플래그 매핑(옵션);

|Controller|
:JSON 배열 반환(시리얼라이즈);
stop
@enduml`,

  admin_stay_register_two_steps: `@startuml
skinparam activityArrowColor Black
skinparam activityBackgroundColor White
skinparam wrapWidth 220
skinparam maxMessageSize 200

|Controller|
start
:기본정보 수집(stay);
:유효성 검사(필수, 형식, 길이);
if (유효?) then (Y)
  :StayService.insertStayInfo(stay, null, null, null) 호출;
else (N)
  :오류 응답(VALIDATION_ERROR);
  stop
endif

|Service (Tx-1)|
:StayMapper.insertStayInfo(stay);

|Mapper/DB|
:INSERT t_stay_info;
:siId 생성값 조회(IDENTITY/RETURNING);

|Service (Tx-1)|
:stay.siId 세팅;

|Controller|
:siId hidden 저장;
:상세/키워드/이미지 단계 이동;

|Controller|
:상세(detail), 키워드(keywordIds), 파일(files: spKind 포함) 제출;
:StayService.saveDetailAndAssets(siId, detail, keywordIds, files) 호출;

|Service (Tx-2)|
:StayMapper.insertOrUpdateStayDetail(detail);
:StayMapper.deleteKeywordsByStayId(siId);
if (keywordIds 비어있음?) then (Y)
  :키워드 저장 스킵;
else (N)
  while (다음 rcId 있음?)
    :StayMapper.insertKeywordForStay(siId, rcId);
  endwhile
endif
:S3 업로드(files) -> spUrl 목록 확보;

while (다음 파일 있음?)
  :cat = file.spKind;
  :range = getRange(cat);  ' COVER 0 | NORMAL 1..2 | FEATURE 3..5 | FEAT1 6..8 | FEAT2 9..11

  |Mapper/DB|
  :SELECT MAX(sp_idx) BETWEEN range;  ' getMaxSpIdx

  |Service (Tx-2)|
  :currMax = 결과값;
  if (currMax < range.end) then (Y)
    :spIdx = max(range.start, currMax + 1);
  else (N)
    if (정책 == UPDATE_OLDEST?) then (Y)
      |Mapper/DB|
      :SELECT OLDEST(sp_idx) BETWEEN range;  ' findOldestPhoto
      |Service (Tx-2)|
      :spIdx = oldest.spIdx (update 모드);
    else (N)
      :에러목록에 CATEGORY_FULL 추가;
      :이 파일 스킵;
    endif
  endif

  if (existsStayPhoto(siId, spUrl?)) then (Y)
    :StayMapper.updateStayPhoto(siId, spIdx, spUrl);
  else (N)
    :StayMapper.insertStayPhoto(siId, spIdx, spUrl);
  endif
endwhile

|Mapper/DB|
:INSERT/UPDATE t_stay_info_detail;
:DELETE t_stay_recommend by siId;
:INSERT t_stay_recommend (siId, rcId);
:INSERT/UPDATE t_stay_photo;

|Service (Tx-2)|
if (예외 발생?) then (Y)
  :롤백 및 오류 응답 구성;
else (N)
  :커밋 및 성공(경고 포함 가능);
endif

|Controller|
if (성공?) then (Y)
  :/admin/stay/detail 로 리다이렉트;
  stop
else (N)
  :플래시 에러와 함께 편집화면 복귀;
  stop
endif
@enduml`,
};
