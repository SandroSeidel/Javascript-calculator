class CalculatorCore {

    constructor() {

        this._displayItems = document.querySelector("#display").innerHTML
        this._operationArray = []
        this.buttonEvents()

    }

    refreshScreen() {
        console.log('Refresh screnn', this._operationArray)
        let displayItems = this._operationArray.join('')

        document.querySelector('#display').innerHTML = displayItems
    }

    clearScreen() {
        this._operationArray = [] 
    }

    resolveCalc() {
        let operation = this._operationArray.join('')
        this.clearScreen()
        this._operationArray.push(eval(operation).toString())
    }

    buttonEvents() {

        let buttons = document.querySelectorAll("button");

        buttons.forEach( (button) => {
            button.addEventListener('click', () => {
                // console.log(button.innerText);
                this.executeButton(button.innerText)
            })
        })
    }

    executeButton(value) {

        if (this._operationArray.length <= 10) {
            switch (value ) {
                case '.':
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '+':
                case '-':
                    this._operationArray.push(value)
                    break
                case '/':
                    this._operationArray.push('/')
                    break
                case '*':
                    this._operationArray.push('*')
                    break
                case 'xʸ':
                    this._operationArray.push('**')
                    break
                
            }
        }

        switch (value) {
                case '%':
                    break
    
                case '√':
                    this._operationArray.push(value)
                    this.replaceOperation()
                    break
                
                case '¹/x':
                    break
    
                case '±':
                    break
    
                case '=':
                    this.resolveCalc()
                    break
    
                case 'CE':
                    this.clearScreen()
                    break
    
                case 'C':
                    this.clearScreen()
                    break

                case '←':
                    this._operationArray.pop() 
                    break
        }

        this.refreshScreen()
        
        if (this._operationArray.length == 0) {
            document.querySelector('#display').innerHTML = '0'
        }

        console.log(this._operationArray)
     
    }

    replaceOperation() {
        if (this._operationArray.includes('√')) {
           let lastArrayItem = this._operationArray.pop()
           let lastArrayItemIndex = this._operationArray.indexOf(lastArrayItem)
           console.log('replaceOPeration', lastArrayItemIndex)

        }
    }

}
