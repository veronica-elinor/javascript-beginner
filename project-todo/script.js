const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addBtn = document.getElementById('addBtn')
const deleteBtn = document.getElementById('deleteBtn')

const listContent = []

class RenderFeature{
    append() {

    }
    render() {
        // 渲染頁面list
        // 使用模板語法`` 遇到換行才不會報錯
        let htmlStr = ''
    
        listContent.forEach(function (item) { // 辨別陣列裡所有的內容
            //console.log('item', item);
            htmlStr = htmlStr + `
            <div class="item">
                <div>
                    <p>內容： ${item.content}</p>
                    <p>時間： ${item.date} ${item.time}</p>
                </div>
            </div>
            `
        })
    
        //console.log(htmlStr)
    
        list.innerHTML = htmlStr
    }
}

const r1 = new RenderFeature()

    addBtn.addEventListener('click', function () {
    console.log(content.value)
    console.log(date.value)
    console.log(time.value)

    listContent.unshift( { // 從前面推東西，新進的在最上方，push則在最下方
        content: content.value,
        date: date.value,
        time: time.value
    })

    //console.log(listContent);

    r1.render()
})

deleteBtn.addEventListener('click', function () {
    listContent.shift() // shift從前面拿出來，pop刪除最後一個
    
    r1.render()
    
})
