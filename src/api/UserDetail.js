import api from "./api";

export const updateUserDetail = (id, userDetail) => {
    return api.put("/users/" + id,
        userDetail);
};
