//UserInfo
let url_comment = new URL(location.href)
let id_comment = url_comment.searchParams.get('id')
fetch('https://jsonplaceholder.typicode.com/posts/' + id_comment + '/comments')
    .then(value => value.json())
    .then(comments => {
        let wrap=document.createElement('div');
        wrap.classList.add('wrap');
        for (const item of comments) {
            let wrapUser =document.createElement('div')
            wrapUser.classList.add('wrapUser')


            // console.log('---------')
            for (const itemKey in item) {
                let userInfo=document.createElement('h2')
                userInfo.classList.add('userInfo')
                userInfo.innerText=`${itemKey.toUpperCase()}: ${item[itemKey]}`
                wrapUser.append(userInfo)
                wrap.append(wrapUser)
                // console.log(`${itemKey}--${item[itemKey]}`)

            }
            document.body.append(wrap)
        }

        // console.log(comments)
    })
//UserInfo