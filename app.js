const bill = document.querySelector('#bill');
const peoples = document.querySelector('#num-people');
const customTip = document.querySelector('#custom-tip');
const resetBtn = document.querySelector('#reset-button');
const calBtn = document.querySelector('#cal-button');
const totalAmountDis = document.querySelector('#total-amount-display');
const tipAmountDis = document.querySelector('#tip-amount-display');
const tipPerAmountDis = document.querySelector('#tip-per-person-amount-display');
const toatlPerAmountDis = document.querySelector('#total-per-person-amount-display');
const buttons = document.querySelectorAll('.tip-percent-btn');


let BtnArr =  Array.from(buttons);

BtnArr[0].addEventListener('click', ()=>{
    if(bill.value === ""){
  alert('Please Enter The All fields');
  }
  let tips_5 = bill.value / 100 * BtnArr[0].value;
  tipAmountDis.innerHTML = "$" + tips_5.toString().slice(0, 8);

   let Totaltips = tips_5 + parseFloat(bill.value);
   totalAmountDis.innerHTML = "$" + Totaltips.toString().slice(0, 8); 

   let tipPerPerson = tips_5 / peoples.value;
   tipPerAmountDis.innerHTML = "$" + tipPerPerson.toString().slice(0, 8);
   
   let totalPerPerson = Totaltips / peoples.value;
   toatlPerAmountDis.innerHTML = "$" + totalPerPerson.toString().slice(0, 8);

});

BtnArr[1].addEventListener('click', ()=>{
      if(bill.value === ""){
  alert('Please Enter The All fields');
  }
  let tips_10 = bill.value / 100 * BtnArr[1].value;
  tipAmountDis.innerHTML = "$" + tips_10.toString().slice(0, 8);

   let Totaltips = tips_10 + parseFloat(bill.value);
   totalAmountDis.innerHTML = "$" + Totaltips.toString().slice(0, 8); 

   let tipPerPerson = tips_10 / peoples.value;
   tipPerAmountDis.innerHTML = "$" + tipPerPerson.toString().slice(0, 8);
   
   let totalPerPerson = Totaltips / peoples.value;
   toatlPerAmountDis.innerHTML = "$" + totalPerPerson.toString().slice(0, 8);
});

BtnArr[2].addEventListener('click', ()=>{
      if(bill.value === ""){
  alert('Please Enter The All fields');
  }
  let tips_15 = bill.value / 100 * BtnArr[2].value;
  tipAmountDis.innerHTML = "$" + tips_15.toString().slice(0, 8);

   let Totaltips = tips_15 + parseFloat(bill.value);
   totalAmountDis.innerHTML = "$" + Totaltips.toString().slice(0, 8); 

   let tipPerPerson = tips_15 / peoples.value;
   tipPerAmountDis.innerHTML = "$" + tipPerPerson.toString().slice(0, 8);
   
   let totalPerPerson = Totaltips / peoples.value;
   toatlPerAmountDis.innerHTML = "$" + totalPerPerson.toString().slice(0, 8);
});

BtnArr[3].addEventListener('click', ()=>{
      if(bill.value === ""){
  alert('Please Enter The All fields');
  }
  let tips_25 = bill.value / 100 * BtnArr[3].value;
  tipAmountDis.innerHTML = "$" + tips_25.toString().slice(0, 8);

   let Totaltips = tips_25 + parseFloat(bill.value);
   totalAmountDis.innerHTML = "$" + Totaltips.toString().slice(0, 8); 

   let tipPerPerson = tips_25 / peoples.value;
   tipPerAmountDis.innerHTML = "$" + tipPerPerson.toString().slice(0, 8);
   
   let totalPerPerson = Totaltips / peoples.value;
   toatlPerAmountDis.innerHTML = "$" + totalPerPerson.toString().slice(0, 8);
});

BtnArr[4].addEventListener('click', ()=>{
      if(bill.value === ""){
  alert('Please Enter The All fields');
  }

  let tips_50 = bill.value / 100 * BtnArr[4].value;
  tipAmountDis.innerHTML = "$" + tips_50.toString().slice(0, 8);

   let Totaltips = tips_50 + parseFloat(bill.value);
   totalAmountDis.innerHTML = "$" + Totaltips.toString().slice(0, 8); 

   let tipPerPerson = tips_50 / peoples.value;
   tipPerAmountDis.innerHTML = "$" + tipPerPerson.toString().slice(0, 8);
   
   let totalPerPerson = Totaltips / peoples.value;
   toatlPerAmountDis.innerHTML = "$" + totalPerPerson.toString().slice(0, 8);
});


function calculateTip() {
  if(bill.value === "" || customTip.value ===""){
  alert('Please Enter The All fields');
  }

    let tips = bill.value / 100 * customTip.value;
   tipAmountDis.innerHTML = "$" + tips.toString().slice(0, 8);

   let Totaltips = tips + parseFloat(bill.value);
   totalAmountDis.innerHTML = "$" + Totaltips.toString().slice(0, 8); 

   let tipPerPerson = tips / peoples.value;
   tipPerAmountDis.innerHTML = "$" + tipPerPerson.toString().slice(0, 8);
  // console.log(tipPerPerson);
   
   let totalPerPerson = Totaltips / peoples.value;
   toatlPerAmountDis.innerHTML = "$" + totalPerPerson.toString().slice(0, 8);

}

calBtn.addEventListener('click', calculateTip);



resetBtn.addEventListener('click', () => {
  bill.value = '';
  peoples.value = '';
  customTip.value = '';
  totalAmountDis.innerHTML = '$0.00';
  tipAmountDis.innerHTML = '$0.00';
  tipPerAmountDis.innerHTML = '$0.00';
  toatlPerAmountDis.innerHTML = '$0.00';
});
