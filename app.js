const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz');
const result = document.querySelector('.result');

form.addEventListener('submit', event => {
    event.preventDefault();


    let score = 0;
    const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    answers.forEach((answer, index) => {
        if (answer === correctAnswers[index])
            score += 25;
    });
    // while using bootstrap i can't change this
    // result.style.display = 'd-block';

    // window.scrollTo(0,0);
    scrollTo(0, 0);

    result.classList.remove('d-none');
    let output = 0;

    const timer = window.setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score)
            clearInterval(timer);
        else output++;
    }, 50);

});