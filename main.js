//ADD 1 story to DOM
//STEP 1 - ID body and crete elements to house info
let story = document.querySelector('#stories');
// console.log(story)



//STEP 2 - ADD content for sample display


//get arr of nums get 100 and transfer data over
//loop to 100(count)
    //if not at 100
        //create a story and add it


fetch("https://hacker-news.firebaseio.com/v0/updates.json?print=pretty")
    .then(res => res.json())
    .then(data => {
        // console.log(data)
    })

fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(res => res.json())
    .then(data => {
        //select top 100
        let arr = data.slice(0,99)   
        // console.log(arr)
        for(let i = 0 ; i < arr.length ; i++) {
            let storyNum = arr[i]
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyNum}.json?print=pretty`)
            .then(res => res.json())
            .then(info => {
                console.log(info)
                let parent = document.createElement('li');
                parent.className = "list-group-item list-group-item-success d-flex justify-content-between align-items-start";
                parent.innerHTML = `
                <div class="ms-2 me-auto">
                    <a href="${info.url}" class="link-dark">${info.title}</a>
                    <div class="fw-bold"> 
                        ${info.score} points by <a href="${info.by}" class="link-dark">${info.by}</a>
                    </div>
                </div>
                `
                // let child = document.createElement('div');
                // child.className = 'child'
                // child.innerHTML = `
                // ${info.score} points by <a href="" class="link-dark">${info.by}</a>
                // `
                // parent.appendChild(child);
                story.appendChild(parent)

            })
        }
         
    })

//