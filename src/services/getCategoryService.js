import axios from "axios";

const getCategoryService = async () => {
    return await axios.get("/api/categories");
}

export { getCategoryService };