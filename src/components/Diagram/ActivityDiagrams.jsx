import React from "react";
import PlantUMLDiagram from "./PlantUMLDiagram";
import { ACTIVITY_PUML } from "./activityPumlSources";
import "../../styles/Diagram/ActivityDiagramViewport.css";

function ActivityDiagrams({ tab }) {
  const source = getPumlByTab(tab);

  return (
    <div className="activity-diagrams-container">
      <PlantUMLDiagram source={source} className="plantuml-diagram" />
    </div>
  );
}

function getPumlByTab(selectedTab) {
  switch (selectedTab) {
    case "signup-duplicate-check":
      return ACTIVITY_PUML.signup_duplicate_check;
    case "recommend-fetch":
      return ACTIVITY_PUML.recommend_fetch;
    case "bookmark-add":
      return ACTIVITY_PUML.bookmark_add;
    case "bookmark-delete":
      return ACTIVITY_PUML.bookmark_delete;
    case "room-detail-and-unavailable-dates":
      return ACTIVITY_PUML.room_detail_and_unavailable_dates;
    case "reserve-and-price-calc":
      return ACTIVITY_PUML.reserve_and_price_calc;
    case "cancel-reservation":
      return ACTIVITY_PUML.cancel_reservation;
    case "search-suggestions":
      return ACTIVITY_PUML.search_suggestions;
    case "admin-stay-register-two-steps":
      return ACTIVITY_PUML.admin_stay_register_two_steps;
    default:
      return "@startuml\n:No diagram selected;\n@enduml";
  }
}

export default ActivityDiagrams;
