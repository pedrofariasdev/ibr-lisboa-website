export async function getYoutubeLive() {

  const API_KEY = process.env.YOUTUBE_API_KEY;

  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;


  const url =
    `https://www.googleapis.com/youtube/v3/search` +
    `?part=snippet` +
    `&channelId=${CHANNEL_ID}` +
    `&eventType=live` +
    `&type=video` +
    `&key=${API_KEY}`;


  const response = await fetch(url);

  const data = await response.json();


  if (!data.items || data.items.length === 0) {

    return {
      isLive:false,
      videoId:null
    };

  }


  return {

    isLive:true,

    videoId:data.items[0].id.videoId

  };


}