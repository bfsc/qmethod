var app = angular.module('qmethod', ['ui.router', 'dndLists', 'igTruncate', '720kb.tooltips']);

// ========== CONFIG
app.config(function ($stateProvider, $locationProvider) {
  
  $locationProvider.hashPrefix('');
  
  $stateProvider.state({
	name: 'step1',
	url: '/step1',
	templateUrl : 'templates/step1.html',
	controller  : 'step1Ctrl',
  });
  
  $stateProvider.state({
	name: 'step2',
	url: '/step2',
	templateUrl : 'templates/step2.html',
	controller  : 'step2Ctrl',
  });
  
  $stateProvider.state({
	name: 'step3',
	url: '/step3',
	templateUrl : 'templates/step3.html',
	controller  : 'step3Ctrl',
  });
  
  $stateProvider.state({
	name: 'step4',
	url: '/step4',
	templateUrl : 'templates/step4.html',
	controller  : 'step4Ctrl',
  });
  
  $stateProvider.state({
	name: 'step5',
	url: '/step5',
	templateUrl : 'templates/step5.html',
	controller  : 'step5Ctrl',
  });
  
  $stateProvider.state({
	name: 'step6',
	url: '/step6',
	templateUrl : 'templates/step6.html',
	controller  : 'step6Ctrl',
  });
  
  $stateProvider.state({
	name: 'step7',
	url: '/step7',
	templateUrl : 'templates/step7.html',
	controller  : 'step7Ctrl',
  });
});

// ========== UTIL

var config = {
    apiKey: "AIzaSyA15U4F-Q97flUntlLtVCaKDioVOhpszWA",
    authDomain: "qmethod-87099.firebaseapp.com",
    databaseURL: "https://qmethod-87099.firebaseio.com",
    projectId: "qmethod-87099",
    storageBucket: "qmethod-87099.appspot.com",
    messagingSenderId: "639626576200"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();

// ========== CONTROLLERS
app.controller("appCtrl", function($scope, $rootScope, $state) {
	$state.go('step1');
});

app.controller("step1Ctrl", function($scope, $rootScope, $state) {
	$scope.next = function () {
		$state.go('step2');
	}
});

app.controller("step2Ctrl", function($scope, $rootScope, $state) {	
	$scope.next = function () {
		$state.go('step3');
	}
	
	$scope.back = function () {
       $state.go('step1');
	}
});

app.controller("step3Ctrl", function($scope, $rootScope, $state) {
	
    if ( typeof $rootScope.statements == "undefined" ) {
        $rootScope.statements = [
            {id:1, statement:'The evidence from rapid reviews is good enough to inform low-risk, emergent policy or decision-making needs when the alternative is the use of no evidence.'},
            {id:2, statement:'When time allows, a comprehensive systematic review of all available evidence should always be conducted.'},
            {id:3, statement:'Deviating from accepted systematic review methods may introduce bias and impact the validity of the resulting rapid review, which may be an unacceptable risk for some knowledge users (practitioners).'},
            {id:4, statement:'Further research comparing the methods and results of rapid reviews and systematic reviews is required before I decide how I feel about rapid reviews.'},
            {id:5, statement:'Rapid reviews are too focused in scope and/or context to be generalizable to a variety of knowledge users (practitioners).'},
            {id:6, statement:'Rapid reviews mean different things to different people.'},
            {id:7, statement:'Rapid reviews should only precede a more comprehensive and rigorous systematic review.'},
            {id:8, statement:'The opportunity cost of a comprehensive systematic review is too high and it is more advantageous to conduct rapid reviews when timeliness is a factor.'},
            {id:9, statement:'Rapid reviews do not replace systematic reviews.'},
            {id:10, statement:'All evidence synthesis products, including rapid reviews and systematic reviews, can be conducted very well or very poorly.'},
            {id:11, statement:'Rapid reviews are comparable to systematic reviews except they are done in a more timely fashion.'},
            {id:12, statement:'Rapid reviews are \'quick and dirty\' systematic reviews.'},
            {id:13, statement:'Rapid reviews need to be tailored to the specific needs of the knowledge user (practitioners).'},
            {id:14, statement:'Rapid reviews meet the needs of knowledge users (practitioners).'},
            {id:15, statement:'There are few evidence on rapid reviews, so I cannot support or oppose their use in decision-making.'},
            {id:16, statement:'There is so much overlap across the various evidence synthesis methods that I cannot generalize my opinion to favor one over the other without the context of the decision at hand.'},
            {id:17, statement:'There is a risk involved in tailoring accepted systematic review methods to produce rapid reviews that we do not yet understand.'},
            {id:18, statement:'Using rapid reviews to inform decisions is better than using no evidence at all.'},
            {id:19, statement:'It is always appropriate to conduct a rapid review.'},
            {id:20, statement:'Rapid reviews and all other evidence synthesis products hold the same value as long as they retain the core value of being transparent in conduct, include the highest quality evidence available and present results with a qualification on the strength of evidence.'},
            {id:21, statement:'Appropriateness of a rapid review varies with the type of decision being made, and any financial, legal or other important contextual facets tied to the decision.'},
            {id:22, statement:'My confidence in a rapid review is impacted by which methods are tailored to speed up the review process.'},
            {id:23, statement:'My confidence in a rapid review is directly tied to results being presented and contextualized by the strength and applicability of the evidence.'},
            {id:24, statement:'It is important to have minimum standards for the methodological conduct of rapid reviews.'},
            {id:25, statement:'It is important to have minimum standards for the reporting of rapid reviews.'},
            {id:26, statement:'Standardization of rapid review methods may conflict with the needs of knowledge users (practitioners).'},
            {id:27, statement:'The value of rapid reviews in the context of emergent decision-making needs outweighs the disadvantages or risk of bias and potentially \'imperfect\' evidence.'},
            {id:28, statement:'Knowledge users don\'t always need all of the evidence, they just need the best evidence to support their decision, and what is \'best evidence\' is specific to the knowledge user (practitioner).'},
            {id:29, statement:'Knowledge users (practitioners) do not fully understand the implications of streamlining evidence synthesis methods to produce a more timely evidence product.'},
            {id:30, statement:'Reporting of the results of rapid reviews must be tailored to the knowledge user(s) (practitioners) who commissioned the review.'},
            {id:31, statement:'Rapid reviews that omit an assessment of the quality of included studies are useless to knowledge users (practitioners).'},
            {id:32, statement:'Rapid reviews can be timely and valid, even when methodological concessions are made.'},
            {id:33, statement:'Transparency of process is more important than the actual methods used to produce rapid reviews, as transparency allows the knowledge user (practitioners) to make their own assessment on validity and appropriateness.'},
            {id:34, statement:'It is appropriate to endeavor to define a single, unique methodology for rapid reviews.'},
            {id:35, statement:'Rapid reviews are not a unique methodology, they are simply a variation of a systematic review that can fall anywhere on the continuum of evidence synthesis methods.'},
            {id:36, statement:'The results from a systematic review may not differ from those of a rapid review, but more research is needed to support this theory and quantify why results may be the same or different.'},
            {id:37, statement:'I put more confidence in evidence produced in a systematic review than of a rapid review.'},
            {id:38, statement:'The more time spent conducting the review of the evidence, the more valid the results of the review will be.'},
            {id:39, statement:'Achieving a precise estimate of effect (from a systematic review) may not inform the decision-at-hand any better than a general estimate of effect (produced by a rapid review).'},
            {id:40, statement:'Rapid reviews should only be conducted when the alternate option is the use of no evidence to inform a decision.'},
            {id:41, statement:'A well-conducted rapid review may produce better evidence than a poorly conducted systematic review.'},
            {id:42, statement:'Any review of evidence that takes longer than one month to produce is not a rapid review.'},
            {id:43, statement:'Any review of evidence that takes longer than two weeks to produce is not a rapid review.'},
            {id:44, statement:'A rapid review must be justified with a valid rationale for both speeding up the process and tailoring rigourous methods for evidence synthesis.'},
            {id:45, statement:'A good quality review of evidence is determined by the methods used, not by the speed at which it is completed.'},
            {id:46, statement:'It is difficult to tell a rapid review from a systematic review unless very specific nomenclature is used in the title or description of methods.'},
            {id:47, statement:'A rapid review cannot be a systematic review.'},
            {id:48, statement:'\'Rapid review\' is too broad a phrase—doing a review in a more timely way can only be relative to how long it takes the same team to produce a full systematic review.'},
            {id:49, statement:'Producers (researchers) are more concerned with the methodology and validity of rapid reviews than knowledge users (practitioners).'},
            {id:50, statement:'It is difficult to judge the validity of a rapid review as the reporting is often truncated and protocols are not published.'},
        ];
	}
	
	//$rootScope.statements = $rootScope.statements.sort(function(a, b){return 0.5 - Math.random()});
	
    
	$scope.cards = {
		selected: null,
		first: 1,
		statements: $rootScope.statements,
	};
    
	$scope.classifications = {
		'AGREE': [],
		'NEUTRAL': [],
		'DISAGREE': [],
	};
    
    $('#helpModal').modal(show=true);
    
	//$rootScope.classifications = $scope.classifications;
    /*Checks if $rootScope is already defined (the user had made his classifications)*/
    if ( typeof $rootScope.classifications == "undefined" ) {
		$rootScope.classifications = $scope.classifications;
	} else {
		$scope.classifications = $rootScope.classifications;
	}

	
	$scope.done = function () {
/*		var counter = 0;
		
		for(var i = 0; i < $scope.cards.statements.length; i++) {
			if($scope.cards.statements[i].statement){
				counter++;
			}		
		}*/
        
   //     var goal = Object.assign({},$rootScope.statements.length);
        var goal = 50; //Javascript has handing goal an reference
        var current = $rootScope.classifications.AGREE.length +
            $rootScope.classifications.DISAGREE.length +
            $rootScope.classifications.NEUTRAL.length;
//        console.log("Goal " + goal + "; Current " + current);
        return goal == current;
	//	return counter == 0;
    };
	
	$scope.next = function () {
       $state.go('step4');
	}
	
	$scope.back = function () {
       $state.go('step2');
	}
    

	/*Auxiliary function to help skip to step4 */
	$scope.aux = function () {
		for (var i = 0; i < 50; ++i) {
			var ii = i%3;
			if (ii == 0) {
				$scope.classifications.AGREE.push($rootScope.statements.shift());
			} else if (ii == 1) {
				$scope.classifications.NEUTRAL.push($rootScope.statements.shift());
			} else if (ii == 2) {
				$scope.classifications.DISAGREE.push($rootScope.statements.shift());
			}
		}
       //$state.go('step4');
	}
    
  /*  $scope.showHelpMeDialog = function(ev) {
        $modal.open({
            templateUrl: 'helpModal.html'
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance, $log) {
                $scope.cancel = function() {]
                    $modalInstance.dismiss('cancel');
                };
            }
        })
  };*/
	
	
	/*
	$scope.showHelpMeDialog = function(ev) {
		$mdDialog.show({
		  contentElement: '#myDialog',
		  parent: angular.element(document.body),
		  targetEvent: ev,
		  clickOutsideToClose: true
		});
	  };
	
	$scope.showHelpMeDialog = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Step 3 of 6 - CLASSIFICATION')
        .textContent(`
		<b><center>PLEASE READ THESE INSCRUCTIONS<center></b><br/><br/>
		Read the folowing statements carefully and split them up into 3 piles:<br/><br/>
	  1. A pile for statements you tend to disagree with;<br/>
	  2. A pile for cards you tend to agree with;<br/>
	  3. A pile for the rest.<br/><br/>
	  
	  You can either drag the cards into one of the three piles or press 1, 2, 3 on your keyboard.<br/><br/>
	  
	  If you want to read this instruction a second time, press the help-button at the bottom right corner.`)
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
	
	$scope.onKeyDown = function ($event) {
		document.write('BLA');
		if ($event.keyCode === 49) {
			$scope.classifications.AGREE.push($scope.cards.statements[$scope.cards.first]);
			$scope.cards.statements.splice($scope.cards.first - 1, 1)
		} else if($event.keyCode === 50) {
		} else if ($event.keyCode === 51) {
			
		}
	}
	*/
	// Documentation ???
	$scope.dropAgreeCallback = function (index, item, external, type) {
		
		if ($scope.cards.first == item.id) {
			$scope.cards.first = $scope.cards.first + 1;
		}
		
		$scope.classifications.AGREE.push(item);
		
        return item;
    };
	
	$scope.dropNeutralCallback = function (index, item, external, type) {
		if ($scope.cards.first == item.id) {
			$scope.cards.first = $scope.cards.first + 1;
		}
	
		$scope.classifications.NEUTRAL.push(item);

        return item;
    };
	
		$scope.dropDisagreeCallback = function (index, item, external, type) {
		if ($scope.cards.first == item.id) {
			$scope.cards.first = $scope.cards.first + 1;
		}
		
		$scope.classifications.DISAGREE.push(item);
		
        return item;
    };
});

app.controller("step4Ctrl", function($scope, $rootScope, $state) {
	//Copies $rootScope.classifications instead of getting the reference
	$scope.classifications = JSON.parse(JSON.stringify($rootScope.classifications));
	
	$scope.ratings = {
		rating_3size:0,
		rating_3: [],
		rating_2size:0,
		rating_2: [],
		rating_1size:0,
		rating_1: [],
		rating0size:0,
		rating0: [],
		rating1size:0,
		rating1: [],
		rating2size:0,
		rating2: [],
		rating3size:0,
		rating3: [],
	};
	
	$rootScope.ratings = $scope.ratings;
	
	$scope.done = function () {
		var ratings = $scope.ratings;
		return (ratings.rating_3size + ratings.rating_2size + ratings.rating_1size + ratings.rating0size + ratings.rating1size + ratings.rating2size + ratings.rating3size) == 50;
    };
    
    $('#helpModal').modal(show=true);
	
	$scope.next = function () {
       $state.go('step5');
	}
	
	$scope.back = function () {
       $state.go('step3');
	}
	
	$scope.dropRating_3Callback = function (index, item, external, type){
		$scope.ratings.rating_3size = $scope.ratings.rating_3size + 1;
		return item;
	}
	
	$scope.dropRating_2Callback = function (index, item, external, type){
		$scope.ratings.rating_2size = $scope.ratings.rating_2size + 1;
		return item;
	}
	
	$scope.dropRating_1Callback = function (index, item, external, type){
		$scope.ratings.rating_1size = $scope.ratings.rating_1size + 1;
		return item;
	}
	
	$scope.dropRating0Callback = function (index, item, external, type){
		$scope.ratings.rating0size = $scope.ratings.rating0size + 1;
		return item;
	}
	
	$scope.dropRating1Callback = function (index, item, external, type){
		$scope.ratings.rating1size = $scope.ratings.rating1size + 1;
		return item;
	}
	
	$scope.dropRating2Callback = function (index, item, external, type){
		$scope.ratings.rating2size = $scope.ratings.rating2size + 1;
		return item;
	}
	
	$scope.dropRating3Callback = function (index, item, external, type){
		$scope.ratings.rating3size = $scope.ratings.rating3size + 1;
		return item;
	}
});

app.controller("step5Ctrl", function($scope, $rootScope, $state) {
	$rootScope.explanations = {
		agree:[{statement: $rootScope.ratings.rating3[0], explanation: null}, {statement: $rootScope.ratings.rating3[1], explanation: null}],
		disagree: [{statement: $rootScope.ratings.rating_3[0], explanation: null}, {statement: $rootScope.ratings.rating_3[1], explanation: null}],
	};
	
	$scope.explanations = $rootScope.explanations;
	
	$scope.done = function () {		
		if ($scope.explanations.agree[0].explanation === null || $scope.explanations.agree[1].explanation === null ||
				$scope.explanations.disagree[0].explanation === null || $scope.explanations.disagree[1].explanation === null) {
			return false;
		} else {
			return !$scope.explanations.agree[0].explanation.isEmpty() && !$scope.explanations.agree[1].explanation.isEmpty() &&
			!$scope.explanations.disagree[0].explanation.isEmpty() && !$scope.explanations.disagree[1].explanation.isEmpty();
		}
	}
	
	$scope.next = function () {
       $state.go('step6');
	}
	
	$scope.back = function () {
       $state.go('step4');
	}
	
	String.prototype.isEmpty = function() {
		return (this.length === 0 || !this.trim());
	};
});

app.controller("step6Ctrl", function($scope, $rootScope, $state) {
	$scope.questionnaire = {
		age: null,
		gender: null,
		country: null,
		education: null,	
		occupation: null,
		heard_sr: null,
		read_sr: null,
		author_sr: null,
		heard_rr: null,
		comments: null,
		email: null,
	};
	
	$scope.back = function () {
       $state.go('step5');
	}
	
	$scope.done = function () {		
		if ($scope.questionnaire.age === null || $scope.questionnaire.gender === null || $scope.questionnaire.country === null || 
			$scope.questionnaire.education === null || $scope.questionnaire.occupation === null || $scope.questionnaire.heard_sr === null || 
			$scope.questionnaire.read_sr === null || $scope.questionnaire.author_sr === null || $scope.questionnaire.heard_rr === null) {
			return false;
		} else {
			return !$scope.questionnaire.age.isEmpty() && !$scope.questionnaire.country.isEmpty();
		}
	}
	
	String.prototype.isEmpty = function() {
		return (this.length === 0 || !this.trim());
	};
	
	$scope.send = function () {
		$rootScope.questionnaire = $scope.questionnaire;
		
		var response = {
			//classifications: null,
			ratings: {},
			explanations: {},
			questionnaire: {},
		}
		
		/*
		if (response.classifications === null || response.classifications === undefined){
			response.classifications = "no_response";
		} else {
			
		}
		*/
		
		if ($rootScope.ratings === null || $rootScope.ratings === undefined){
			response.ratings = "no_response";
		} else {
			
			response.ratings.rating_3 = parseExplanations($rootScope.ratings.rating_3);
			response.ratings.rating_2 = parseExplanations($rootScope.ratings.rating_2);
			response.ratings.rating_1 = parseExplanations($rootScope.ratings.rating_1);
			response.ratings.rating0 = parseExplanations($rootScope.ratings.rating0);
			response.ratings.rating1 = parseExplanations($rootScope.ratings.rating1);
			response.ratings.rating2 = parseExplanations($rootScope.ratings.rating2);
			response.ratings.rating3 = parseExplanations($rootScope.ratings.rating3);
		}
		
		if ($rootScope.explanations === null || $rootScope.explanations === undefined){
			response.explanations = "no_response";
		} else {
			response.explanations.agree = [];
			for (var i = 0; i < $rootScope.explanations.agree.length; i++) {
				var explanation = {};
				explanation.statementId = $rootScope.explanations.agree[i].statement.id;
				explanation.text = $rootScope.explanations.agree[i].explanation;
				response.explanations.agree.push(explanation);
			}
			
			response.explanations.disagree = [];
			for (var i = 0; i < $rootScope.explanations.disagree.length; i++) {
				var explanation = {};
				explanation.statementId = $rootScope.explanations.disagree[i].statement.id;
				explanation.text = $rootScope.explanations.disagree[i].explanation;
				response.explanations.disagree.push(explanation);
			}
		}
		
		if ($rootScope.questionnaire.age === null || $rootScope.questionnaire.age === undefined){
				response.questionnaire.age = "no_response";
		} else {
			response.questionnaire.age = $rootScope.questionnaire.age;
		}
			
		if ($rootScope.questionnaire.gender === null || $rootScope.questionnaire.gender === undefined){
			response.questionnaire.gender = "no_response";
		} else {
			response.questionnaire.gender = $rootScope.questionnaire.gender;
		}
		
		if ($rootScope.questionnaire.country === null || $rootScope.questionnaire.country === undefined){
			response.questionnaire.country = "no_response";
		} else {
			response.questionnaire.country = $rootScope.questionnaire.country;
		}
		
		if ($rootScope.questionnaire.education === null || $rootScope.questionnaire.education === undefined){
			response.questionnaire.education = "no_response";
		} else {
			response.questionnaire.education = $rootScope.questionnaire.education;
		}
		
		if ($rootScope.questionnaire.occupation === null || $rootScope.questionnaire.occupation === undefined){
			response.questionnaire.occupation = "no_response";
		} else {
			response.questionnaire.occupation = $rootScope.questionnaire.occupation;
		}
		
		if ($rootScope.questionnaire.heard_sr === null || $rootScope.questionnaire.heard_sr === undefined){
			response.questionnaire.heard_sr = "no_response";
		} else {
			response.questionnaire.heard_sr = $rootScope.questionnaire.heard_sr;
		}
		
		if ($rootScope.questionnaire.read_sr === null || $rootScope.questionnaire.read_sr === undefined){
			response.questionnaire.read_sr = "no_response";
		} else {
			response.questionnaire.read_sr = $rootScope.questionnaire.read_sr;
		}
		
		if ($rootScope.questionnaire.author_sr === null || $rootScope.questionnaire.author_sr === undefined){
			response.questionnaire.author_sr = "no_response";
		} else {
			response.questionnaire.author_sr = $rootScope.questionnaire.author_sr;
		}
		
		if ($rootScope.questionnaire.heard_rr === null || $rootScope.questionnaire.heard_rr === undefined){
			response.questionnaire.heard_rr = "no_response";
		} else {
			response.questionnaire.heard_rr = $rootScope.questionnaire.heard_rr;
		}
		
		if ($rootScope.questionnaire.comments === null || $rootScope.questionnaire.comments === undefined){
			response.questionnaire.comments = "no_response";
		} else {
			response.questionnaire.comments = $rootScope.questionnaire.comments;
		}
		
		if ($rootScope.questionnaire.email === null || $rootScope.questionnaire.email === undefined){
			response.questionnaire.email = "no_response";
		} else {
			response.questionnaire.email = $rootScope.questionnaire.email;
		}
		
		rootRef.push(response, function (error) {
            if (error) {
               send();
			   return;
            } else {
                $state.go('step7');
            }
        });
		
		function parseExplanations(arrayorig) {
			var arraydest = [];
			
			for(var i = 0; i < arrayorig.length; i++) {
				arraydest.push(arrayorig[i].id);
			}
			
			return arraydest;
		}
	}
	
});

app.controller("step7Ctrl", function($scope, $rootScope, $state) {
	
});
