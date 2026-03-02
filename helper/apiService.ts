import axios from "axios";

export const getGalleryData = async () => {
    const response = await axios.get('https://raw.githubusercontent.com/DurgeshCoder/substring_front/refs/heads/data/data/gallery.json')
    return response.data;

}   



export const getCoursesData = async () => {
    const response = await axios.get('https://raw.githubusercontent.com/DurgeshCoder/substring_front/refs/heads/data/data/courses.json');
    return response.data;
}


