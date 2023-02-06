function queryStringfy(obj) {
    let str = ''
    for (let k in obj )str += `${k}=${obj[k]}&`
    return str.slice(0,-1)
}
// 

function ajax(options){
    let defaultoptions = {
        url:'',
        method: 'GET',
        async: true,
        data: {},
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        success : function(){},
        error: function(){}
    }
    let {url, method, async, data, headers, success, error} = {
        ...defaultoptions,
        ...options
    }
    // console.log(typeof data)
    console.log(headers['content-type']?.indexOf('json'))
    if (typeof data === 'object' && headers['content-type']?.indexOf('json')> -1){
        data = JSON.stringify(data)
        console.log(data)
    } else {
        data = queryStringfy(data)
    }
    console.log(url, method, async, data, headers, success, error)

    if(/^get$/i.test(method)&& data){
        url += '?' + data
    }

    const xhr = new XMLHttpRequest()
    xhr.open(method, url, async)
    xhr.onload = function(){
        if (!/^2\d{2}$/.test(xhr.status)){
            console.log(err)
            error(`Error code:${xhr.status}`)
            return
        }
        try {
            let result = JSON.parse(xhr.responseText)
            success(result)
        } catch (err){
            error('Parse failed: Return from backend is not json format')
        }
    }
    for (let k in headers) xhr.setRequestHeader(k,headers[k])
    if (/^get$/i.test(method)){
        xhr.send()
    } else {
        xhr.send(data)
    }
}

export default ajax