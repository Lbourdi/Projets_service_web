import {getRequest, postRequest} from "@/services/axios.service";

async function loginService(data) {
    return await loginFromAPI(data)
}

async function loginFromAPI(data) {
    return postRequest("/auth/signin", data, "loginService");
}

async function logOutService() {
    return await logOutFromAPI()
}

async function logOutFromAPI() {
    return getRequest("/auth/logout", "logoutService", {withCredentials: true});
}

async function signUpService(data) {
    return await signUpFromAPI(data)
}

async function signUpFromAPI(data) {
    return postRequest("/auth/signup", data, "signinService");
}

async function checkSessionService() {
    return await checkSessionFromAPI()
}

async function checkSessionFromAPI() {
    return getRequest("/auth/check-session", "checkSessionService", {withCredentials: true});
}
export default {
    loginService,
    logOutService,
    signUpService,
    checkSessionService
}