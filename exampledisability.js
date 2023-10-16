define(['pipAPI', 'https://cdn.jsdelivr.net/gh/nquan929/olingroupperception@IAT/quiat1.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var posWords = API.shuffle([
            'Code', 'Robot', 'Algorithm', 'Program', 'ChatGPT', 'Automation']);
  var negWords = API.shuffle([
            'Consciousness', 'Mind', 'Free Will', 'Emotion', 'Intention', 'Morality']);
	return iatExtension({
		category1 : {
			name : 'Asian American', //Will appear in the data.
			title : {
				media : {word : 'Asian American'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		   {image: 'Asian1.jpg'},
                {image: 'Asian2.jpg'},
                {image: 'Asian3.jpg'},
				{image: 'Asian4.jpg'}  
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White American', //Will appear in the data.
			title : {
				media : {word : 'White American'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		     {image: 'White1.jpg'},
                {image: 'White2.jpg'},
                {image: 'White3.jpg'},
				{image: 'White4.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
	attribute1 :
		{
			name : 'Human',
			title : {
				media : {word : 'Human'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Artificial Intelligence',
			title : {
				media : {word : 'Artificial Intelligence'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://github.com/nquan929/olingroupperception/tree/images'
		} 
	});
});
