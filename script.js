let input = document.querySelector(".input");
let output = document.querySelector(".output");
const regexp = new RegExp('#\\w+');
const regexp2 = new RegExp('^\\*\\*\\w+\\*\\*');

function translate() {
    console.log(regexp);
    console.log(regexp2);
    const string = input.value;
    output.innerHTML = input.value;

   if (regexp.test(string)) {
   output.innerHTML = `<h1>${input.value}</h1> `;
   } 

   if (regexp2.test(string)) {
    output.innerHTML = `<b>${input.value}</b> `
   }

   

   //console.log(string.replace(regexp, `${string} + asd`))
};


document.querySelector(".input").oninput  = translate;