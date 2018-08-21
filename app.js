
var friends = ['Chris', 'Warryn', 'Woody', 'Jun', 'Anthony']
let button = document.createElement("button");
let buttText = document.createTextNode("Sing!")
let sing = document.getElementById("sing")
let info = document.getElementsByClassName('bg-info')

sing.addEventListener("click", function () {
    for (let f = 0; f < friends.length; f++) {
        let divF = document.createElement("div")
        divF.className = 'friend bg-info'
        let name = document.createTextNode(friends[f])
        let h3 = document.createElement("h3")
        h3.appendChild(name)
        divF.appendChild(h3)
        document.body.appendChild(divF)
        for (let n = 99; n < 100; n--) {
            if (n === 2) {
                let p = document.createElement("p")
                let song = document.createTextNode(n + " lines of code in the file, " + n + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [n - 1] + " line of code in the file!")
                p.appendChild(song)
                divF.appendChild(p)
                // console.log(n + " lines of code in the file, " + n + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [n - 1] + " line of code in the file!");
            } else {
                if (n === 1) {
                    let p = document.createElement("p")
                    let song = document.createTextNode(n + " line of code in the file, " + n + " line of code; " + [friends[f]] + " strikes one out, clears it all out, no more lines of code in the file!")
                    p.appendChild(song)
                    divF.appendChild(p)
                    // console.log(n + " line of code in the file, " + n + " line of code; " + [friends[f]] + " strikes one out, clears it all out, no more lines of code in the file!")
                    break
                } else {
                    let p = document.createElement("p")
                    let song = document.createTextNode(n + " lines of code in the file, " + n + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [n - 1] + " lines of code in the file!")
                    p.appendChild(song)
                    divF.appendChild(p)
                    // console.log(n + " lines of code in the file, " + n + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [n - 1] + " lines of code in the file!");
                }
            }

        }
    }
})


// Everything below here are previous attempts as well as test i ran to see if things were even possible in the first place
//
//
//for (let key in friends) {
//    console.log(friends[key])
//    for (let index = 99; index > 100; index--) {
//        if (index === 1) {
//            console.log(index + " lines of code in the file, " + index + " lines of code; " + [friends[key]] + " strikes one out, clears it all out, no more lines of code in the file!")
//            break
//        } else {
//            console.log(friends + ':')
//            console.log(index + " lines of code in the file, " + index + " lines of code; " + [friends[key]] + " strikes one out, clears it all out, " + [index - 1] + "lines of code in the file!");
//        }
//    }
//}

//friends.forEach(element => {
//    for (let index = 99; index > 100; index--) {
//        if (index === 1) {
//            console.log(index + " lines of code in the file, " + index + " lines of code; " + [friends[key]] + " strikes one out, clears it all out, no more lines of code in the file!")
//            break
//        } else {
//            console.log(friends + ':')
//            console.log(index + " lines of code in the file, " + index + " lines of code; " + [friends[key]] + " strikes one out, clears it all out, " + [index - 1] + "lines of code in the file!");
//        }
//    }
//});
//
//var test = (10)
//
//console.log('hello world ' + [test - 1])
//