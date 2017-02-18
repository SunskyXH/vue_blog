import axios from "axios";

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // XHR
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';   // 跨域

export let get = function (url, data, isDisabledErrorProcess, isDisableResponseProcess) {
    return axio('get', url, data, isDisabledErrorProcess, isDisableResponseProcess);
};
export let post = function (url, data, isDisabledErrorProcess, isDisableResponseProcess) {
    return axio('post', url, data, isDisabledErrorProcess, isDisableResponseProcess);
};

export let del = function (url, data, isDisabledErrorProcess, isDisableResponseProcess) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {
            data,
        }).then(response => {
            if (isDisableResponseProcess) {
                resolve(response);
                return;
            }
            processResponseCode(response, resolve, reject, isDisabledErrorProcess)
        }, err => {
            processNot200HttpCode(err, reject);
        })
    })
};

/**
 *
 * @param {String} method
 * @param {String} url
 * @param {Object} data
 * @param {Boolean|undefined} isDisabledErrorProcess 是否禁止全局错误code码处理逻辑。
 * @param {Boolean|undefined} isDisableResponseProcess
 * @return {Promise}
 */
function axio(method, url, data, isDisabledErrorProcess, isDisableResponseProcess) {
    return new Promise((resolve, reject) => {
        axios[method](url, data).then(response => {
            if (isDisableResponseProcess) {
                resolve(response)
                return
            }
            processResponseCode(response, resolve, reject, isDisabledErrorProcess)
        }, err => {
            processNot200HttpCode(err, reject)
        })
    })
};
/**
 * 全局处理通用code错误。
 * @param response
 * @param resolve
 * @param reject
 * @param isDisabledErrorProcess
 */
function processResponseCode(response, resolve, reject, isDisabledErrorProcess) {
    let {data}=response
    if (data.code === 200) {
        resolve(data.data)
    } else {
        if (isDisabledErrorProcess) {
            reject(response)
        } else {
            if (data.code === 400) {
                console.error(data.message || "未知错误", 5)
            } else {
                reject(response);
            }
        }
    }
};

function processNot200HttpCode(err, reject) {
    if (axios.isCancel(err)) {
        console.log(JSON.stringify(err))
        return;
    }
    //http 非200区域的状态码
    let response = err.response || {}
    let url = response.request && response.request.responseURL || ""
    console.error(`${url}:${response.status}.${response.statusText}`, 10)
    reject(err);
};
