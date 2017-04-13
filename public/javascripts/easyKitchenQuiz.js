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
				scope.quizLength=0;
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
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
			question: 'images/questions/pot.png',
			options: ["pot", "pott", "poht", "pawt"],
			answer: 0
		},
		{
			question: 'images/questions/pan.png',
			options: ["pann", "pan", "payn", "pen"],
			answer: 1
		},
		{
			question: 'images/questions/cup.jpg',
			options: ["cupp", "cup", "kup", "kupp"],
			answer: 1
		},
		{
			question: 'images/questions/egg.jpg',
			options: ["ehgg", "ehg", "eg", "egg"],
			answer: 3
		},
		{	
			question: "images/questions/milk.png",
			options: ["milk", "melk", "milck", "melck"],
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