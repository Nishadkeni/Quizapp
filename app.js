const questions = 
[
    {
    'que': 'Which of the following is a markup language?',
    'a': 'PHP',
    'b': 'CSS',
    'c': 'Javascipt',
    'd': 'HTML',
    'correct': 'd'
    },
    {
        'que': 'How you detect the application name of the client browser?',
        'a': 'navigator.appName',
        'b': 'navigator.browserName',
        'c': 'browser.name',
        'd': 'none of the above',
        'correct': 'a'
    },
    {
        'que': 'The JavaScript Date is fundamentally specified as ____',
        'a': 'The number of picoseconds elapsed since January 1, 1970',
        'b': 'The number of days that have elapsed since January 1, 1980',
        'c': 'The number of milliseconds elapsed since January 1, 1970',
        'd': 'The number of minutes elapsed since January 1, 1980',
        'correct': 'c'
    }
]
let index=0;
let total = questions.length;
let right = 0, wrong = 0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return end();
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesbox.innerText = ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {
    const data = questions[index]
    const ans = getanswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getanswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
        }
    }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const end = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">    
    <h2>Thank you for playing the quiz.</h2>
    <h2> ${right} / ${total} are correct</h2>
    </div>
    `
}
loadQuestion()