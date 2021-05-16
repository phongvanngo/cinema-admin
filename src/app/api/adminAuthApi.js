// import axiosClient from './AxiosClient';
import { fakeApi } from './fakeApi';

const adminAuthApi = {
    sendLoginInfo: async (loginInfo) => {
        let response = await fakeApi({
            request: loginInfo,
            response: {
                status: 200,
                data: {
                    token: "my app token"
                }
            }
            , timeOut: 2000
        }
        )
        return response;
    }
}

export default adminAuthApi;