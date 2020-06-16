const Qdiv=document.querySelector(".q p");
const Option1=document.getElementById('choice1');
const Option2=document.getElementById('choice2');
const Option3=document.getElementById('choice3');
const Option4=document.getElementById('choice4');
const submit=document.getElementById('submit');
const score_div=document.querySelector('.score p');
const container=document.querySelector('.container');
const quiz_div=document.querySelector('.quiz');
const quiz_h2=document.querySelector('.quiz h2');
const question_div=document.querySelector('.question');
const option_div=document.querySelector('.options');
const button__div=document.querySelector('.button_div');
const footer_div=document.querySelector('.footer');


var score=0;
const MyQuestions=[
	
	{
		'question':'Who invented javascript?',

		'answers':

		{ 
			'a':'Abhishek Mishra',
			'b':'Brendan Eich',
			'c':'Sharad Raj',
			'd':'Donald Trump'
		},

		'CorrectAnswer':'Brendan Eich'
	},

	{

		'question':'Html Stands for ?',
		'answers':
		{ 
			'a':'Hyper test markup language',
			'b':'Hyper text markus languagee',
			'c':'Hyper text markup language',
			'd':'None of the above'
		},

		'CorrectAnswer':'Hyper text markup language'

	},

	
	 {
	    'question': "Which tool can you use to ensure code quality?",
	    'answers': 
		    {
		      'a': 'Angular',
		      'b': 'jQuery',
		      'c': 'RequireJS',
		      'd': 'ESLint'
		    },

	    'CorrectAnswer': 'ESLint'
  }

  	 

]
	
//=============================================================================================
	var j=0;
	
	function unCheckAll(){

		for(var i=1; i<=4;i++){
			  document.getElementById('o'+i+'').checked = false;

		}
	}	
 var n=1;
const start =()=>{
	
	
	quiz_h2.innerHTML="Question "+n+"";
	Qdiv.innerHTML=MyQuestions[j]['question'];
	Option1.innerHTML=MyQuestions[j]['answers']['a'];
	Option2.innerHTML=MyQuestions[j]['answers']['b'];
	Option3.innerHTML=MyQuestions[j]['answers']['c'];
	Option4.innerHTML=MyQuestions[j]['answers']['d'];
	 n++;

	
}

//=======================================================================================
var Selected_Value;
var Checked_Option;
const check =()=>{

 Checked_Option=document.getElementsByName('choice');
	for(var i=0; i<Checked_Option.length; i++)
		
		{
			if(Checked_Option[i].checked)
			{


			var selector='label[for=' + Checked_Option[i].id +']';
			var label=document.querySelector(selector);
			 Selected_Value=label.innerHTML;
			// console.log(Selected_Value);
			

			}
		}
			
			if(Selected_Value==null)
			{
					alert("please select any option");

			}
			else{

				checkAnswer();

				Selected_Value=null;
			}

		
}
	
//==================================================================================
	 
 const checkAnswer=()=>{
 	
 	//if question is correct

 	if(Selected_Value===MyQuestions[j]['CorrectAnswer'])
 	{

 		console.log(Selected_Value);
 		
 			
 				console.log(++score);
 			if((MyQuestions.length)-1==j)
 			{

 					question_div.classList.add('hide');
 				option_div.classList.add('hide');
 				button__div.classList.add('hide');

 					quiz_h2.style.paddingTop="60px";
 					quiz_h2.innerHTML="Result:";
 			score_div.innerText="You scored "+score +" out of "+MyQuestions.length+".";

 		
 			}
 			else
 			{
				j++;
 				console.log("hello");
 				unCheckAll();
 				start();

 			}

 	}
 	//if question is wrong
 	else
 	{
			if((MyQuestions.length)-1==j)
 			{

 					question_div.classList.add('hide');
 				option_div.classList.add('hide');
 				button__div.classList.add('hide');

 					quiz_h2.style.paddingTop="60px";
 					quiz_h2.innerHTML="Result:";
 				score_div.innerText="You scored "+score +" out of "+MyQuestions.length+".";


 			}
 			else{
 			j++;
 			unCheckAll();
 			start();
 			}	

 	}


 }
//==============================================================================
 	quiz_div.classList.add('hide');
 	footer_div.classList.add('hide');
 			

//creating a div for button
 	let button_div=document.createElement('div');
 	button_div.setAttribute('class','b_div');
 	container.appendChild(button_div);

//creating button
 let StartScreen=document.createElement('input');
 StartScreen.setAttribute('class','Start_Screen');
 StartScreen.setAttribute('id','hide_button');
 StartScreen.setAttribute('type','submit');
 StartScreen.setAttribute('value','Click here to start');
  button_div.appendChild(StartScreen);

	unCheckAll();

  StartScreen.addEventListener('click',function()
  {

  	console.log(MyQuestions.length);

	button_div.classList.add('hide');
	container.classList.remove('b_div');
	quiz_div.classList.remove('hide');
	footer_div.classList.remove('hide');
  	start();

	submit.addEventListener('click',check);
}
);



















