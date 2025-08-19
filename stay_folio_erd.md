classDiagram
direction BT
class T*AMENITIES_INFO {
varchar2(30 char) RA_NAME
number(*) AI*IDX
}
class T_FACILITY_INFO {
varchar2(25 char) FI_NAME
varchar2(50) FI_ICON
number(*) FI*ID
}
class T_LOCATION_CATEGORY {
varchar2(20) LC_NAME
number(*) LC*ID
}
class T_MEMBER_INFO {
varchar2(100) MI_PW
varchar2(20) MI_NAME
char(1) MI_GENDER
char(10) MI_BIRTH
varchar2(13) MI_PHONE
char(1) MI_ISAD
date MI_DATE
char(1) MI_ENABLED
varchar2(50) MI_ID
}
class T_MEMBER_ROLE {
varchar2(50) MI_ID
varchar2(50) MR_NAME
}
class T_RECOMMEND_CATEGORY {
varchar2(50) RC_NAME
varchar2(500) RC_DETAIL_TOP
varchar2(500) RC_DETAIL_BOTTOM
varchar2(255) RC_ICON
number(*) RC*ID
}
class T_ROOM_AMENITIES {
number(*) RA*IDX
number(*) SI*ID
number(*) RI*ID
number(*) AI*IDX
}
class T_ROOM_FACILITY_REL {
number(*) SI*ID
number(*) RI*ID
number(*) FI*ID
}
class T_ROOM_INFO {
char(1) RI_TYPE
varchar2(80) RI_NAME
varchar2(500 char) RI_DESC
number(3) RI_PERSON
number(3) RI_MAXPERSON
number(5,2) RI_AREA
varchar2(55) RI_BED
number(2) RI_BEDCNT
number(*) RI*PRICE
char(1) RI_SHOW
char(1) RI_DELETE
date RI_DATE
number(*) RI*BEDROOM
number(*) RI*BATHROOM
number(*) SI*ID
number(*) RI*ID
}
class T_ROOM_PHOTO {
varchar2(255) SP_URL
number(*) SI*ID
number(*) RI*ID
number(*) SP*IDX
}
class T_STAY_BOOKMARKS {
date SB_REGDATE
varchar2(20) MI_ID
number(*) SI*ID
}
class T_STAY_FACILITY_REL {
number(*) SI*ID
number(*) FI*ID
}
class T_STAY_INFO {
varchar2(50) SI_NAME
varchar2(200) SI_DESC
varchar2(50) SI_LOCA
number(*) LC*ID
number(*) SI*BOOK
number(*) SI*REVIEW
number(*) SI*MINPERSON
number(*) SI*MAXPERSON
number(*) SI*MINPRICE
number(*) SI*EXTRA
number(4,2) SI_PEAK
number(4,2) SI_OFF
number(4,2) SI_DISCOUNT
char(1) SI_SHOW
char(1) SI_DELETE
date SI_DATE
number(*) SI*ID
}
class T_STAY_INFO_DETAIL {
varchar2(500) SI_NOTICE
varchar2(3000 char) SI_DESC1
varchar2(3000 char) SI_DESC2
varchar2(1000 char) SI_FEAT1
varchar2(1000 char) SI_FEAT2
varchar2(150 char) SI_ADDRESS
varchar2(300) SI_ADDRDESC
varchar2(15) SI_PHONE
varchar2(40 char) SI_EMAIL
varchar2(100 char) SI_INSTAGRAM
varchar2(50 char) SI_BIZNAME
char(15) SI_BIZNUM
varchar2(30 char) SI_CEO
char(1) SI_PET
char(1) SI_PARKING
char(1) SI_FOOD
char(5) SI_CHECKIN
char(5) SI_CHECKOUT
varchar2(50 char) SI_FEAT_TITLE1
varchar2(25 char) SI_FEAT_TITLE2
number(*) SI*ID
}
class T_STAY_PHOTO {
number(*) RI*ID
varchar2(255) SP_URL
number(*) SI*ID
number(*) SP*IDX
}
class T_STAY_RECOMMEND {
number(*) RC*ID
number(*) SI*ID
number(*) SR*IDX
}
class T_STAY_RESERVATION {
number(*) SI*ID
number(*) RI*ID
varchar2(50) MI_ID
varchar2(20) SR_NAME
varchar2(50) SR_EMAIL
varchar2(13) SR_PHONE
clob SR_REQUEST
date SR_DATE
number(*) SR*ADULT
number(*) SR*CHILD
date SR_CHECKIN
date SR_CHECKOUT
number(*) SR*ROOMPRICE
number(*) SR*DISCOUNT
number(*) SR_ADDPERSON_FEE
number(\*) SR_TOTALPRICE
varchar2(30) SR_PAYMENT
date SR_PAYDATE
date SR_CANCLEDATE
varchar2(1) SR_STATUS
char(1) SR_PAYMENTSTATUS
char(15) SR_ID
}

T_MEMBER_ROLE --> T_MEMBER_INFO : MI_ID
T_ROOM_AMENITIES --> T_ROOM_INFO : SI_ID, RI_ID
T_ROOM_AMENITIES --> T_STAY_INFO : SI_ID
T_ROOM_FACILITY_REL --> T_FACILITY_INFO : FI_ID
T_ROOM_FACILITY_REL --> T_ROOM_INFO : SI_ID, RI_ID
T_ROOM_FACILITY_REL --> T_STAY_INFO : SI_ID
T_ROOM_INFO --> T_STAY_INFO : SI_ID
T_ROOM_PHOTO --> T_ROOM_INFO : SI_ID, RI_ID
T_ROOM_PHOTO --> T_STAY_INFO : SI_ID
T_STAY_BOOKMARKS --> T_MEMBER_INFO : MI_ID
T_STAY_BOOKMARKS --> T_STAY_INFO : SI_ID
T_STAY_FACILITY_REL --> T_FACILITY_INFO : FI_ID
T_STAY_FACILITY_REL --> T_STAY_INFO : SI_ID
T_STAY_INFO --> T_LOCATION_CATEGORY : LC_ID
T_STAY_INFO_DETAIL --> T_STAY_INFO : SI_ID
T_STAY_PHOTO --> T_ROOM_INFO : SI_ID, RI_ID
T_STAY_PHOTO --> T_STAY_INFO : SI_ID
T_STAY_RECOMMEND --> T_RECOMMEND_CATEGORY : RC_ID
T_STAY_RECOMMEND --> T_STAY_INFO : SI_ID
T_STAY_RESERVATION --> T_MEMBER_INFO : MI_ID
T_STAY_RESERVATION --> T_ROOM_INFO : SI_ID, RI_ID
T_STAY_RESERVATION --> T_STAY_INFO : SI_ID
