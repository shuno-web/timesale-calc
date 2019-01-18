'use strict';

{
  const price = document.getElementById('price');
  const per1 = document.getElementById('per1');
  const per2 = document.getElementById('per2');
  const result1 = document.getElementById('result1');
  const result2 = document.getElementById('result2');
  const calc1 = document.getElementById('calc1');
  const calc2 = document.getElementById('calc2');


    calc1.addEventListener('click', () => {
      const firstResult = price.value * (1 - per1.value);
      result1.textContent = '結果は ' + firstResult + ' 円です。';
    });

    calc2.addEventListener('click', () => {
      const secondResult = price.value * (1 - per1.value) * (1 - per2.value);
      const resultPer = ((1 - per1.value) * (1 - per2.value) * 100);
      result2.textContent ='結果は ' + secondResult + ' 円です。定価の' + resultPer + ' %になりました。';
    });

}
