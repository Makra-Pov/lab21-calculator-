
    let currentInput = '';
    let operator = null;
    let previousValue = '';

    const resultScreen = document.getElementById('result');

    function appendValue(value) {
      if(currentInput=="0"){
        currentInput='';
      }


      currentInput += value;
      updateScreen(currentInput);
    }

    function clearScreen() {
      currentInput = '';
      previousValue = '';
      operator = null;
      updateScreen('0');
    }

    function setOperator(op) {
      if (currentInput === '' && previousValue === '') return;
      if (currentInput !== '') {
        if (previousValue !== '') calculate();
        previousValue = currentInput;
        currentInput = '';
      }
      operator = op;
      //clearScreen();
      updateScreen( operator);
    }

    function calculate() {
      if (previousValue === '' || currentInput === '' || operator === null) return;
      const num1 = parseFloat(previousValue);
      const num2 = parseFloat(currentInput);
      let result;

      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : 'Error';
          break;
        default:
          return;
      }

      updateScreen(result);
      previousValue = result;
      currentInput = '';
      operator = null;
    }

    function updateScreen(value) {
      resultScreen.textContent = value;
    }

