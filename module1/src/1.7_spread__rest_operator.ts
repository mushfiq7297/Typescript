{
//spread operator
//For array
const shopList1: string[] = ['book', 'pen', 'pencil']
const shopList2: string[] = ['watch', 'notes', 'cup']

shopList1.push(...shopList2)

//For Object

const books1 : {
    educational : string;
    selfhelp : string;
} =
 {
    educational : 'javascript',
    selfhelp : 'the secret',
}
const books2 : {
    educational : string;
    selfhelp : string;
} =
 {
    educational : 'Typescript',
    selfhelp : 'the Forty Rules of Love',
}

const bookList = {
    ...books1,
    ...books2
}


//Rest operator

const greetFriends = (...friends : string[]) => {
    friends.forEach((friend : string) => console.log(`hi ${friend}`))
}

greetFriends('rahim', 'karim');















}