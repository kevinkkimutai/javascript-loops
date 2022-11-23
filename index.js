function print (fname, lname) {
 console.log(`${fname} ${lname}`)
}
print("Kelvin", "Kimutai")

// print hello 5 times using loops
//for loop
// syntax: for(iteration initializer; stopping condition; itaration continuer) {  }

for (let i = 1; i < 6; i++) {
    print(i, "Hello")
}

// print (hello, i => i*i)
for (let i = 1; i < 6; i++) {
    print("Hello, i => ", i*i)
}

// while loop
//syntax: while(boolean condition) { }
let j = 1; 
while (j < 6) {
    print(j, "Wakanda")
    //j += 1
    //j++
    j = j + 1;
}
// do-while-loop
// syntax: do{ } while(boolean condition)
let m = 5
do {
    print(m, "Hello")
    m++
}while(m < 11)

let z = 1
while(z < 1) {
    print("hello", "z")
    z++
}
do { 
    print("hello", "random")
    z++
}while (z < 1)