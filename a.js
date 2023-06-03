// let hola = document.getElementById("hola")
// let but =document.getElementById("but")
// hola.onclick = function () {
//     hola.style.background = "yellow"
//     hola.style.color = "green"

// }
// hola.onmouseenter = function () {
//     hola.style.background = "yellow"
//     hola.style.color = "green"

// }


// hola.addEventListener("click", (a) => {
// a.target.style.background = "pink"
// a.target.style.color = "cyan"
// a.target.style.position = "absolute"
// a.target.style.top = "-20px"
//  a.target.style.display = "none"
// console.log(a.target)
// })

// but.addEventListener("click", () => {
//     hola.style.display = "block"
// hola.style.top = "0"

// })


// let br = prompt("Whta is your name")
// let c = confirm("Do you want to dislpay your name")
// if (c) {
//     alert(`your name is ${br}`)
// }
box.style.display = "none"

const Play = () => {

    let ys = 0;
    let cs = 0;
    let streak = 0;



    let i = Math.floor((Math.random() * 3))

    let ar = ["rock", "paper", "scissor"]
    let q = ar[i]
    // tax.innerHTML=result
    // console.log(v)

    // localStorage.setItem("result", `${box.innerHTML}`)

    let us = prompt("Write 'rock' or 'paper' or'scissor'")
    // x = Number.parseInt(x)

    if (us == q) {
        box.innerHTML = `GAME TIED <br> Your Response :> <i>  ${us} </i>  <br>Computer Response :> <i>  ${q} </i>`
        box.style.display = "block"
        // localStorage.setItem("", `${box.innerHTML}`)

        // localStorage.getItem("result").replace("",`${box.innerHTML}`)

        // box.style.background = "rgb(172, 137, 204)"
        // box.style.border = "2px solid black"

        setTimeout(() => {
            box.style.display = "none"
            // box.innerHTML = ""
            // box.style.background = "white"
            // box.style.border = "none"

        }, 2000);

    }
    else if (us == "rock" && q == "paper") {
        box.innerHTML = `LOSER , LOSER , LOSER !!! <br> Your Response :> <i>  ${us} </i>  <br>Computer Response :> <i>  ${q} </i>`
        box.style.display = "block"
        // localStorage.setItem("", `${box.innerHTML}`)
        cs += 1;
        compscore.innerHTML = parseInt(compscore.innerHTML) + parseInt(cs)
        streak = 0;
        mystreak.innerHTML = parseInt(streak)

        // localStorage.getItem("result").replace("",`${box.innerHTML}`)


        //  box.style.background = "rgb(172, 137, 204)"
        // box.style.border = "2px solid black"
        setTimeout(() => {
            box.style.display = "none"

            // box.innerHTML =""
            // box.style.display="none"
            // box.style.background = "white"
            // box.style.border = "none"
        }, 2000);
    }

    else if (us == "rock" && q == "scissor") {
        box.innerHTML = `WINNER , WINNER , WINNER !!!<br> Your Response :> <i>  ${us} </i>  <br>Computer Response :> <i>  ${q} </i>`
        box.style.display = "block"
        // localStorage.setItem("", `${box.innerHTML}`)
        ys += 1;
        yourscore.innerHTML = parseInt(yourscore.innerHTML) + parseInt(ys)
        streak += 1;
        mystreak.innerHTML = parseInt(mystreak.innerHTML) + parseInt(streak)

        // localStorage.getItem("result").replace("",`${box.innerHTML}`)


        //      box.style.background = "rgb(172, 137, 204)"
        // box.style.border = "2px solid black"

        setTimeout(() => {
            box.style.display = "none"

            // box.innerHTML =""
            //        box.style.background = "white"
            // box.style.border = "none"
        }, 2000);
    }

    else if (us == "paper" && q == "rock") {
        box.innerHTML = `WINNER , WINNER , WINNER !!!<br> Your Response :> <i>  ${us} </i>  <br>Computer Response :> <i>  ${q} </i>`
        box.style.display = "block"
        // localStorage.setItem("", `${box.innerHTML}`)
        ys += 1;
        yourscore.innerHTML = parseInt(yourscore.innerHTML) + parseInt(ys)
        streak += 1;
        mystreak.innerHTML = parseInt(mystreak.innerHTML) + parseInt(streak)



        //  box.style.background = "rgb(172, 137, 204)"
        // box.style.border = "2px solid black"
        setTimeout(() => {
            box.style.display = "none"

            // box.innerHTML =""
            //        box.style.background = "white"
            // box.style.border = "none"
        }, 2000);
    }

    else if (us == "paper" && q == "scissor") {
        box.innerHTML = `LOSER , LOSER , LOSER !!! <br> Your Response :> <i>  ${us} </i>  <br>Computer Response :> <i>  ${q} </i>`
        box.style.display = "block"
        // localStorage.setItem("", `${box.innerHTML}`)
        cs += 1;
        compscore.innerHTML = parseInt(compscore.innerHTML) + parseInt(cs)
        streak = 0;
        mystreak.innerHTML = parseInt(streak)


        //  box.style.background = "rgb(172, 137, 204)"
        // box.style.border = "2px solid black"
        setTimeout(() => {
            box.style.display = "none"

            // box.innerHTML =""
            //        box.style.background = "white"
            // box.style.border = "none"
        }, 2000);
    }


    else if (us == "scissor" && q == "paper") {
        box.innerHTML = `WINNER , WINNER , WINNER !!!<br> Your Response :> <i>  ${us} </i>  <br>Computer Response :> <i>  ${q} </i>`
        box.style.display = "block"
        // localStorage.setItem("", `${box.innerHTML}`)
        ys += 1;
        yourscore.innerHTML = parseInt(yourscore.innerHTML) + parseInt(ys)
        streak += 1;
        mystreak.innerHTML = parseInt(mystreak.innerHTML) + parseInt(streak)


        //  box.style.background = "rgb(172, 137, 204)"
        // box.style.border = "2px solid black"
        setTimeout(() => {
            box.style.display = "none"

            // box.innerHTML = ""
            // box.style.background = "white"
            // box.style.border = "none"
        }, 2000);
    }
    else if (us == "scissor" && q == "rock") {
        box.innerHTML = `LOSER , LOSER , LOSER !!! <br> Your Response :> <i>  ${us} </i>  <br>Computer Response :> <i>  ${q} </i>`
        box.style.display = "block"
        // localStorage.setItem("", `${box.innerHTML}`)
        cs += 1;
        compscore.innerHTML = parseInt(compscore.innerHTML) + parseInt(cs)
        streak = 0;
        mystreak.innerHTML = parseInt(streak)


        // box.style.background = "rgb(172, 137, 204)"
        // box.style.border = "2px solid black"
        setTimeout(() => {
            box.style.display = "none"

            // box.innerHTML = ""
            // box.style.background = "white"
            // box.style.border = "none"
        }, 2000);
    }

    else {
        alert("DON'T TRY TO BE OVERSMART . DO WHAT YOU ARE TOLD")
    }

    localStorage.setItem("maxstreak", `${mystreak.innerHTML}`)
    if (mystreak.innerHTML > maxstreak.innerHTML) {
        maxstreak.innerHTML = localStorage.getItem("maxstreak")

    }

    localStorage.setItem("whole", `${final.innerHTML}`)
   

    
    let result = []
    result.push(`{${us},${q}},`)
    final.innerHTML = result + final.innerHTML 

    aaa.innerHTML = " GAME RECORD HERE  "


   
   
    let fh = final.offsetHeight
    // console.log(fh)
    rr = fh - 100 + "px"
    // console.log(rr)
    if (fh > 116) { 
        hold.style.bottom = `-${rr}`
    }
//       if (fh >237) {
//           hold.style.bottom = "-158px"
//           document.body.style.overflow = "visible !important"
//     }
//    else if (fh > 213) {
//         hold.style.bottom = "-134px"
//         document.body.style.overflow = "visible !important"
//     }
//     else if (fh > 189) {
//         hold.style.bottom = "-110px"
//         document.body.style.overflow = "visible !important"
//     }
//     else if (fh > 165) {
//         hold.style.bottom = "-86px"
//         document.body.style.overflow = "visible !important"
//     }
//     else if (fh > 143) {
//         hold.style.bottom = "-62px"
//         document.body.style.overflow = "visible !important"
//     }
//     else if (fh > 117) {
//         hold.style.bottom = "-48px"
//         document.body.style.overflow = "visible !important"
//     }
} 
   


//     let con = confirm("Do u want to play")
// if (con) {
//     Play()
// }

again.addEventListener("click", () => {
    Play();
})

show.addEventListener("click", () => {
    box.style.display = "block"
})

hide.addEventListener("click", () => {
    box.style.display = "none"
})

hold.addEventListener("click", () => {
    final.classList.toggle("disp")

})


if (yourscore.innerHTML > 5 && compscore.innerHTML < 5) { 
    alert("You are doing well. keep going")
}


// destructuring assignment and spread opertsor

// let arq=[1,2,3,4]
// let [w, e, t, y] = arr

// console.log(w, e, t, y)


// let obj = {
//     p: "sam",
//     q: "sara",
//     r: "sana"
// }

// let c = {...obj}
// console.log(c)
















