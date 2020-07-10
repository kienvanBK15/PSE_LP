const API_URL = 'http://localhost:4000/posts';

listAllPosts();
editStatus();

function on() {
	document.getElementById('overlay').style.display = "flex";

	const form = document.querySelector('form');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const formData = new FormData(form);
		const title = formData.get('title');
		const content = formData.get('content');

		const post = {
			title,
			content
		};
		
		fetch(API_URL, {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'content-type': 'application/json'
			}
		}).then(response => response.json())
			.then(createdPost => {
				form.reset();
				listAllPosts();
			});
	});

	const modal = document.getElementById('overlay');
	const b1 = document.getElementById('submit-button');
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
		if (event.target == b1) {
			modal.style.display = "none";
		}
  }
  return true;
}

function listAllPosts() {
	const newsElement = document.querySelector('.user-status');
	newsElement.innerHTML = '';
    fetch(API_URL)
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
            posts.reverse();
            posts.forEach(post => {
                const div = document.createElement('div');

                const header = document.createElement('h3');
                header.textContent = post.title;

                const contents = document.createElement('p');
				contents.textContent= post.content;

                const date = document.createElement('small');
				date.textContent = new Date(post.created);
				
				const img = document.createElement("img");
				img.src = "pic/profile-pic.png";
				img.setAttribute("width", "50");
				img.setAttribute("height", "50");
				

				div.innerHTML = '<i class="fas fa-edit edit-icon" aria-hidden="true" onclick="editStatus()"></i>';
				div.appendChild(img);
				div.appendChild(header);
				div.appendChild(date);
                div.appendChild(contents);
				
                newsElement.appendChild(div);
            });
        })
}

function editStatus() {
	const modal = document.getElementById('overlay');
	const b1 = document.getElementById('submit-button');
	const edit = document.getElementsByClassName('edit-icon');

	window.onclick = function(event) {
		document.getElementById('overlay').style.display = "flex";

		const form = document.querySelector('form');
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			const formData = new FormData(form);
			const title = formData.get('title');
			const content = formData.get('content');
	
			const post = {
				title,
				content
			};
			
			fetch('http://localhost:4000/edit', {
				method: 'PUT',
				body: JSON.stringify(post),
				headers: {
					'content-type': 'application/json'
				}
			}).then(response => response.json())
				.then(updatedPost => {
					form.reset();
					// listAllPosts();
				});
		});

		if (event.target == modal) {
			modal.style.display = "none";
		}
		if (event.target == b1) {
			modal.style.display = "none";
		}
	}
}


// function off() {
// 	document.getElementById("overlay").style.display = "none";
// }

// function submitButtonClicked() {
// 	var tt = document.getElementById('sttt').value;
// 	var subject = document.getElementById('stsubject').value;
// 	document.getElementById('demo1').innerHTML = tt;
// 	document.getElementById('demo2').innerHTML = subject;
// 	if (tt != undefined || subject != undefined) {
// 		document.getElementById('user-status').style.display = "block";
// 	}
// }




