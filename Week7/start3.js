/*<div>
					<label ><input id="topic1" value="html" name="topics" type="checkbox" name="">
					HTML</label>
					<div class="metadata">Questions Mastered: 32/100</div> 
					<progress value="32" max="100">
				</div>
				<hr>
*/

	const topicList = document.querySelector("#topicList");

	for(let topicListItem in topics){
	console.log(topicListItem);
	console.log(topics[topicListItem]);

	//create item 
	const item = document.createElement("div");
	topicList.appendChild(item);

	//create rule
	const rule = document.createElement("hr");
	topicList.appendChild(rule);

	//create label
	const label = document.createElement("label");
	item.appendChild(label);

	//create label
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("name", "topics");
	label.appendChild(checkbox);

	//create label text
	const labelText = document.createTextNode(topicListItem);
	label.appendChild(labelText);


	// create metadata
	const metadata = document.createElement("div");
	metadata.innerHTML = `Questions Mastered: ${topics[topicListItem].totalMastered}/${topics[topicListItem].totalQuestions}`;
	metadata.classList.add("metadata");
	item.appendChild(metadata);

	//create progress bar

	const progress = document.createElement("progress");
	progress.setAttribute("value", topics[topicListItem].totalMastered);
	progress.setAttribute("max", topics[topicListItem].totalQuestions);
	item.appendChild(progress);

	}





