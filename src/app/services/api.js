import axios from "axios";

const HOST = "http://127.0.0.1:3000";

const sendMessage = async () => {
  const response = await fetch(`${HOST}/ai-chat/sse`);
};

const initMessage = async () => {
  const response = axios({
    method: "post",
    url: `${HOST}/ai-chat/chat/init`,
  }).then(function (response) {
    const sessionId = response.data.sessionId;
    const token = response.data.token;
  });
};

export { sendMessage };
