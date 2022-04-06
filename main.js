//ADD 1 story to DOM
//STEP 1 - ID body and crete elements to house info
const story = document.querySelector('#stories');
// console.log(story)
let parent = document.createElement('div');
parent.className = 'parent';
parent.innerHTML = `
<a href="">Test Story</a>
`
let child = document.createElement('div');
child.className = 'child'
child.innerHTML = `
<p>23</p>points by <a href="">John Doe</a>
`
parent.appendChild(child);
story.appendChild(parent);

//STEP 2 - ADD content for sample display
let title = document.querySelector('.parent a')
let score = document.querySelector('.child p')
let writer = document.querySelector('.child a')
fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        title.textContent= data.title
        title.href = data.url
        score.textContent = data.score
        writer.textContent = data.by
    })
