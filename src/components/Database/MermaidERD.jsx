import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidERD = () => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    // 간단한 테스트부터 시작

    const timer = setTimeout(() => {
      if (!mermaidRef.current) {
        return;
      }

      try {
        // Mermaid 초기화
        mermaid.initialize({
          theme: "base",
          themeVariables: {
            primaryColor: "#ffffff",
            primaryTextColor: "#2c3e50",
            primaryBorderColor: "#3498db",
            lineColor: "#34495e",
          },
          er: {
            fontSize: 12,
            useMaxWidth: true,
            layoutDirection: "TB",
            nodeSpacing: 50,
            rankSpacing: 15,
            entityPadding: 10,
            stroke: "#333333",
          },
          flowchart: {
            nodeSpacing: 50,
            rankSpacing: 15,
            padding: 10,
          },
        });

        // 전체 Stay Folio ERD 다이어그램
        const diagramDefinition = `
        erDiagram
            %% 회원 관리 엔티티
            MEMBER_INFO {
                varchar MI_ID PK "회원ID"
                varchar MI_PW "비밀번호"
                varchar MI_NAME "이름"
                char MI_GENDER "성별"
                char MI_BIRTH "생년월일"
                varchar MI_PHONE "전화번호"
                char MI_ISAD "광고수신동의"
                date MI_DATE "가입일"
                char MI_ENABLED "활성화여부"
            }
            
            MEMBER_ROLE {
                varchar MI_ID FK "회원ID"
                varchar MR_NAME "권한명"
            }
            
            %% 숙박업소 엔티티
            STAY_INFO {
                number SI_ID PK "숙박업소ID"
                varchar SI_NAME "숙박업소명"
                varchar SI_DESC "설명"
                varchar SI_LOCA "위치"
                number LC_ID FK "지역카테고리ID"
                number SI_BOOK "예약수"
                number SI_REVIEW "리뷰수"
                number SI_MINPERSON "최소인원"
                number SI_MAXPERSON "최대인원"
                number SI_MINPRICE "최소가격"
                number SI_EXTRA "추가요금"
                number SI_PEAK "성수기할증"
                number SI_OFF "비수기할인"
                number SI_DISCOUNT "할인율"
                char SI_SHOW "노출여부"
                char SI_DELETE "삭제여부"
                date SI_DATE "등록일"
            }
            
            STAY_INFO_DETAIL {
                number SI_ID PK,FK "숙박업소ID"
                varchar SI_NOTICE "공지사항"
                varchar SI_DESC1 "상세설명1"
                varchar SI_DESC2 "상세설명2"
                varchar SI_FEAT1 "특징1"
                varchar SI_FEAT2 "특징2"
                varchar SI_ADDRESS "주소"
                varchar SI_ADDRDESC "주소설명"
                varchar SI_PHONE "전화번호"
                varchar SI_EMAIL "이메일"
                varchar SI_INSTAGRAM "인스타그램"
                varchar SI_BIZNAME "사업자명"
                char SI_BIZNUM "사업자번호"
                varchar SI_CEO "대표자명"
                char SI_PET "반려동물허용"
                char SI_PARKING "주차가능"
                char SI_FOOD "식음료제공"
                char SI_CHECKIN "체크인시간"
                char SI_CHECKOUT "체크아웃시간"
                varchar SI_FEAT_TITLE1 "특징제목1"
                varchar SI_FEAT_TITLE2 "특징제목2"
            }
            
            %% 객실 엔티티
            ROOM_INFO {
                number RI_ID PK "객실ID"
                number SI_ID FK "숙박업소ID"
                char RI_TYPE "객실타입"
                varchar RI_NAME "객실명"
                varchar RI_DESC "객실설명"
                number RI_PERSON "기준인원"
                number RI_MAXPERSON "최대인원"
                number RI_AREA "면적"
                varchar RI_BED "침대정보"
                number RI_BEDCNT "침대수"
                number RI_PRICE "가격"
                char RI_SHOW "노출여부"
                char RI_DELETE "삭제여부"
                date RI_DATE "등록일"
                number RI_BEDROOM "침실수"
                number RI_BATHROOM "욕실수"
            }
            
            %% 시설/편의시설 엔티티
            FACILITY_INFO {
                number FI_ID PK "시설ID"
                varchar FI_NAME "시설명"
                varchar FI_ICON "아이콘"
            }
            
            AMENITIES_INFO {
                number AI_IDX PK "편의시설ID"
                varchar RA_NAME "편의시설명"
            }
            
            %% 카테고리 엔티티
            LOCATION_CATEGORY {
                number LC_ID PK "지역카테고리ID"
                varchar LC_NAME "카테고리명"
            }
            
            RECOMMEND_CATEGORY {
                number RC_ID PK "추천카테고리ID"
                varchar RC_NAME "카테고리명"
                varchar RC_DETAIL_TOP "상단설명"
                varchar RC_DETAIL_BOTTOM "하단설명"
                varchar RC_ICON "아이콘"
            }
            
            %% 사진 엔티티
            STAY_PHOTO {
                number SP_IDX PK "사진ID"
                number SI_ID FK "숙박업소ID"
                number RI_ID FK "객실ID"
                varchar SP_URL "사진URL"
            }
            
            ROOM_PHOTO {
                number SP_IDX PK "객실사진ID"
                number SI_ID FK "숙박업소ID"
                number RI_ID FK "객실ID"
                varchar SP_URL "사진URL"
            }
            
            %% 예약 엔티티
            STAY_RESERVATION {
                char SR_ID PK "예약ID"
                number SI_ID FK "숙박업소ID"
                number RI_ID FK "객실ID"
                varchar MI_ID FK "회원ID"
                varchar SR_NAME "예약자명"
                varchar SR_EMAIL "이메일"
                varchar SR_PHONE "전화번호"
                clob SR_REQUEST "요청사항"
                date SR_DATE "예약일"
                number SR_ADULT "성인수"
                number SR_CHILD "아동수"
                date SR_CHECKIN "체크인일"
                date SR_CHECKOUT "체크아웃일"
                number SR_ROOMPRICE "객실요금"
                number SR_DISCOUNT "할인금액"
                number SR_ADDPERSON_FEE "추가인원요금"
                number SR_TOTALPRICE "총요금"
                varchar SR_PAYMENT "결제방법"
                date SR_PAYDATE "결제일"
                date SR_CANCLEDATE "취소일"
                varchar SR_STATUS "예약상태"
                char SR_PAYMENTSTATUS "결제상태"
            }
            
            %% 관계 테이블
            STAY_BOOKMARKS {
                varchar MI_ID FK "회원ID"
                number SI_ID FK "숙박업소ID"
                date SB_REGDATE "등록일"
            }
            
            STAY_FACILITY_REL {
                number SI_ID FK "숙박업소ID"
                number FI_ID FK "시설ID"
            }
            
            ROOM_FACILITY_REL {
                number SI_ID FK "숙박업소ID"
                number RI_ID FK "객실ID"
                number FI_ID FK "시설ID"
            }
            
            ROOM_AMENITIES {
                number RA_IDX PK "관계ID"
                number SI_ID FK "숙박업소ID"
                number RI_ID FK "객실ID"
                number AI_IDX FK "편의시설ID"
            }
            
            STAY_RECOMMEND {
                number SR_IDX PK "추천ID"
                number SI_ID FK "숙박업소ID"
                number RC_ID FK "추천카테고리ID"
            }
            
            %% 관계 정의
            MEMBER_INFO ||--o{ MEMBER_ROLE : ""
            MEMBER_INFO ||--o{ STAY_BOOKMARKS : ""
            MEMBER_INFO ||--o{ STAY_RESERVATION : ""
            
            LOCATION_CATEGORY ||--o{ STAY_INFO : ""
            STAY_INFO ||--|| STAY_INFO_DETAIL : ""
            STAY_INFO ||--o{ ROOM_INFO : ""
            STAY_INFO ||--o{ STAY_PHOTO : ""
            STAY_INFO ||--o{ STAY_BOOKMARKS : ""
            STAY_INFO ||--o{ STAY_FACILITY_REL : ""
            STAY_INFO ||--o{ STAY_RECOMMEND : ""
            STAY_INFO ||--o{ STAY_RESERVATION : ""
            
            ROOM_INFO ||--o{ ROOM_PHOTO : ""
            ROOM_INFO ||--o{ ROOM_FACILITY_REL : ""
            ROOM_INFO ||--o{ ROOM_AMENITIES : ""
            ROOM_INFO ||--o{ STAY_RESERVATION : ""
            
            FACILITY_INFO ||--o{ STAY_FACILITY_REL : ""
            FACILITY_INFO ||--o{ ROOM_FACILITY_REL : ""
            
            AMENITIES_INFO ||--o{ ROOM_AMENITIES : ""
            
            RECOMMEND_CATEGORY ||--o{ STAY_RECOMMEND : ""
        `;

        mermaid
          .render("mermaid-erd-diagram", diagramDefinition)
          .then(({ svg }) => {
            if (mermaidRef.current) {
              mermaidRef.current.innerHTML = svg;

              const svgElement = mermaidRef.current.querySelector("svg");
              if (svgElement) {
                // SVG를 컨테이너에 맞게 조정하되 비율 유지
                svgElement.style.width = "100%";
                svgElement.style.height = "100%";
                svgElement.style.minWidth = "auto";
                svgElement.style.minHeight = "auto";
                svgElement.style.maxWidth = "100%";
                svgElement.style.maxHeight = "100%";
                svgElement.style.background = "white";

                // viewBox를 사용해서 전체 다이어그램이 보이도록 조정
                const bbox = svgElement.getBBox();
                if (bbox.width && bbox.height) {
                  // 여백을 추가해서 전체가 잘 보이도록
                  const padding = 50;
                  const viewBoxX = bbox.x - padding;
                  const viewBoxY = bbox.y - padding;
                  const viewBoxWidth = bbox.width + padding * 2;
                  const viewBoxHeight = bbox.height + padding * 2;

                  svgElement.setAttribute(
                    "viewBox",
                    `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`
                  );
                  svgElement.setAttribute(
                    "preserveAspectRatio",
                    "xMidYMid meet"
                  );

                  // SVG 배경을 완전히 하얀색으로 설정
                  const existingRect =
                    svgElement.querySelector('rect[fill="white"]');
                  if (!existingRect) {
                    const backgroundRect = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "rect"
                    );
                    backgroundRect.setAttribute("x", viewBoxX);
                    backgroundRect.setAttribute("y", viewBoxY);
                    backgroundRect.setAttribute("width", viewBoxWidth);
                    backgroundRect.setAttribute("height", viewBoxHeight);
                    backgroundRect.setAttribute("fill", "white");
                    backgroundRect.setAttribute("stroke", "none");
                    svgElement.insertBefore(
                      backgroundRect,
                      svgElement.firstChild
                    );
                  }
                }

                // 텍스트 크기 개선 (가독성을 위해)
                const textElements = svgElement.querySelectorAll("text");
                textElements.forEach((text) => {
                  const currentSize = parseFloat(text.style.fontSize) || 12;
                  text.style.fontSize = `${Math.max(currentSize * 1.2, 14)}px`;
                  text.style.fontWeight = "500";
                });
              }
            }
          })
          .catch((error) => {
            console.error("Mermaid rendering failed:", error);
            if (mermaidRef.current) {
              mermaidRef.current.innerHTML = `
              <div style="padding: 20px; text-align: center; color: #e74c3c;">
                <h3>❌ ERD 렌더링 실패</h3>
                <p>오류: ${error.message}</p>
              </div>
            `;
            }
          });
      } catch (error) {
        console.error("Mermaid initialization failed:", error);
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #e74c3c;">
              <h3>❌ Mermaid 초기화 실패</h3>
              <p>오류: ${error.message}</p>
            </div>
          `;
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={mermaidRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "white",
        padding: "0",
        margin: "0",
        border: "none",
      }}
    ></div>
  );
};

export default MermaidERD;
