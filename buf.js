let name = 'Melo'
let age = 22

function sum(a,b){
    return a*b
}
function func(){}
function crate(){}


    

function readFile(input) {
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsText(file)

    reader.onload = function () {

        //       popoxakani pah@ 
        let fileContent = reader.result
        let variebleMatch = /\b(let|const)\b\s+([a-zA-Z$_][a-zA-Z0-9$_]*)/g;
        let variables = fileContent.match(variebleMatch)
        let variebleNames = []
        variebleNames.push(variables.map((variable) => {
        return variable.split(/\s+/)[1];
        }));
        let variableCuantity = variebleNames[0].length

        const div = document.getElementById('result')
        let p1 = document.createElement('p')
        p1.innerHTML = (`Quantity of variables: ${variableCuantity},
        variablesNames-----${variebleNames}`)
        p1.classList.add('style')
        div.append(p1)

       
        

        //       fnctioni pah@
        let funcMatch = /\b(function)\b\s+([a-zA-Z$_][a-zA-Z0-9$_]*)/g
        let funcs = fileContent.match(funcMatch)
        let funcName = []
        funcName.push(funcs.map((fn) => {
            return fn.split(/\s+/)[1];
            }));
        let funcQuantity = funcName[0].length

        let p2 = document.createElement('p')
        p2.innerHTML = (`Quantity of func: ${funcQuantity}
        functionNames-----${funcName}`)
        p2.classList.add('style')
        div.append(p2)


    };

    reader.onerror = function () {
        console.log(reader.error);
    };

}



