//counter up start//
let counters = document.querySelectorAll(`.counter_card`);
counters.forEach((counter) => {
    let endingValue = counter.dataset.num;
    let count = 0;
    let duration = 100;

    let counting = setInterval(() => {
        counter.innerHTML = count++;
        if (count > endingValue){
            clearInterval(counting)
        }
    }, (duration / endingValue));
    
});
// countern up ends//
let paymentButton = document.querySelector(`.btn`);
let massege = document.querySelector(`.msg`);

function confirmMsg() {
    massege.classList.add(`active`);
    setTimeout(() => {
        massege.classList.remove(`active`);
    }, 4000);
}
paymentButton.addEventListener(`click`, confirmMsg);