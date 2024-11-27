export const playAudio = (isSend: boolean) => {
  const soundUrl = isSend
    ? "/x-chatbot/sounds/send.mp3"
    : "/x-chatbot/sounds/receive.mp3";
  const audio = new Audio(soundUrl);
  audio.play();
};
