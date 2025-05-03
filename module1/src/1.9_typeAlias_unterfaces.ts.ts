{
    type BookEducational = string;
    type BookSelfhelp = string;
    type  Book = {
        educational : BookEducational;
        selfhelp : BookSelfhelp;
    
    }

    const bookEducational : BookEducational = 'typescript'
    const bookSelfhelp : BookSelfhelp = 'the Secret'

const book: Book ={
    educational : bookEducational,
    selfhelp: bookSelfhelp
}


//for function

type Add = (num1:number, num2:number) => number;
const add:Add = (num1, num2) => num1+num2


}