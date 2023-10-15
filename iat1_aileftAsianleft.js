define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var ai = API.shuffle([
            'Code', 'Robot', 'Algorithm', 'Program', 'ChatGPT', 'Automation']);
  var human = API.shuffle([
            'Consciousness', 'Mind', 'Free Will', 'Emotion', 'Intention', 'Morality']);
	return iatExtension({
		category1 : {
			name : 'Asian Americans', //Will appear in the data.
			title : {
				media : {word : 'Asian Americans'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		   {image:'Asian1.jpg'},
                {image: 'Asian2.jpg'},
                {image: 'Asian3.jpg'},
{image: 'Asian4.jpg'}, 
{image: 'Asian5.jpg'}, 
{image: 'Asian6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White Americans', //Will appear in the data.
			title : {
				media : {word : 'White Americans'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		     {image: 'White1.jpg'},
                {image: 'White2.jpg'},
                {image: 'White3.jpg'},
				{image: 'White4.jpg'}, 
                {image: 'White5.jpg'},
				{image: 'White6.jpg'}
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
				{word: human[0]},
				{word: human[1]},
				{word: human[2]},
				{word: human[3]},
				{word: human[4]},
				{word: human[5]}
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
				{word: ai[0]},
				{word: ai[1]},
				{word: ai[2]},
				{word: ai[3]},
				{word: ai[4]},
				{word: ai[5]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://github.com/nquan929/olingroupperception/tree/images'
		} 
	});
});
