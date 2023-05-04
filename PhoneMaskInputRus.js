class PhoneMaskInputRus {


    constructor(element) {
        this._phoneInputs = document.querySelectorAll(element);
        this._run();
    }

    _run() {
        this._phoneInputs.forEach((phone) => {            
            phone.addEventListener('keydown', (e) => this._onPhoneKeyDown(e));            
            phone.addEventListener('input', (e) => this._onPhoneInput(e), false);            
            phone.addEventListener('paste', (e) => this._onPhonePaste, false);
        });
    }

    /**
     * Return stripped input value — just numbers
     * @param {*} input 
     * @returns 
     */
    _inputNumbersValue(input) {
        return input.value.replace(/\D/g, '');
    }

    _onPhoneKeyDown(e) {
        let inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }

    _onPhoneInput(e) {
        let input = e.target,
            inputNumbersValue = this._inputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";
    
        if (!inputNumbersValue) {
            return input.value = "";
        }
    
        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }
  
        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }

    _onPhonePaste(e) {
        let input = e.target,
            inputNumbersValue = this._inputNumbersValue(input);
        let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    }
}