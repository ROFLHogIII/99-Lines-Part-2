var friends = ['Chris', 'Warryn', 'Woody', 'Jun', 'Anthony']

for (let f = 0; f < friends.length; f++) {
    console.log(friends[f] + ':')
    for (let n = 99; n < 100; n--) {
        if (n === 2) {
            console.log(n + " lines of code in the file, " + n + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [n - 1] + " line of code in the file!");
        } else {
            if (n === 1) {
                console.log(n + " line of code in the file, " + n + " line of code; " + [friends[f]] + " strikes one out, clears it all out, no more lines of code in the file!")
                break
            } else {
                console.log(n + " lines of code in the file, " + n + " lines of code; " + [friends[f]] + " strikes one out, clears it all out, " + [n - 1] + " lines of code in the file!");
            }
        }
        
    }
}
// Everything belo here are previous attempts as well as test i ran to see if things were even possible in the first place
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