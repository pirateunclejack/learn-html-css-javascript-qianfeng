var arr1 = [{
    name: 'name1',
    url: '../../../img/docker.png'
},
{
    name: 'name2',
    url: '../../../img/docker.png'
},
{
    name: 'name3',
    url: '../../../img/docker.png'
},
{
    name: 'name4',
    url: '../../../img/docker.png'
},
]

var arr2 = [{
    name: 'name21',
    url: '../../../img/docker.png'
},
{
    name: 'name22',
    url: '../../../img/docker.png'
},
{
    name: 'name23',
    url: '../../../img/docker.png'
},
{
    name: 'name24',
    url: '../../../img/docker.png'
},
]
function renderHtml(arr) {
    // list.innerHTML += arr.map(
    //   function (item) {
    //     return `<li>
    //       <img src="${item.url}" alt="">
    //       <h3>${item.name}</h3>
    //     </li>`
    //   }
    // ).join("")

    for (let i = 0; i < arr.length; i++) {
        var oli = document.createElement("li")
        oli.innerHTML = `
    <img src="http://localhost:3000${arr[i].poster}" alt="">
    <h3>${arr[i].title}</h3>`
        oli.onclick = function(){
            console.log(arr[i].id)
            location.href = `detail.html?id=${arr[i].id}`
        }
        list.appendChild(oli)
        
    }
}

var current = 0 // current page
var isLoading = false // wether is loading

async function getList(){
    current++
    var res = await fetch(`http://localhost:3000/goods?_page=${current}&_limit=3`)
    var list = await res.json()
    console.log(res.headers.get('X-Total-Count'))
    total = res.headers.get('X-Total-Count')
    renderHtml(list)
}

getList()

// renderHtml(arr1)
window.onscroll = function () {
    // console.log(list.children.length)
    if(list.children.length===Number(total)){
        return
    }
    var listHeight = list.offsetHeight
    var listTop = list.offsetTop
    console.log(listHeight, listTop)

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    var windowHeight = document.documentElement.clientHeight

    // console.log(Math.round(scrollTop + windowHeight))
    if (isLoading) return
    if (listHeight + listTop - Math.round(scrollTop + windowHeight) < 100) {
        // renderHtml(arr2)
        console.log("bottom")
        isLoading = true
        setTimeout(function () {
            // renderHtml(arr2)
            isLoading = false
        }, 1000);
        getList()
    }
}
