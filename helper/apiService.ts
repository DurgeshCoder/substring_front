import axios from "axios";

export const getGalleryData = async () => {
    const response = await axios.get('https://raw.githubusercontent.com/DurgeshCoder/substring_front/refs/heads/data/data/gallery.json')
    return response.data;

}   