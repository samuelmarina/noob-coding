import axios from "axios";

const postLink = async (link) => {
    try {
        const response = await axios.post("links/", {
            link: link
        });
        return response.data;
    }
    catch(error){
        return error;
    }
}

export default(postLink);