import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "298897c762f2468eac5309be9787dd66";
const token =
  "007eJxTYLD+vC3Z4N2DwopJFeVPj0jd397RlLXuukbSaoN9ZxX+M/IpMBhZWlhYmiebmxmlGZmYWaQmJpsaG1gmpVqaW5inpJiZtazLTGkIZGRYslWbhZEBAkF8FobcxMw8BgYAxM0gkw==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
