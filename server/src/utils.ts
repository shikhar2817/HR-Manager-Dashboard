export const getUserIdFromAuthToken = (token: string): string => {
    const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
    console.log(payload);
    return payload.user_id;
};
