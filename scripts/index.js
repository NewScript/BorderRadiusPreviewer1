const valueRadius = document.getElementsByTagName('input');
const txtCss = document.getElementById('txtCss');
const objectTest = document.getElementById('objectTest');

function changeRadius(e){
    objectTest.style[`border${e.target.id}Radius`] = `${e.target.value}%`;
    showCss();

}

function showCss(){
    txtCss.textContent = 
    `border-top-left-Radius = ${valueRadius[0].value}%
border-top-right-Radius = ${valueRadius[1].value}% 
border-bottom-right-Radius = ${valueRadius[3].value}% 
border-bottom-left-Radius = ${valueRadius[2].value}% 
`
}

for (const iterator of valueRadius) {
    iterator.addEventListener('input', changeRadius);  
}

valueRadius[0].focus();

showCss();
