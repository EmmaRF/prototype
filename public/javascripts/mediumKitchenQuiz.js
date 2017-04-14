var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'javascripts/templateQuiz.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
				scope.quizLength= 0;
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
				scope.info = "Emma wants more practice cooking. Now you should get more practice spelling!";
			}
		

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
					scope.quizLength=scope.quizLength+1;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

app.factory('quizFactory', function() {
	var questions = [
		{
			// question: "Which is the largest country in the world by population?",
			question: 'images/questions/butter.png',
			options: ["buter", "buterr", "butterr", "butter"],
			answer: 3
		},
		{
			question: 'images/questions/stove.png',
			options: ["stov", "stoove", "stove", "stohv"],
			answer: 2
		},
		{
			question: 'images/questions/banana.png',
			options: ["bananna", "bannana", "banana", "bannanna"],
			answer: 2
		},
		{
			question: 'images/questions/juice.png',
			options: ["joos", "juice", "juce", "jooce"],
			answer: 1
		},
		{	
			question: "images/questions/tomato.png",
			options: ["tomato", "tommato", "tommatoe", "tomatoe"],
			answer: 0
		}
	];

	return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
		

	};
});