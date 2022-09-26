let input = document.querySelector(".input");
let output = document.querySelector(".output");
const regexp = new RegExp('#\\w+');
const exclude = new RegExp('^\\#');

const exclude2 = new RegExp('\\*\\*');
const exclude2after = new RegExp('\\**$');
const regexp2 = new RegExp('^\\*\\*\\w+\\*\\*');

function translate() {

    const string = input.value;
    output.innerHTML = input.value;

   if (regexp.test(string)) {
   output.innerHTML = `<h1>${input.value.replace(exclude, '')}</h1> `;
   console.log(input.value)
   } 

   if (regexp2.test(string)) {
    output.innerHTML = `<b>${input.value}</b> `; 
   }

   

   //console.log(string.replace(regexp, `${string} + asd`))
};


document.querySelector(".input").oninput  = translate;