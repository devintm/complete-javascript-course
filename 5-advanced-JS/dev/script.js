/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// ----------------------------------------------------------------------------
// Version 1 (Easy Level Quiz)

// NOTE - this is "immediately invoked function expression" which will allow us to have a new scope with a private data scope
(function() {
    
})();

/*
(function() {
    // Question "function constructor"
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // Add a method to the constructor's prototype - this makes this method available to all the q1, q2 and q3 objects via the prototype object.
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct Answer!');
        } else {
            console.log('Wrong Answer. Try again.')
        }
    }


    var q1 = new Question('Is JavaScript the coolest programming language?', 
                         ['Yes', 'no'],
                         0);

    var q2 = new Question('What is the name of the course\'s teacher?',
                         ['John', 'Michael', 'Dev'],
                         2);

    var q3 = new Question('What best describes coding?', ['Fun', 'Boring'], 0)


    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    // Display the select random question
    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));


    questions[n].checkAnswer(answer);
    
})();
*
*/




// ----------------------------------------------------------------------------
// Version 2 (Expert Level Quiz)

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/



// NOTE - this is "immediately invoked function expression" which will allow us to have a new scope with a private data scope
(function() {
    // Question "function constructor"
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // Add a method to the constructor's prototype - this makes this method available to all the q1, q2 and q3 objects via the prototype object.
    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (parseInt(ans) === this.correct) {
            console.log('Correct Answer!');
            sc = callback(true);
        } else {
            // console.log("Final Score: " + score);
            console.log('Wrong Answer.')
            sc = callback(false);
        }
        
        this.displayScore(sc);   
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('-------------------------------');
    }
        
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    var q1 = new Question('Is JavaScript the coolest programming language?', 
                         ['Yes', 'no'],
                         0);

    var q2 = new Question('What is the name of the course\'s teacher?',
                         ['John', 'Michael', 'Dev'],
                         2);

    var q3 = new Question('What best describes coding?', ['Fun', 'Boring'], 0)

    var questions = [q1, q2, q3];

    
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        // Display the select random question
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        questions[n].checkAnswer(answer, keepScore);

        // Queue up the next question
        if (answer !== 'exit') {
            nextQuestion();
        }
    }
    
    nextQuestion();
    
})();




