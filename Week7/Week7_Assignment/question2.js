/*
<article class="card">
			<h3>Question 1 of 8</h3>
			<hr>
			<p>What tag should I use if I want to add an external javascript file</p>
			<ol type="A">
				<li><label><input type="radio" name="option">script</label></li>
				<li><label><input type="radio" name="option">javascript</label></li>
				<li><label><input type="radio" name="option">include</label></li>
				<li><label><input type="radio" name="option">style</li>
			</ol>
			
		</article>

*/


const questionStatus = document.querySelector("#currentQuestionHeader");

let currentQuestion = 1;
let totalQuestions = activeQuestions.length;
questionStatus.innerHTML = `Question ${currentQuestion} of ${totalQuestions}`;

let currentQuestionData =  activeQuestions[currentQuestion-1] 

const questionItem = document.createElement("div");
questionStatus.appendChild(questionItem);

//create question
const questionsContent = document.querySelector("#questionText");
const par = document.createTextNode(currentQuestionData.question);
questionsContent.appendChild(par);

for(let choice in currentQuestionData.response){

	//create list element
	const listContent = document.querySelector("#listItems");
	const options = document.createElement("li");
	listContent.appendChild(options);

	//create label
	const label = document.createElement("label");
	options.appendChild(label);
	const radioBox = document.createElement("input");
	radioBox.setAttribute("type", "radio");
	radioBox.setAttribute("name", "option");
	label.appendChild(radioBox);
	const questionOptions = document.createTextNode(currentQuestionData.response[choice]);
	label.appendChild(questionOptions);

}

//create dots

const progressStatus = document.querySelector("#progressDots");

for(let circle in activeQuestions){
	const dots = document.createElement("div");
	dots.className = "correct";
	progressStatus.appendChild(dots);
}















