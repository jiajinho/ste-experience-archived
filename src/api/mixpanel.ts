import useEnvStore from "stores/useEnvStore";

export enum MixpanelEvent {
  START = "(Loading Page)",
  SKIP = "Skip_button",
  CONTINUE = "Continue_button",
  ACCEPT_INVITE = "Accept_button",
  ACCEPT_INVITE_DROPOFF = "Accept_button_dropoff",
  ENTER_CLUBROOM = "Enter_ClubRoom",
  ENTER_CLUBROOM_DROPOFF = "Enter_ClubRoom_dropoff",

  TICKETING = "General_tickets_button",

  EVENT_VIDEO = "Event_Video_arrow",
  EVENT_VIDEO_TIKTOK = "Event_video_tiktok",
  EVENT_VIDEO_DROPOFF = "Event_video_dropoff",

  FAN_GALLERY = "Fan_Gallery_arrow",
  FAN_GALLERY_DROPOFF = "Fan_Gallery_dropoff",
  FAN_GALLERY_INSTA = "Fan_Gallery_Instagram",

  EVENT_SUMMARY = "Event_summary_arrow",
  EVENT_SUMMARY_DROPOFF = "Event_Summary_dropoff",
  EVENT_SUMMARY_CTA = "Event_summary_Book_now",

  KEY_QUESTION = "Key_questions_arrow",
  KEY_QUESTION_DROPOFF = "Key_questions_dropoff",
  KEY_QUESTION_CTA = "Key_questions_GoToFAQ",

  EVENT_LOCATION = "Event_Location_arrow",
  EVENT_LOCATION_DROPOFF = "Event_location_dropoff",
  EVENT_LOCATION_CTA = "Event_location_GotoMap",

  XPASS = "About_Xpass_arrow",
  XPASS_DROPOFF = "About_Xpass_section_dropoff",
  XPASS_CTA = "About_Xpass_Book_now",

  EVENT_EXCLUSIVE = "Event_Exclusives_arrow",
  EVENT_EXCLUSIVE_DROPOFF = "Event_exclusives_dropoff"
}

export default async (event: MixpanelEvent): Promise<any> => {
  const env = useEnvStore.getState().env;

  const queryParams = new URLSearchParams({ event, env });

  await fetch(`/api/mixpanel?${queryParams}`, {
    cache: "no-store",
    keepalive: false
  });
}