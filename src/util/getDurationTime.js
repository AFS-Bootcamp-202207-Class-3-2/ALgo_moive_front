import moment from "moment";

export const getDurationTime = (data) => {
  let startTime = new Date(data.startTime);
  let endTime = new Date(data.movieDuration * 60 * 1000 + startTime.getTime());
  let durationTime =
    moment(data.screeningDate).format("YYYY年MM月DD日") +
    " " +
    startTime.getHours() +
    ":" +
    startTime.getMinutes() +
    "-" +
    endTime.getHours() +
    ":" +
    endTime.getMinutes();
  return durationTime;
};
