var container = document.createElement("div")
container.setAttribute("class", "container")

var heading =document.createElement("h1")
heading.setAttribute('id','title')
heading.innerHTML="DOM Pagination Task"
container.append(heading)
document.body.append(container)

var para = document.createElement('p')
para.setAttribute('id','description')
para.innerHTML='All elements in this task are created by using DOM'
container.append(para)
document.body.append(container)

var div1 = document.createElement("div")
div1.setAttribute('class','table-responsive')

async function func(num1, num2) {

    div1.innerHTML = " "

    try {
        let s1 = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")

        let result = await s1.json()

        var table = document.createElement('table')
        table.setAttribute('id','table')
        table.setAttribute('class','table table-bordered')
        

        var thead = document.createElement("thead")
        thead.setAttribute("class", "thead-dark")


        let tr = document.createElement("tr")

        let th1 = document.createElement("th")
        th1.innerHTML = "ID"

        let th2 = document.createElement("th")
        th2.innerHTML = "NAME"

        let th3 = document.createElement("th")
        th3.innerHTML = "EMAIL"
        
          var tbody = document.createElement("tbody")

        tr.append(th1, th2, th3)
        thead.append(tr)
        table.append(thead)
        div1.append(table)

        for (var i = num1; i < num2; i++) {

          

            var tr1 = document.createElement("tr")

            var td1 = document.createElement("td")
            td1.innerHTML = result[i].id

            var td2 = document.createElement("td")
            td2.innerHTML = result[i].name

            var td3 = document.createElement("td")
            td3.innerHTML = result[i].email

            tr1.append(td1, td2, td3)
            tbody.append(tr1)
            table.append(tbody)

        }


    } catch (error) {
        console.log(error)
    }
}

func(0, 10)

let div2 = document.createElement("div")
div2.setAttribute('id','buttons')
div2.setAttribute('class','d-flex justify-content-center')


let first =createbutton('firstfunc()','first','first')
let previous = createbutton('previousfunc()', 'previous', 'previous')
let btn1 = createbutton('foo(1)', 'btn1', 1)
let btn2 = createbutton('foo(2)', 'btn2', 2)
let btn3 = createbutton('foo(3)', 'btn3', 3)
let btn4 = createbutton('foo(4)', 'btn4', 4)
let btn5 = createbutton('foo(5)', 'btn5', 5)
let btn6 = createbutton('foo(6)', 'btn6', 6)
let btn7 = createbutton('foo(7)', 'btn7', 7)
let btn8 = createbutton('foo(8)', 'btn8', 8)
let btn9 = createbutton('foo(9)', 'btn9', 9)
let btn10 = createbutton('foo(10)', 'btn10', 10)
let next = createbutton('nextfunc()', 'next', 'next')
let last = createbutton('lastfunc()','last','last')


var currentpage = 0
var perpage = 10
var maxpage = Math.ceil(100 / perpage)

function foo(num) {
    if (num < 1) {
        num = 1
    }
    if (num > maxpage) {
        num = maxpage
    }

    var start = (num - 1) * maxpage
    var end = num * maxpage
    currentpage = num
    func(start, end)
}

function previousfunc() {
    if (currentpage > 1) {
        foo(currentpage - 1)
    }
}

function nextfunc() {
    if (currentpage < maxpage) {
        foo(currentpage + 1)
    }
}

function firstfunc(){
     var start =0
     var end = perpage
   func(start,end)
}

function lastfunc(){
    var start =90
    var end = 100
    func(start,end)
}


div2.append(first,previous, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, next,last)
function createbutton(onclick, id, value) {
    let button = document.createElement("button")
    button.setAttribute('onclick', onclick)
    button.setAttribute('id', id)
    button.innerHTML = value
    return button
}

container.append(div1, div2)
document.body.append(container)
