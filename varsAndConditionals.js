// let jonSnowAttack = 25;
// let jamieLannisterAttack = 35;

// // if(jonSnowAttack > jamieLannisterAttack){
// //     console.log("Jon has a better attack")
// // } else if (jonSnowAttack === jamieLannisterAttack){
// //     console.log("they have the same attack!")
// // } else{
// //     console.log("Jamie has a better attack")
// // }

// let jonSnowHealth = 100;
// let jonSnowDefense = 0;

// if(jonSnowHealth <= jamieLannisterAttack){
//     console.log("Jon Snow has been slain");
// } else {
//     jonSnowHealth -= jamieLannisterAttack
//     console.log(`Jon Snows health is now ${jonSnowHealth}`)
// }

// jonSnowDefense += 25; 

// if(jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
//     console.log("Jon has been slain");
// } else {
//     jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//     console.log(`Jon Snows Health is now ${jonSnowHealth}`)
// }

let backPack = []

backPack.push('sword', 'shield', 'food')

console.log(backPack)

let belt = backPack.shift()
console.log(belt)

let furCoat = "fur coat";

backPack.unshift(furCoat)
console.log(backPack)

let itemCount = backPack.length;
console.log(itemCount)

backPack.push('flint', 'blanket', 'knife', 'toothbrush')
console.log(backPack)

let backPack2 = backPack.splice(2,3)
console.log(backPack2)



// console.log(backPack2[0])

for(i = 0; i < 3; i++) {
    console.log(backPack[i])
}

if(backPack.length >= 3){
    for(i = 0; i < 3; i++) {
        console.log(backPack[i])
    }
}