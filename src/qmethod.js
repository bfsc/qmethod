var shuffleArray = function (array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

var nId = function(id) {
	return id < 0 ? '_'+Math.abs(id) : ''+id;
}

function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

//Warning for future maintainers: for some reason, the column was growing bigger
//than value set here, so (rows-1)+3 basically works around this issue
 // 32 is the height of the cell
var workAroundpx = function(rows){
	return (rows*32) - rows+2;
}
var generateMyTd = function(id, rows, colour) {
	var toptd = document.createElement('td');
	// toptd attr	
	var toptdstyle = document.createAttribute('style');
	toptdstyle.value = "vertical-align:top";
	toptd.setAttributeNode(toptdstyle);

	var topdiv = document.createElement('div');
	// topdiv attr	
	var topdivStyle = document.createAttribute('style');
	topdivStyle.value = "width:150px;padding-right:10px;";
	topdiv.setAttributeNode(topdivStyle);

	var paneldiv = document.createElement('div');
	// paneldiv attr	
	var paneldivClass = document.createAttribute('class');
	paneldivClass.value = "panel panel-info";
	paneldiv.setAttributeNode(paneldivClass);

	var panelheadingdiv = document.createElement('div'); 
	// panelheadingdiv attr	
	var panelheadingdivclass = document.createAttribute('class');
	panelheadingdivclass.value = "panel-heading";
	panelheadingdiv.setAttributeNode(panelheadingdivclass);
	panelheadingdiv.setAttribute("style",
	"background-image:\
	 linear-gradient(to bottom,"+colour+" 0,"+colour+" 100%)!important;"); //border-color

	var paneltitleh3 = document.createElement('h3');
	// paneltitleh3 attr	
	var paneltitleh3class = document.createAttribute('class');
	paneltitleh3class.value	= "panel-title";
	var paneltitleAlign = document.createAttribute('align');
	paneltitleAlign.value = "center";
	var paneltitleTextNode = document.createTextNode(id);
	paneltitleh3.setAttributeNode(paneltitleh3class);
	paneltitleh3.setAttributeNode(paneltitleAlign);
	paneltitleh3.appendChild(paneltitleTextNode);

	var innerul = document.createElement('ul');
	// innerul attr	
	var innerulDndListAttr = document.createAttribute('dnd-list');
	innerulDndListAttr.value = "ratings.rating" + nId(id);
	var innerulDndDropAttr = document.createAttribute('dnd-drop');
	innerulDndDropAttr.value = "dropCallback(index, item, external, type)";
	var innerulDndDisableIfAttr = document.createAttribute('dnd-disable-if');
	innerulDndDisableIfAttr.value = "ratings.rating"+nId(id)+".length >=" + rows;
	var innerulStyleAttr = document.createAttribute('style');
	innerulStyleAttr.value = "height: " + workAroundpx(rows) + 'px';
	innerul.setAttributeNode(innerulDndListAttr);
	innerul.setAttributeNode(innerulDndDropAttr);
	innerul.setAttributeNode(innerulDndDisableIfAttr);
	innerul.setAttributeNode(innerulStyleAttr);

	var tooltipdiv = document.createElement('div');
	// tooltipdiv attr	
	var tooltipdivTooltipsTemplateAttr =
	 document.createAttribute('tooltip-template');
	tooltipdivTooltipsTemplateAttr.value = 
	   "<div class='ttiptext'>{{statement.statement}}</div>";
	var tooltipdivTooltipSideAttr =
	 document.createAttribute('tooltip-side');
	tooltipdivTooltipSideAttr.value = "right";
	var tooltipdivTooltipSizeAttr = 
	 document.createAttribute('tooltip-size');
	tooltipdivTooltipSizeAttr.value = "large";
	var tooltipdivNgRepeat =
	 document.createAttribute('ng-repeat');
	tooltipdivNgRepeat.value 
	 = "statement in "+"ratings.rating"+nId(id);
	tooltipdiv.setAttribute("tooltips",'');
	tooltipdiv.setAttributeNode(tooltipdivTooltipsTemplateAttr);
	tooltipdiv.setAttributeNode(tooltipdivTooltipSideAttr);
	tooltipdiv.setAttributeNode(tooltipdivTooltipSizeAttr);
	tooltipdiv.setAttributeNode(tooltipdivNgRepeat);

	var innerli = document.createElement('li');
	// innerli attr	
	//innerli attributes
	var innerliDndDraggableAttr = document.createAttribute
		('dnd-draggable');
	innerliDndDraggableAttr.value = "statement";
	var innerliDndMovedAttr = document.createAttribute
		('dnd-moved');
	innerliDndMovedAttr.value = "ratings.rating"+nId(id)+
		".splice($index,1)";
	var innerliDndEfctAlwdAttr = document.createAttribute
	('dnd-effect-allowed');
	innerliDndEfctAlwdAttr.value = "move";
	var innerliNgStyle = document.createAttribute
	('ng-style');
	innerliNgStyle.value = "getStyle(statement)";
	var innerliTextNode = document.createTextNode
		("{{ statement.statement|truncate:10 }}");
	innerli.setAttributeNode(innerliDndDraggableAttr);
	innerli.setAttributeNode(innerliDndMovedAttr);
	innerli.setAttributeNode(innerliDndEfctAlwdAttr);
	innerli.setAttributeNode(innerliNgStyle);
	innerli.appendChild(innerliTextNode);

	var placeholderli = document.createElement('li');
	// placeholderli attr	
	var placeholderliClass = document.createAttribute("class");
	placeholderliClass.value="dndPlaceholder";
	var placeholderliStyle = document.createAttribute("style");
	placeholderliStyle.value="display: none;";
	placeholderli.setAttributeNode(placeholderliClass);
	placeholderli.setAttributeNode(placeholderliStyle);
	

	tooltipdiv.appendChild(innerli);
	innerul.appendChild(tooltipdiv);
	innerul.appendChild(placeholderli);
	panelheadingdiv.appendChild(paneltitleh3);
	paneldiv.appendChild(panelheadingdiv);
	paneldiv.appendChild(innerul);
	topdiv.appendChild(paneldiv);
	toptd.appendChild(topdiv);
	return toptd;
}

var app = angular.module('qmethod', ['formly','formlyBootstrap','ui.router', 'dndLists', 'igTruncate', '720kb.tooltips']);

// ========== CONFIG
app.config(function ($stateProvider, $locationProvider) {

	$locationProvider.hashPrefix('');

	$stateProvider.state({
		name: 'step1',
		url: '/step1',
		templateUrl: 'templates/step1.html',
		controller: 'step1Ctrl',
		
	});

	$stateProvider.state({
		name: 'step2',
		url: '/step2',
		templateUrl: 'templates/step2.html',
		controller: 'step2Ctrl'
	});

	$stateProvider.state({
		name: 'step3',
		url: '/step3',
		templateUrl: 'templates/step3.html',
		controller: 'step3Ctrl',
		resolve: {
			'promisedata': ['$http', function($http){
				return $http.get('settings/statements.xml');
			}]
		}
	});

	$stateProvider.state({
		name: 'step4',
		url: '/step4',
		templateUrl: 'templates/step4.html',
		controller: 'step4Ctrl',
		resolve: {
			'promisedata': ['$http', function($http){
				return $http.get('settings/map.xml');
			}]
		}
	});

	$stateProvider.state({
		name: 'step5',
		url: '/step5',
		templateUrl: 'templates/step5.html',
		controller: 'step5Ctrl'
	});

	$stateProvider.state({
		name: 'step6',
		url: '/step6',
		templateUrl: 'templates/step6.html',
		controller: 'step6Ctrl'
	});

	$stateProvider.state({
		name: 'step7',
		url: '/step7',
		templateUrl: 'templates/step7.html',
		controller: 'step7Ctrl'
	});
});

  var config = {
    apiKey: "AIzaSyCZKrox4RKsS9jnpxYXoVj982UdQ-4VUHk",
    authDomain: "qmethod-16120.firebaseapp.com",
    databaseURL: "https://qmethod-16120.firebaseio.com",
    projectId: "qmethod-16120",
    storageBucket: "qmethod-16120.appspot.com",
    messagingSenderId: "50670126791"
  };
//   firebase.initializeApp(config);
//   var rootRef = firebase.database().ref();

  
// ========== CONTROLLERS
app.controller("appCtrl", function ($scope, $rootScope, $state) {
	$state.go('step1');
});

app.controller("step1Ctrl", function ($scope, $rootScope, $state) {
	$scope.next = function () {
		$state.go('step2');
	}
});

app.controller("step2Ctrl", function ($scope, $rootScope, $state) {
	$scope.next = function () {
		$state.go('step3');
	}

	$scope.back = function () {
		$state.go('step1');
	}
});

app.controller("step3Ctrl",['promisedata','$scope', '$rootScope', '$state', function (promisedata, $scope, $rootScope, $state) {

	statements = [];
	if (typeof $rootScope.statements == "undefined") {
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(promisedata.data,"application/xml");
		xmlDocStatementNodes = xmlDoc.getElementsByTagName("statement");
		for (i=0; i < xmlDocStatementNodes.length; i++) {
			el = xmlDocStatementNodes[i];
			el_id = el.getAttribute('id');
			el_value = el.childNodes[0].nodeValue;
			statements.push({id: el_id, statement: el_value});
		}
		//Pick how many statements we have so we can use it for checks
		$rootScope.numberOfStatements = 
			JSON.parse(JSON.stringify(statements.length));
		shuffleArray(statements);
		$rootScope.statements = JSON.parse(JSON.stringify(statements));
	}

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

	$('#helpModal').modal(show = true);

	/*Checks if $rootScope is already defined (the user had made his classifications)*/
	if (typeof $rootScope.classifications == "undefined") {
		if (typeof $rootScope.classifications_step3 != "undefined") {
		}
		$rootScope.classifications = $scope.classifications;
	} else {
		$scope.classifications = $rootScope.classifications;
	}

	$scope.hasNoCategory = function (statement) {
		return statement.category != "undefined";
	}


	$scope.done = function () {
		return $rootScope.statements.length == 0;
	};

	$scope.next = function () {
		$rootScope.classifications_step3 = JSON.parse(JSON.stringify($rootScope.classifications));
		$state.go('step4');
	}

	$scope.back = function () {
		$state.go('step2');
	}
	
		/*Auxiliary function to help skip to step4 */
	$scope.help = function () {
		for (var i = 0; i < 50 && ($rootScope.classifications.length != 0); ++i) {
			var ii = i % 3;
			var s = $rootScope.statements.shift();
			if (ii == 0) {
				s.category = "agree";
				$scope.classifications.AGREE.push(s);
			} else if (ii == 1) {
				s.category = "neutral";
				$scope.classifications.NEUTRAL.push(s);
			} else if (ii == 2) {
				s.category = "disagree";
				$scope.classifications.DISAGREE.push(s);
			}
		}
		//$state.go('step4');
	}

	$scope.dropAgreeCallback = function (index, item, external, type) {

		if ($scope.cards.first == item.id) {
			$scope.cards.first = $scope.cards.first + 1;
		}
		item.category = "agree";
		$scope.classifications.AGREE.push(item);

		return true;
	};

	$scope.dropNeutralCallback = function (index, item, external, type) {
		if ($scope.cards.first == item.id) {
			$scope.cards.first = $scope.cards.first + 1;
		}

		item.category = "neutral";
		$scope.classifications.NEUTRAL.push(item);

		return true;
	};

	$scope.dropDisagreeCallback = function (index, item, external, type) {
		if ($scope.cards.first == item.id) {
			$scope.cards.first = $scope.cards.first + 1;
		}

		item.category = "disagree";
		$scope.classifications.DISAGREE.push(item);

		return true;
	};
}]);

app.controller("step4Ctrl",['promisedata','$scope', '$rootScope', '$state','$compile', function (promisedata, $scope, $rootScope, $state, $compile) {

	// //If user has distributed over normal distribution re-use it
	$scope.ratings = [];
	$scope.classifications = JSON.parse(JSON.stringify($rootScope.classifications));

	if (typeof $rootScope.ratings != "undefined"){
		$scope.ratings = JSON.parse(JSON.stringify($rootScope.ratings));
		$scope.classifications.AGREE = [];
		$scope.classifications.NEUTRAL = [];
		$scope.classifications.DISAGREE = [];
	}
	var smallerLabel = {};
		 smallerLabel.value = 0;
		smallerLabel.rating_id = '';

	var biggerLabel = {};
		biggerLabel.value = 0;
		biggerLabel.rating_id = '';

	if (typeof $rootScope.table == "undefined") {
		console.log("table is undefined. defining...");
		var tr_el = document.createElement('tr');

		parser = new DOMParser();
		xmlDoc = parser.parseFromString(promisedata.data, "application/xml");
		xmlDocStatementNodes = xmlDoc.getElementsByTagName("column");
		for (i = 0; i < xmlDocStatementNodes.length; i++) {
			var el = xmlDocStatementNodes[i];
			var el_id = parseInt(el.getAttribute('id'), 10);
			var el_rating_id =  "rating"+ (el_id < 0 ? ('_'+Math.abs(el_id)) : el_id );
			var el_colour = String(el.getAttribute('colour'));
			var el_rows = parseInt(el.childNodes[0].nodeValue, 10);
			if (el_colour != "null" && el_id != "NaN" && el_rows != "NaN") {
				if (el_id < smallerLabel.value){
					smallerLabel.value = el_id;
					smallerLabel.rating_id = el_rating_id;
				}
				if (el_id > biggerLabel.value){
					biggerLabel.value = el_id;
					biggerLabel.rating_id = el_rating_id;
				}
				tr_el.appendChild(generateMyTd(el_id,el_rows,el_colour));
				$scope.ratings[el_rating_id] = [];
			}	
		}

		$rootScope.table = tr_el;
		$rootScope.ratingsNegExt = smallerLabel.rating_id;
		$rootScope.ratingsPosExt = biggerLabel.rating_id;
		$rootScope.ratingsPosExtId = biggerLabel.value;
		$rootScope.ratingsNegExtId = smallerLabel.value;
	}
	if ((typeof $rootScope.tablecompiled == "undefined") &&
	 typeof $rootScope.table != "undefined") {
		//HIC SUNT DRACONES
		//Compile table
		var cpy = $rootScope.table.cloneNode(true);
		var linkFn = $compile(cpy);
		//Link table
		var content = linkFn($scope);
		//Store table into rootscope
		$rootScope.tablecompiled = content[0];
	}

	console.log(JSON.stringify($scope.ratings));
	if ($rootScope.table != "undefined"){
		var table = document.getElementsByTagName('table')[0];

		while (table.firstChild) {
			table.removeChild(table.firstChild);
		}

		table.append($rootScope.tablecompiled);
	}

	$scope.dropAgreeCallback = function (index, item, external, type) {
		var ret = item.category == "agree";
		if (ret) {
			$scope.classifications.AGREE.push(item);
		} else {
			console.log("refused drop. expeted agree, got: "+item.category);
		}
		return ret;
	};

	$scope.dropNeutralCallback = function (index, item, external, type) {
		var ret = item.category == "neutral";
		if (ret) {
			$scope.classifications.NEUTRAL.push(item);
		}
		return ret;
	};

	$scope.dropDisagreeCallback = function (index, item, external, type) {
		var ret = item.category == "disagree";
		if (ret) {
			$scope.classifications.DISAGREE.push(item);
		}
		return ret;
	};

	$scope.done = function () {
		var numberOfStatements = 0;
		for (var key in $scope.ratings) {
			if ($scope.ratings.hasOwnProperty(key)) {
				numberOfStatements += $scope.ratings[key].length;
			}
		}
		return numberOfStatements == $rootScope.numberOfStatements;
	};

	$('#helpModal').modal(show = true);

	$scope.getStyle = function(statement) {
		if(statement.category == "agree") {
			return {"background-color":"#00A848"};
		} else if (statement.category == "neutral") {
			return {"background-color":"#BAB9B9"};
		} else {
			return {"background-color":"#FF6666"};
		}
	}

	$scope.help = function() {
		var concatlists = [];
		concatlists = concatlists.concat($scope.classifications.AGREE,
			$scope.classifications.NEUTRAL ,
			$scope.classifications.DISAGREE);
		$scope.classifications.AGREE = [];
		$scope.classifications.NEUTRAL = [];
		$scope.classifications.DISAGREE = [];
		for(var i = 0; i < 2; ++i){
			$scope.ratings.rating3.push(concatlists.shift());
			$scope.ratings.rating_3.push(concatlists.shift());
		}
		for(var i = 0; i < 6; ++i){
			$scope.ratings.rating2.push(concatlists.shift());
			$scope.ratings.rating_2.push(concatlists.shift());
		}
		for(var i = 0; i < 10; ++i){
			$scope.ratings.rating1.push(concatlists.shift());
			$scope.ratings.rating_1.push(concatlists.shift());
		}
		for(var i = 0; i < 14; ++i){
			$scope.ratings.rating0.push(concatlists.shift());
		}
	}

	$scope.next = function () {
		//Copy ratings defined on this step to rootScope so we can send later
		$rootScope.ratings = Object.assign({}, $scope.ratings);
		delete $rootScope.tablecompiled;
		$state.go('step5');
	}

	$scope.back = function () {
		delete $rootScope.tablecompiled;
		delete $rootScope.ratings;
		$state.go('step3');
	}

	$scope.dropCallback = function (index, item, external, type) {
		return item;
	}
}]);

app.controller("step5Ctrl", function ($scope, $rootScope, $state) {

//		$rootScope.ratingsNegExt = smallerLabel.rating_id;
//		$rootScope.ratingsPosExt = biggerLabel.rating_id;
	$scope.positiveExtreme = $rootScope.ratingsPosExtId; 
	$scope.negativeExtreme = $rootScope.ratingsNegExtId; 
	var negativeExtremesArr = $rootScope.ratings[$rootScope.ratingsNegExt]; 
	var positiveExtremesArr = $rootScope.ratings[$rootScope.ratingsPosExt]; 
	if (typeof $rootScope.explanations == "undefined") {
		var posextremeExplanations = [];
		var negextremeExplanations = [];
		for (var key in negativeExtremesArr) {
			console.log(negativeExtremesArr[key].statement)
			negextremeExplanations.push({statement:negativeExtremesArr[key].statement,explanation:""});
		}
		for (var key in positiveExtremesArr) {
			posextremeExplanations.push({statement:positiveExtremesArr[key].statement,explanation:""});
		}
		$rootScope.explanations = {
			agree: posextremeExplanations,
			disagree: negextremeExplanations
		};
	}

	$('#helpModal').modal(show = true);

	$scope.done = function () {
		var explanationsDone = 1;
		for (var key in $rootScope.explanations.agree){
			//prevent overflow
			explanationsDone = explanationsDone *
			($rootScope.explanations.agree[key].explanation.length > 0  ? 1 : 0);
		}
		for (var key in $rootScope.explanations.disagree){
			console.log('key '+key);
			console.log('obj '+JSON.stringify($rootScope.explanations.agree[key]));
			explanationsDone = explanationsDone*
			($rootScope.explanations.disagree[key].explanation.length > 0 ? 1 : 0);
		}
		return explanationsDone > 0;
	}

	$scope.next = function () {
		$state.go('step6');
	}

	$scope.back = function () {
		$state.go('step4');
	}

	String.prototype.isEmpty = function () {
		return (this.length === 0 || !this.trim());
	};
});

app.controller("step6Ctrl", function ($scope, $rootScope, $state) {
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
	var vm = this;
	vm.user = {};
	vm.userFields = [
	{
		key: 'email',
		type: 'input',
		templateOptions: {
			type: 'email',
			label: 'Email address',
			placeholder: 'Enter email'
		}
	},
	{
		key: 'password',
		type: 'input',
		templateOptions: {
			type: 'password',
			label: 'Password',
			placeholder: 'Password'
		}
	},
	{
		key: 'file',
		type: 'file',
		templateOptions: {
			label: 'File input',
			description: 'Example block-level help text here',
			url: 'https://example.com/upload'
		}
	},
	{
		key: 'checked',
		type: 'checkbox',
		templateOptions: {
			label: 'Check me out'
		}
	}
	];

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

	String.prototype.isEmpty = function () {
		return (this.length === 0 || !this.trim());
	};

	$scope.send = function () {
		$rootScope.questionnaire = $scope.questionnaire;

		var response = {
			classifications: {},
			ratings: {},
			explanations: {},
			questionnaire: {},
		}

		if (response.classifications === null || response.classifications === undefined){
			response.classifications = "no_response";
		} else {
			 response.classifications = parseClassifications($rootScope.classifications_step3);
		}

		if ($rootScope.ratings === null || $rootScope.ratings === undefined) {
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

		if ($rootScope.explanations === null || $rootScope.explanations === undefined) {
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

		if ($rootScope.questionnaire.age === null || $rootScope.questionnaire.age === undefined) {
			response.questionnaire.age = "no_response";
		} else {
			response.questionnaire.age = $rootScope.questionnaire.age;
		}

		if ($rootScope.questionnaire.gender === null || $rootScope.questionnaire.gender === undefined) {
			response.questionnaire.gender = "no_response";
		} else {
			response.questionnaire.gender = $rootScope.questionnaire.gender;
		}

		if ($rootScope.questionnaire.country === null || $rootScope.questionnaire.country === undefined) {
			response.questionnaire.country = "no_response";
		} else {
			response.questionnaire.country = $rootScope.questionnaire.country;
		}

		if ($rootScope.questionnaire.education === null || $rootScope.questionnaire.education === undefined) {
			response.questionnaire.education = "no_response";
		} else {
			response.questionnaire.education = $rootScope.questionnaire.education;
		}

		if ($rootScope.questionnaire.occupation === null || $rootScope.questionnaire.occupation === undefined) {
			response.questionnaire.occupation = "no_response";
		} else {
			response.questionnaire.occupation = $rootScope.questionnaire.occupation;
		}

		if ($rootScope.questionnaire.heard_sr === null || $rootScope.questionnaire.heard_sr === undefined) {
			response.questionnaire.heard_sr = "no_response";
		} else {
			response.questionnaire.heard_sr = $rootScope.questionnaire.heard_sr;
		}

		if ($rootScope.questionnaire.read_sr === null || $rootScope.questionnaire.read_sr === undefined) {
			response.questionnaire.read_sr = "no_response";
		} else {
			response.questionnaire.read_sr = $rootScope.questionnaire.read_sr;
		}

		if ($rootScope.questionnaire.author_sr === null || $rootScope.questionnaire.author_sr === undefined) {
			response.questionnaire.author_sr = "no_response";
		} else {
			response.questionnaire.author_sr = $rootScope.questionnaire.author_sr;
		}

		if ($rootScope.questionnaire.heard_rr === null || $rootScope.questionnaire.heard_rr === undefined) {
			response.questionnaire.heard_rr = "no_response";
		} else {
			response.questionnaire.heard_rr = $rootScope.questionnaire.heard_rr;
		}

		if ($rootScope.questionnaire.comments === null || $rootScope.questionnaire.comments === undefined) {
			response.questionnaire.comments = "no_response";
		} else {
			response.questionnaire.comments = $rootScope.questionnaire.comments;
		}

		if ($rootScope.questionnaire.email === null || $rootScope.questionnaire.email === undefined) {
			response.questionnaire.email = "no_response";
		} else {
			response.questionnaire.email = $rootScope.questionnaire.email;
		}

		rootRef.push(response, function (error) {
			if (error) {
				$scope.send();
				return;
			} else {
				$state.go('step7');
			}
		});

		function parseExplanations(arrayorig) {
			var arraydest = [];

			for (var i = 0; i < arrayorig.length; i++) {
				arraydest.push(arrayorig[i].id);
			}

			return arraydest;
		}
		
		function parseClassifications(classificationsOrig) {
			var parsedClassifications = {'AGREE': [],'NEUTRAL': [],'DISAGREE': [],};
			
			for(var i = 0; i < classificationsOrig.AGREE.length; i++) {
				parsedClassifications.AGREE.push(classificationsOrig.AGREE[i].id);
			}
			
			for(var i = 0; i < classificationsOrig.NEUTRAL.length; i++) {
				parsedClassifications.NEUTRAL.push(classificationsOrig.NEUTRAL[i].id);
			}
			
			for(var i = 0; i < classificationsOrig.DISAGREE.length; i++) {
				parsedClassifications.DISAGREE.push(classificationsOrig.DISAGREE[i].id);
			}
			
			return parsedClassifications;
		}
	}

});

app.controller("step7Ctrl", function ($scope, $rootScope, $state) {

});
