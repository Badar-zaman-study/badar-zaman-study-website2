import moment from "moment";

export const getScholarshipStatus = (admissionOpen: string,deadline: string ) =>{
  const today = moment().startOf("day");

  const admissionDate = moment(admissionOpen, "DD-MM-YYYY").startOf("day");
  const deadlineDate = moment(deadline, "DD-MM-YYYY").endOf("day");

  if (today.isBefore(admissionDate)) {
    return "upcoming";
  }

  if (
    today.isSameOrAfter(admissionDate) &&
    today.isSameOrBefore(deadlineDate)
  ) {
    return "present";
  }

  return "expired";
}


export const getYoutubeEmbedUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    let videoId = "";

    // youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v") || "";
    }

    // youtu.be/VIDEO_ID
    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1);
    }

    if (!videoId) {
      return null;
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return null;
  }
};