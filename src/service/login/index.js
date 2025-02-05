import { service } from "..";

export default {
    sigIn: data => service.post('/api/auths/sign-in', data),
    signUp: data => service.post('/api/auths/sign-up', data),
}