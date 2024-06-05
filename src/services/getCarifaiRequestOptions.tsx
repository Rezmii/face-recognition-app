export const getClarifaiRequestOptions = (imgUrl: string) => {
  const PAT = "1537473d402943b58abab64f048d58d7";
  const USER_ID = "kro8nku1xvsw";
  const APP_ID = "face-recognition-app";
  const MODEL_ID = "celebrity-face-recognition";

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imgUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
      "Content-Type": "application/json",
    },
    body: raw,
  };

  return { requestOptions, MODEL_ID };
};

export const recognizeFace = async (imgUrl: string) => {
  const { requestOptions, MODEL_ID } = getClarifaiRequestOptions(imgUrl);
  try {
    const response = await fetch(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
