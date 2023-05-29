import useEnvStore from "@/stores/useEnvStore";

export enum MixpanelEvent {
  START = "(Loading Page)",
  SKIP = "Skip_button",
  CONTINUE = "Continue_button",
  ACCEPT_INVITE = "Accept_button",
  ENTER_CLUBROOM = "Enter_ClubRoom",

  TICKETING = "General_tickets_button",

  EVENT_VIDEO = "Event_video_arrow",
  EVENT_VIDEO_TIKTOK = "Event_video_tiktok",

  FAN_GALLERY = "Fan_Gallery_arrow",
  FAN_GALLERY_INSTA = "Fan_Gallery_instagram",

  EVENT_SUMMARY = "Event_summary_arrow",
  EVENT_SUMMARY_CTA = "Event_summary_Book_now",

  KEY_QUESTION = "Key_questions_arrow",
  KEY_QUESTION_CTA = "Key_questions_GoToFAQ",

  EVENT_LOCATION = "Event_location_arrow",
  EVENT_LOCATION_CTA = "Event_location_GoToMap",

  XPASS = "About_Xpass_arrow",
  XPASS_CTA = "About_Xpass_Book_now",

  EVENT_EXCLUSIVE = "Event_Exclusives_arrow",

  DROPOFF = "End_session"
}

export default async (event: MixpanelEvent): Promise<any> => {
  const env = useEnvStore.getState().env;
  const debug = env !== "production";

  const queryParams = new URLSearchParams({
    event,
    debug: debug.toString()
  });

  await fetch(`/api/mixpanel?${queryParams}`, {
    cache: "no-store",
    keepalive: false
  });
}