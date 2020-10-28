import axios from "../../axios/axios";

export const dataFromPc = () => {
    return axios.post('/start-command-tm', {
        hostIp: "192.168.10.3",
        scriptName: "avarageAllProcessData.ps1"
    })
}
