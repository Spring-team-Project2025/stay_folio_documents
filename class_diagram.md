```mermaid
classDiagram
direction TB
class AmenityVO {

- equals(Object) boolean

# canEqual(Object) boolean

- hashCode() int
- toString() String
- AmenityVO()
  String raName
  Integer aiIdx

* Integer aiIdx
* String raName
  }
  class BookmarkController {

- addBookmark(int, Principal) ResponseEntity~Map~String, Object~~
- removeBookmark(int, Principal) ResponseEntity~Map~String, Object~~
- BookmarkController()
  }
  class BookmarkMapper {
  <<Interface>>
- addBookmark(String, int) int
- deleteBookmark(String, int) int
- getBookmarkList(String) List~Integer~
  }
  class BookmarkService {
  <<Interface>>
- deleteBookmark(String, int) int
- addBookmark(String, int) int
- getBookmarkList(String) List~Integer~
  }
  class BookmarkServiceImpl {
- addBookmark(String, int) int
- getBookmarkList(String) List~Integer~
- deleteBookmark(String, int) int
- BookmarkServiceImpl()
  }
  class CommonController {
- getRecommendStays(int, Principal) Map~String, Object~
- findGuestReservationJson(String, String, HttpSession) Map~String, Object~
- guestLoginForm() String
- checkPhone(String) String
- loginPage(String, HttpServletRequest, Model) String
- checkEmail(String) String
- registerPage() String
- home(Locale, Model) String
- handleRegister(MemberVO) String
- CommonController()
  }
  class CommonMapper {
  <<Interface>>
- handleRegister(MemberVO) int
- read(String) MemberVO
- countByEmail(String) int
- countByPhone(String) int
  }
  class CommonService {
  <<Interface>>
- handleRegister(MemberVO) int
- isEmailDuplicate(String) boolean
- getRecommend(int, String) Map~String, Object~
- isPhoneDuplicate(String) boolean
  }
  class CommonServiceImpl {
- isPhoneDuplicate(String) boolean
- handleRegister(MemberVO) int
- isEmailDuplicate(String) boolean
- getRecommend(int, String) Map~String, Object~
- CommonServiceImpl()
  }
  class FacilityVO {

# canEqual(Object) boolean

- toString() String
- hashCode() int
- equals(Object) boolean
- FacilityVO()
  String fiName
  Integer riId
  String fiIcon
  Integer fiId
  Integer siId

* Integer siId
* String fiName
* String fiIcon
* Integer fiId
* Integer riId
  }
  class LocationCategoryVO {

- equals(Object) boolean

# canEqual(Object) boolean

- hashCode() int
- toString() String
- LocationCategoryVO()
  String lcName
  int lcId
  int count

* int count
* int lcId
* String lcName
  }
  class MemberVO {

- hashCode() int
- toString() String
- equals(Object) boolean

# canEqual(Object) boolean

- MemberVO()
  boolean miIsad
  boolean miEnabled
  String miId
  Date miDate
  String miPw
  String miPhone
  List~String~ roles
  String miBirth
  String miGender
  String miName

* String miId
* Date miDate
* String miName
* boolean miIsad
* List~String~ roles
* String miBirth
* String miPw
* String miGender
* String miPhone
* boolean miEnabled
  }
  class MypageMapper {
  <<Interface>>

- getUpcomingReservationByMember(String) List~ReservationListVO~
- updatePassword(String, String) int
- countByPhoneNormalizedExceptSelf(String, String) int
- updateProfile(MemberVO) int
- getReservationDetail(String) ReservationDetailVO
- getCompletedReservationsByMember(String) List~ReservationListVO~
- getCompletedStayCount(String) int
- countByPhoneNormalized(String) int
- getBookMarkList(String) List~StayVO~
  }
  class MypageService {
  <<Interface>>
- changePassword(String, String, String) void
- getCompletedStayCount(String) int
- updateMemberProfile(MemberVO) void
- getUpcomingReservationByMember(String) List~ReservationListVO~
- getCompletedReservationsByMember(String) List~ReservationListVO~
- getBookMarkList(String) List~StayVO~
- countByPhoneNormalizedExceptSelf(String, String) int
- getReservationDetail(String) ReservationDetailVO
- readMemberById(String) MemberVO
- countByPhoneNormalized(String) int
  }
  class MypageServiceImpl {
- getUpcomingReservationByMember(String) List~ReservationListVO~
- readMemberById(String) MemberVO
- changePassword(String, String, String) void
- countByPhoneNormalized(String) int
- updateMemberProfile(MemberVO) void
- getBookMarkList(String) List~StayVO~
- getCompletedStayCount(String) int
- getReservationDetail(String) ReservationDetailVO
- getCompletedReservationsByMember(String) List~ReservationListVO~
- countByPhoneNormalizedExceptSelf(String, String) int
- MypageServiceImpl()
  }
  class RecommendCategoryVO {
- toString() String

# canEqual(Object) boolean

- equals(Object) boolean
- hashCode() int
- RecommendCategoryVO()
  String rcDetailBottom
  Integer rcId
  int siNum
  String rcDetailTop
  String rcName

* String rcName
* int siNum
* Integer rcId
* String rcDetailTop
* String rcDetailBottom
  }
  class RecommendMapper {
  <<Interface>>

- getRecommend(int) List~StayVO~
- getRecommendTitle(int) String
  }
  class ReservationCancelCheckVO {
- equals(Object) boolean
- toString() String

# canEqual(Object) boolean

- hashCode() int
- ReservationCancelCheckVO()
  String srTel
  String miId
  String srStatus
  String srId
  String srEmail
  String siName
  Date srCheckin

* String srEmail
* Date srCheckin
* String siName
* String miId
* String srTel
* String srStatus
* String srId
  }
  class ReservationController {

- cancelReservation(String, RedirectAttributes) String
- submitReservation(ReservationDetailVO, RedirectAttributes) String
- guestReservationDetail(String, Model, RedirectAttributes, HttpSession) String
- reservationCancelPage(String, String, HttpSession, Model, RedirectAttributes) String
- reservationComplete(String, Model) String
- reservationPage(int, int, String, String, int, int, Model, Principal, HttpServletRequest, RedirectAttributes) String
- checkAvailable(int, int, LocalDate, LocalDate) ResponseEntity~Map~String, Object~~
- ReservationController(ReservationService)
  }
  class ReservationDTO {

# canEqual(Object) boolean

- equals(Object) boolean
- toString() String
- hashCode() int
- ReservationDTO()
  double siPeak
  String srStatus
  String srEmail
  int srAddpersonFee
  LocalDate srCheckin
  double siDiscount
  String siAddress
  int srChild
  String srName
  String miId
  int srTotalprice
  int srAdult
  String srId
  String srRequest
  String srPhone
  String siName
  int riPrice
  double siOff
  String srPayment
  int siId
  String riName
  int siExtra
  int srBaby
  String siEmail
  int riId
  int riPerson
  LocalDate srCheckout
  int riMaxperson
  String siPhone
  long nights

* LocalDate srCheckin
* int riId
* String srRequest
* int siExtra
* int srTotalprice
* int srChild
* String srPhone
* int srAddpersonFee
* double siOff
* long nights
* int srBaby
* String siEmail
* LocalDate srCheckout
* String siPhone
* double siPeak
* String srPayment
* int riPrice
* String srName
* int srAdult
* int riMaxperson
* double siDiscount
* String siAddress
* String srEmail
* String riName
* String siName
* int riPerson
* String miId
* String srStatus
* int siId
* String srId
  }
  class ReservationDetailVO {

- hashCode() int

# canEqual(Object) boolean

- equals(Object) boolean
- toString() String
- ReservationDetailVO()
  double siPeak
  String riType
  String srEmail
  double siDiscount
  String riBed
  String riDesc
  int srTotalprice
  int srAdult
  String srRequest
  String srPhone
  String siName
  String srPayment
  int siId
  String siCheckout
  String siCheckin
  String message
  Timestamp srPaydate
  int siExtra
  String miName
  String siEmail
  int riId
  int riMaxperson
  String siPhone
  Timestamp srCheckout
  long nights
  Timestamp srCheckin
  String srStatus
  String miPhone
  int srAddpersonFee
  String siAddress
  int srChild
  String srName
  int srDiscount
  String miId
  String srId
  String spUrl
  Date srCancledate
  String status
  int riPrice
  double siOff
  int riBathroom
  int riBedcnt
  String riName
  double seasonRate
  String srPaymentstatus
  int riPerson
  int srRoomprice
  Timestamp srDate
  int riBedroom

* int srAdult
* String srPayment
* Timestamp srCheckin
* String srPaymentstatus
* int riPerson
* double siOff
* long nights
* Timestamp srCheckout
* int riId
* int srTotalprice
* int srRoomprice
* String srRequest
* String status
* String siCheckin
* String srEmail
* int riBedroom
* Timestamp srDate
* double siDiscount
* String riName
* Timestamp srPaydate
* int riBathroom
* int srAddpersonFee
* String srStatus
* String srId
* double seasonRate
* String message
* String riDesc
* String riType
* String srPhone
* String siEmail
* String siName
* int riBedcnt
* String spUrl
* Date srCancledate
* int srChild
* String miName
* String srName
* double siPeak
* int riMaxperson
* int riPrice
* String miId
* String riBed
* String siPhone
* String miPhone
* String siCheckout
* String siAddress
* int siId
* int srDiscount
* int siExtra
  }
  class ReservationListVO {

- equals(Object) boolean
- hashCode() int
- toString() String

# canEqual(Object) boolean

- ReservationListVO()
  int siId
  String srStatus
  String riName
  Date srCheckin
  int srChild
  int riId
  int srTotalprice
  int srAdult
  String srId
  String spUrl
  Date srCheckout
  int nights
  String siName

* int srAdult
* String srStatus
* int srChild
* int nights
* String riName
* int srTotalprice
* Date srCheckout
* String siName
* String spUrl
* Date srCheckin
* int siId
* int riId
* String srId
  }
  class ReservationMapper {
  <<Interface>>

- selectReservationById(String) ReservationDetailVO
- insertReservation(ReservationDetailVO) int
- cancelReservation(String) int
- getReservationPageInfo(int, int, String) ReservationDetailVO
- selectReservationForCancel(String) ReservationCancelCheckVO
- checkDuplicateReservation(int, int, Date, Date) int
  }
  class ReservationPriceMapper {
  <<Interface>>
- getReservationPriceInfo(int, int) ReservationDTO
  }
  class ReservationService {
  <<Interface>>
- getReservationById(String) ReservationCancelCheckVO
- cancelReservation(String) int
- isDuplicateReservation(int, int, Timestamp, Timestamp) boolean
- getReservationPageInfo(int, int, String, LocalDate, LocalDate, int, int) ReservationDetailVO
- getReservationPageInfo(int, int, String) ReservationDetailVO
- getReservation(String) ReservationDetailVO
- calculateRoomPrice(int, int, LocalDate, LocalDate, int, int) ReservationPriceResultDTO
- reserve(ReservationDetailVO) int
  }
  class ReservationServiceImpl {
- getReservation(String) ReservationDetailVO
- isDuplicateReservation(int, int, Timestamp, Timestamp) boolean

* getSeasonRate(LocalDate, ReservationDTO) double

- getReservationById(String) ReservationCancelCheckVO

* calculatePrice(LocalDate, LocalDate, ReservationDetailVO, ReservationDTO) ReservationPriceResultDTO

- cancelReservation(String) int
- getReservationPageInfo(int, int, String, LocalDate, LocalDate, int, int) ReservationDetailVO
- getReservationPageInfo(int, int, String) ReservationDetailVO

* processEmail(ReservationDetailVO) void

- calculateRoomPrice(int, int, LocalDate, LocalDate, int, int) ReservationPriceResultDTO
- reserve(ReservationDetailVO) int
- ReservationServiceImpl(ReservationMapper, ReservationPriceMapper)
  }
  class RoomController {
- getRoomDetail(int, int, LocalDate, LocalDate, Integer, Integer, Model) String
- StayDetail(Integer, Model, Principal, HttpServletResponse) String
- searchPage(int, int, LocalDate, LocalDate, int, int, Model, Principal) String
- getUnavailableDates(int, int) Map~String, List~String~~
- RoomController()
  }
  class RoomMapper {
  <<Interface>>
- insertRoomAmenity(int, int, Integer) void
- insertRoom(RoomVO) void
- insertRoomFacility(int, int, int) void
- getRoomById(int, int) RoomVO
- getAmenitiesByRoomId(int, int) List~AmenityVO~
- getFacilitiesByRoomId(int, int) List~FacilityVO~
- getMainPhotosForAllRooms(int) List~RoomPhotoVO~
- getReservedDates(int, int) List~Date~
- getCheckinDates(int, int) List~Date~
- insertRoomPhoto(RoomPhotoVO) void
- deleteFacilitiesByRoomId(int, int) void
- deleteAmenitiesByRoomId(int, int) void
- existsRoomPhoto(RoomPhotoVO) boolean
- updateRoomPhoto(RoomPhotoVO) void
- getOtherRoomsByStayId(int, int) List~RoomVO~
- getRoomPhotos(int, int) List~RoomPhotoVO~
- updateRoom(RoomVO) void
  List~AmenityVO~ allAmenities
  }
  class RoomPhotoVO {
- toString() String
- equals(Object) boolean

# canEqual(Object) boolean

- hashCode() int
- RoomPhotoVO()
  int siId
  int riId
  int spIdx
  String spUrl

* int spIdx
* String spUrl
* int siId
* int riId
  }
  class RoomService {
  <<Interface>>

- getRoomPhotosByCategory(int, int) Map~String, List~RoomPhotoVO~~
- updateRoomAmenities(int, int, List~Integer~) void
- getFacilitiesByRoomId(int, int) List~FacilityVO~
- insertRoom(RoomVO, List~Integer~, List~Integer~) int
- getMainPhotoForRooms(int) Map~Integer, RoomPhotoVO~
- getAmenitiesByRoomId(int, int) List~AmenityVO~
- updateRoom(RoomVO) void
- getUnavailableDateMap(int, int) Map~String, List~Date~~
- getRoomById(int, int) RoomVO
- getOtherRoomsByStayId(int, int) List~RoomVO~
- getAllRoomPhotos(int, int) List~RoomPhotoVO~
- updateRoomFacilities(int, int, List~Integer~) void
  List~AmenityVO~ allAmenities
  }
  class RoomServiceImpl {
- getMainPhotoForRooms(int) Map~Integer, RoomPhotoVO~
- updateRoomAmenities(int, int, List~Integer~) void
- getUnavailableDateMap(int, int) Map~String, List~Date~~
- updateRoom(RoomVO) void
- getAmenitiesByRoomId(int, int) List~AmenityVO~
- insertRoom(RoomVO, List~Integer~, List~Integer~) int
- getRoomPhotosByCategory(int, int) Map~String, List~RoomPhotoVO~~
- getFacilitiesByRoomId(int, int) List~FacilityVO~
- getAllRoomPhotos(int, int) List~RoomPhotoVO~
- updateRoomFacilities(int, int, List~Integer~) void
- getRoomById(int, int) RoomVO
- getOtherRoomsByStayId(int, int) List~RoomVO~
- RoomServiceImpl()
  List~AmenityVO~ allAmenities
  }
  class RoomVO {

# canEqual(Object) boolean

- equals(Object) boolean
- toString() String
- hashCode() int
- RoomVO()
  String riBathroom
  Integer riMaxperson
  String riType
  Integer discountedPrice
  Integer riId
  String riName
  String riShow
  String riBedroom
  String riBed
  Integer riPrice
  String riDesc
  Double riArea
  String riDate
  Integer riBedcnt
  Integer riPerson
  Integer siId
  String riDelete

* String riDelete
* Integer riPerson
* String riBedroom
* Integer discountedPrice
* String riBathroom
* Integer siId
* String riType
* String riBed
* Integer riId
* Integer riBedcnt
* String riName
* Integer riMaxperson
* String riShow
* String riDate
* Integer riPrice
* String riDesc
* Double riArea
  }
  class SearchController {

- getSuggestions(String) List~StayVO~
- SearchController()
  }
  class StayDetailVO {
- equals(Object) boolean

# canEqual(Object) boolean

- hashCode() int
- toString() String
- StayDetailVO()
  int siId
  String siCheckout
  String siCheckin
  String siCeo
  String siFeat2
  String siFeat1
  String siFeatTitle1
  String siAddress
  boolean siParking
  boolean siPet
  String siAddrdesc
  String siBiznum
  String siEmail
  String siNotice
  String siFeatTitle2
  String siPhone
  String siDesc2
  String siBizname
  String siDesc1
  String siInstagram
  boolean siFood

* int siId
* String siPhone
* String siAddress
* String siFeat1
* String siFeat2
* String siEmail
* String siAddrdesc
* String siBizname
* String siFeatTitle1
* String siInstagram
* boolean siFood
* String siDesc1
* String siBiznum
* String siCheckin
* String siFeatTitle2
* String siCeo
* boolean siParking
* String siNotice
* boolean siPet
* String siDesc2
* String siCheckout
  }
  class StayMapper {
  <<Interface>>

- insertFacility(int, int) void
- selectStayDetail(int) StayDetailVO
- deleteFacilitiesByStayId(int) void
- insertFacilityRel(int, int) void
- selectStayInfo(int) StayVO
- getFacilitiesByStayId(int) List~FacilityVO~
- existsStayPhoto(PhotoVO) boolean
- incBookmarkCount(int) int
- searchStaysSuggestions(String) List~StayVO~
- updateStay(StayVO) void
- updateStayDetail(StayDetailVO) void
- insertStayInfo(StayVO) void
- selectStayListByLcId(int) List~StayVO~
- getStayPhotos(int) List~PhotoVO~
- insertStayPhoto(PhotoVO) void
- selectStayListFiltered(Map~String, Object~) List~StaySearchResultVO~
- insertStayDetail(StayDetailVO) void
- updateStayPhoto(PhotoVO) void
- getKeywordByStayId(int) List~RecommendCategoryVO~
- selectRandomStayList() List~StayVO~
- getTotalCount(Criteria) int
- getRoomsByStayId(int) List~RoomVO~
- deleteKeywordsByStayId(int) void
- decBookmarkCount(int) int
- getListWithPaging(Criteria) List~StayVO~
- insertKeywordForStay(int, int) void
- getKeywordIdsByStayId(int) List~Integer~
- selectRecommendStayListByLcId(int, int) List~StayVO~
  List~RecommendCategoryVO~ allKeywords
  List~StayVO~ allStays
  List~FacilityVO~ allFacilities
  List~LocationCategoryVO~ allLocations
  int lastInsertId
  }
  class StaySearchResultVO {
- toString() String

# canEqual(Object) boolean

- hashCode() int
- equals(Object) boolean
- StaySearchResultVO()
  int siId
  Integer lcId
  Integer siBook
  String siDelete
  Integer discountedPrice
  String siShow
  int rcId
  Double siDiscount
  int totalPerson
  String siDesc
  String siLoca
  Date siDate
  Integer siMinperson
  Double siPeak
  Integer siMaxperson
  Double discount
  boolean bookmarked
  String spUrl
  Integer siExtra
  int siMinprice
  String siName
  Double siOff
  Integer siReview

* String siLoca
* Integer siBook
* int siId
* int rcId
* Double discount
* Integer lcId
* Integer siReview
* int totalPerson
* String siName
* Integer siMaxperson
* Double siPeak
* Integer siExtra
* String siDelete
* int siMinprice
* Integer discountedPrice
* String siShow
* Double siOff
* Integer siMinperson
* boolean bookmarked
* String spUrl
* String siDesc
* Date siDate
* Double siDiscount
  }
  class StayService {
  <<Interface>>

- updateStay(StayVO) void
- getTotalCount(Criteria) int
- updateStayKeywords(int, List~Integer~) void
- getStayListFiltered(Map~String, Object~) List~StaySearchResultVO~
- getKeywordIdsByStayId(int) List~Integer~
- insertStayInfo(StayVO, StayDetailVO, List~Integer~, List~Integer~) void
- searchStaysSuggestions(String) List~StayVO~
- getListWithPaging(Criteria) List~StayVO~
- getStayListByLcId(int) List~StayVO~
- insertFacilityRel(int, int) void
- getFacilitiesByStayId(int) List~FacilityVO~
- insertStayDetail(StayDetailVO) void
- getRoomsByStayId(int) List~RoomVO~
- getAllStayPhotos(int) List~PhotoVO~
- getStayDetail(int) StayDetailVO
- updateStayDetail(StayDetailVO) void
- getStayPhotosByCategory(int) Map~String, List~PhotoVO~~
- getKeywordByStayId(int) List~RecommendCategoryVO~
- updateStayFacilities(int, List~Integer~) void
- getStayInfo(int) StayVO
  List~RecommendCategoryVO~ allKeywords
  List~StayVO~ allStays
  List~FacilityVO~ allFacilities
  List~LocationCategoryVO~ allLocations
  List~StayVO~ randomStayList
  int lastInsertId
  }
  class StayServiceImpl {
- insertFacilityRel(int, int) void
- getStayInfo(int) StayVO
- getListWithPaging(Criteria) List~StayVO~
- searchStaysSuggestions(String) List~StayVO~
- getStayDetail(int) StayDetailVO
- getFacilitiesByStayId(int) List~FacilityVO~
- getKeywordByStayId(int) List~RecommendCategoryVO~
- getStayListByLcId(int) List~StayVO~
- getStayListFiltered(Map~String, Object~) List~StaySearchResultVO~
- getAllStayPhotos(int) List~PhotoVO~
- updateStayFacilities(int, List~Integer~) void
- insertStayInfo(StayVO, StayDetailVO, List~Integer~, List~Integer~) void
- getRoomsByStayId(int) List~RoomVO~
- getStayPhotosByCategory(int) Map~String, List~PhotoVO~~
- getTotalCount(Criteria) int
- updateStayKeywords(int, List~Integer~) void
- updateStayDetail(StayDetailVO) void
- updateStay(StayVO) void
- insertStayDetail(StayDetailVO) void
- getKeywordIdsByStayId(int) List~Integer~
- StayServiceImpl()
  List~RecommendCategoryVO~ allKeywords
  List~StayVO~ allStays
  List~FacilityVO~ allFacilities
  List~LocationCategoryVO~ allLocations
  List~StayVO~ randomStayList
  int lastInsertId
  }
  class StayVO {
- toString() String
- hashCode() int
- equals(Object) boolean

# canEqual(Object) boolean

- StayVO()
  int siId
  Integer lcId
  Integer siBook
  int reserveCount
  String siDelete
  Integer discountedPrice
  String siShow
  Double siDiscount
  String siDesc
  String siLoca
  Integer siMinprice
  Integer siMinperson
  Double siPeak
  Integer siMaxperson
  String siDate
  Double discount
  boolean bookmarked
  String spUrl
  Integer siExtra
  String siName
  Double siOff
  Integer siReview

* Double siPeak
* String siLoca
* Integer siReview
* String siDesc
* Double siOff
* Double discount
* String siShow
* Integer lcId
* Integer siMaxperson
* Integer siExtra
* int siId
* String siName
* Integer discountedPrice
* int reserveCount
* String siDate
* Integer siMinprice
* boolean bookmarked
* String siDelete
* Integer siMinperson
* Integer siBook
* String spUrl
* Double siDiscount
  }

BookmarkController "1" _--> "bookmarkService 1" BookmarkService
BookmarkServiceImpl "1" _--> "bookmarkMapper 1" BookmarkMapper
BookmarkServiceImpl ..> BookmarkService
BookmarkServiceImpl "1" _--> "stayMapper 1" StayMapper
CommonController "1" _--> "commonService 1" CommonService
CommonController ..> MemberVO
CommonController "1" _--> "mypageService 1" MypageService
CommonController ..> ReservationDetailVO
CommonMapper ..> MemberVO
CommonService ..> MemberVO
CommonServiceImpl "1" _--> "bookmarkService 1" BookmarkService
CommonServiceImpl "1" _--> "commonMapper 1" CommonMapper
CommonServiceImpl ..> CommonService
CommonServiceImpl ..> MemberVO
CommonServiceImpl "1" _--> "recommendMapper 1" RecommendMapper
CommonServiceImpl ..> StayVO
MypageMapper ..> MemberVO
MypageMapper ..> ReservationDetailVO
MypageMapper ..> ReservationListVO
MypageMapper ..> StayVO
MypageService ..> MemberVO
MypageService ..> ReservationDetailVO
MypageService ..> ReservationListVO
MypageService ..> StayVO
MypageServiceImpl "1" _--> "commonMapper 1" CommonMapper
MypageServiceImpl ..> MemberVO
MypageServiceImpl "1" _--> "mypageMapper 1" MypageMapper
MypageServiceImpl ..> MypageService
MypageServiceImpl ..> ReservationDetailVO
MypageServiceImpl ..> ReservationListVO
MypageServiceImpl ..> StayVO
RecommendMapper ..> StayVO
ReservationController "1" _--> "mypageService 1" MypageService
ReservationController ..> ReservationCancelCheckVO
ReservationController ..> ReservationDetailVO
ReservationController "1" _--> "reservationService 1" ReservationService
ReservationMapper ..> ReservationCancelCheckVO
ReservationMapper ..> ReservationDetailVO
ReservationPriceMapper ..> ReservationDTO
ReservationService ..> ReservationCancelCheckVO
ReservationService ..> ReservationDetailVO
ReservationServiceImpl ..> ReservationCancelCheckVO
ReservationServiceImpl ..> ReservationDTO
ReservationServiceImpl ..> ReservationDetailVO : «create»
ReservationServiceImpl "1" _--> "mapper 1" ReservationMapper
ReservationServiceImpl "1" _--> "priceMapper 1" ReservationPriceMapper
ReservationServiceImpl ..> ReservationService
ReservationServiceImpl ..> ReservationServiceImpl
RoomController ..> AmenityVO
RoomController "1" _--> "bookmarkService 1" BookmarkService
RoomController ..> FacilityVO
RoomController "1" _--> "reservationService 1" ReservationService
RoomController ..> RoomPhotoVO
RoomController "1" _--> "roomService 1" RoomService
RoomController ..> RoomVO
RoomController ..> StayDetailVO
RoomController ..> StaySearchResultVO
RoomController "1" _--> "stayService 1" StayService
RoomController ..> StayVO
RoomMapper ..> AmenityVO
RoomMapper ..> FacilityVO
RoomMapper ..> RoomPhotoVO
RoomMapper ..> RoomVO
RoomService ..> AmenityVO
RoomService ..> FacilityVO
RoomService ..> RoomPhotoVO
RoomService ..> RoomVO
RoomServiceImpl ..> AmenityVO
RoomServiceImpl ..> FacilityVO
RoomServiceImpl "1" _--> "roomMapper 1" RoomMapper
RoomServiceImpl ..> RoomPhotoVO
RoomServiceImpl ..> RoomService
RoomServiceImpl ..> RoomVO
SearchController "1" _--> "stayService 1" StayService
SearchController ..> StayVO
StayMapper ..> FacilityVO
StayMapper ..> LocationCategoryVO
StayMapper ..> RecommendCategoryVO
StayMapper ..> RoomVO
StayMapper ..> StayDetailVO
StayMapper ..> StaySearchResultVO
StayMapper ..> StayVO
StayService ..> FacilityVO
StayService ..> LocationCategoryVO
StayService ..> RecommendCategoryVO
StayService ..> RoomVO
StayService ..> StayDetailVO
StayService ..> StaySearchResultVO
StayService ..> StayVO
StayServiceImpl ..> FacilityVO
StayServiceImpl ..> LocationCategoryVO
StayServiceImpl ..> RecommendCategoryVO
StayServiceImpl ..> RoomVO
StayServiceImpl ..> StayDetailVO
StayServiceImpl "1" *--> "stayMapper 1" StayMapper
StayServiceImpl ..> StaySearchResultVO
StayServiceImpl ..> StayService
StayServiceImpl ..> StayVO
```
