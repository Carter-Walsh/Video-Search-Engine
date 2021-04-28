import axios from "axios";

const KEY = "AIzaSyBMj6BP4kkYFpg1W4Ed7WbfawzecxTOnsc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});