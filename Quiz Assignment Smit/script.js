    let questionObj = [
        {
            question: "What is the capital of Pakistan?",
            a: "Karachi",
            b: "Lahore",
            c: "Islamabad",
            d: "Peshawar",
            correctAnswer: "c"
        },
        {
            question: "What is the largest continent?",
            a: "Africa",
            b: "Asia",
            c: "Europe",
            d: "Australia",
            correctAnswer: "b"
        },
        {
            question: "Who invented the telephone?",
            a: "Alexander Graham Bell",
            b: "Thomas Edison",
            c: "Nikola Tesla",
            d: "Albert Einstein",
            correctAnswer: "a"
        },
        {
            question: "Which planet is known as the Red Planet?",
            a: "Earth",
            b: "Jupiter",
            c: "Mars",
            d: "Venus",
            correctAnswer: "c"
        },
        {
            question: "What is the tallest mountain in the world?",
            a: "K2",
            b: "Mount Everest",
            c: "Kangchenjunga",
            d: "Makalu",
            correctAnswer: "b"
        }
    ];

    let right = 0;
    let wrong = 0;
    let index = 0;
    let total = questionObj.length;
    let main = document.querySelector(".main")
    let questionIndex = questionObj[index]
    let h3 = document.querySelector("h3");
    let p = document.querySelector("p");
    let input = document.querySelectorAll("input");
    let btn = document.querySelector("button");


    function loadQuestion(){

        
            if(index === total){
                return endQuiz();
            }
        reset();
        questionIndex = questionObj[index]
        h3.innerText =`${index+1}) ${ questionIndex.question}`;
        input[0].nextElementSibling.innerText = questionIndex.a;
        input[1].nextElementSibling.innerText = questionIndex.b;
        input[2].nextElementSibling.innerText = questionIndex.c;
        input[3].nextElementSibling.innerText = questionIndex.d;

    }

    btn.addEventListener("click", function(){
        let tick = getAnswer()
        // console.log(tick);
        
        if(tick === questionIndex.correctAnswer){
            right++;

        }else{
            wrong--;
        }

        index++;
        calculation()
        loadQuestion()
    })

    function getAnswer() {
        let score; 
        input.forEach(function(option) {
            if(option.checked){
            score = option.value;    
            }
            
        });
        return score;
    }

    function reset() {
        input.forEach(function(option) {
            if(option.checked){
            option.checked = false;    
            }
            
        });

    }
    function calculation(){
        let average = `Your Score${right}/${total} percentage(${(right*100)/total}%)`
        // let percentage = ``
        p.innerText = average;
        // p.innerText = percentage;
        

    
        
    }
    function endQuiz() {
        let average = `Your Score: ${right}/${total} - Percentage: ${(right * 100) / total}%`;
        document.querySelector(".main").innerHTML = `<h3>Thank You for participating! <br> ${average} <br> Your engagement is greatly appreciated, and we hope you enjoyed the quiz!  <br></h3>`;
    }
    


    loadQuestion()

