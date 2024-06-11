function checkAnswers() {
    const correctAnswers = {
        q1: "Париж",
        q2: "Нью-Дели",
        q3: "Сеул",
        q4: "Анкара",
        q5: "Претория",
        q6: "Дамаск"
    };

    let score = 0;

    for (const question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    alert(`Вы правильно ответили на ${score} из 6 вопросов.`);
}