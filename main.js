//ADD 1 story to DOM
//STEP 1 - ID body and crete elements to house info
let story = document.querySelector('#stories');

//STEP 2 - ADD content for sample display
const topStories = ()=> {
fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(res => res.json())
    .then(data => {
        //select top 100
        let arr = data.slice(0,99)   
        // console.log(arr)
        for(let i = 0 ; i < arr.length ; i++) {
            let storyNum = arr[i] //grab each story and get the top 100
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyNum}.json?print=pretty`)
            .then(res => res.json())
            .then(info => {
                // console.log(info)
                //get user profile on the top 100
                let parent = document.createElement('li');
                    parent.className = "list-group-item list-group-item-success d-flex justify-content-between align-items-start";
                    parent.innerHTML = `
                    <div class="ms-2 me-auto">
                        <a href="${info.url}" class="link-dark">${info.title}</a>
                        <div class="fw-bold"> 
                            ${info.score} points by <a href="" class="link-secondary">${info.by}</a>
                            <a href=""#collapseExample"" class="link-dark" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseWidthExample">${info.descendants} comments</a>
                        </div>
                    </div>
                    `
                story.appendChild(parent)
    
                //get access to all comments
                let listComments = info.kids
                // for(let l = 0 ; l < listComments.length ; l++) {
                //     // console.log(listComments[l])

                //     fetch(`https://hacker-news.firebaseio.com/v0/item/${listComments[l]}.json?print=pretty`)
                //     .then(response => response.json())
                //     .then(information => {
                //     // console.log(information)
                //     let child = document.createElement('div');
                //     child.style = "max-height: 120px;"
                //     child.innerHTML = `
                //     <div class="" id="collapseExample">
                //         <div class="card card-body" style="width: 300px"> 
                //             ${information.text}
                //         </div>
                //     </div>
                //     `
                //     parent.appendChild(child)
                    
                //     })
                // }
                
                
            })
        }
         
    })

}
//load this page to start
topStories()     


const newsStories = () => {
fetch("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
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
                        <a href="${info.kids}" class="link-dark">${info.descendants} comments</a>
                    </div>
                </div>
                `
                story.appendChild(parent)

            })
        }
         
    })
}
// newsStories()

const askStories = () => {
fetch("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
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
                        <a href="${info.kids}" class="link-dark">${info.descendants} comments</a>
                    </div>
                </div>
                `
                story.appendChild(parent)

            })
        }
         
    })
}
// askStories()

//load the corresponding page for the button that is clicked
const toggleTabs = () => {
let main = document.querySelector('#option1');
let ask = document.querySelector('#option2');
let newStr = document.querySelector('#option3');


main.addEventListener('click', () => {
    // console.log(main.checked)
    if(main.checked) {
    //delete current children and replace with new content
    story.replaceChildren();
    return topStories();
}
})

ask.addEventListener('click', () => {
    if(ask.checked) {
    story.replaceChildren();
    return askStories();
}
})
newStr.addEventListener('click', () => {
    if(newStr.checked) {
    story.replaceChildren();
    return newsStories();
}
})
}
toggleTabs()

 