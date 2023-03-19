// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост
let urlApi = `https://jsonplaceholder.typicode.com/users/`;
let url = new URL(location.href)
let userId = url.searchParams.get('id')
//Info Of Object
fetch(urlApi + userId)
    .then(value => value.json())
    .then(value => {

        function getKey(value) {
            for (const key in value) {
                if (typeof (value[key]) === 'object') {
                    // console.log(`${key}`)
                    let boxH3 = document.createElement('h3')
                    boxH3.classList.add('boxH3')
                    boxH3.innerText = `${key.toUpperCase()}`
                    document.body.appendChild(boxH3)
                    boxH3.classList.add('boxH3')
                    getKey(value[key]);

                } else {
                    // console.log(` ${key} -- ${value[key]}`)
                    let boxLi = document.createElement('li');
                    boxLi.classList.add('boxLi');
                    boxLi.innerText = `${key.toUpperCase()} -- ${value[key]}`
                    document.body.append(boxLi)
                }
            }

        }

        getKey(value)


    })
//Info Of Object

let url_post = new URL(location.href)
let post_id = url_post.searchParams.get('id')
fetch('https://jsonplaceholder.typicode.com/users/' + userId + '/posts')
    .then(value => value.json())
    .then(posts => {
        //Button

        let butWrap=document.createElement('div')
        butWrap.classList.add('butDiv')
        let but2 = document.createElement('button');
        but2.classList.add('but2')
        but2.innerText = 'POST OF CURRENT USER';
        butWrap.append(but2)
        document.body.append(butWrap)
        function delClass() {
            let element = document.querySelector('#postButton');
            element.classList.toggle('display');
        }
        but2.onclick = delClass;
        //Button
        //Posts
        let titleWrap = document.createElement('div')
        titleWrap.classList.add('titleWrap')
        let wrap=document.createElement('div')
        wrap.setAttribute('id', 'postButton')
        wrap.classList.add('display','wrap')

        for (const post of posts) {
            let titlePost = document.createElement('div')
            titlePost.classList.add('titlePost')
            let textPost = document.createElement('a')
            textPost.innerText = `${post.title}`
            textPost.href = 'post-details.html?id=' + post.id
            titlePost.append(textPost);
            titleWrap.appendChild(titlePost)
            wrap.append(titleWrap)
            document.body.appendChild(wrap);
            // console.log(`${post.title}`)

        }
    })
//Posts
