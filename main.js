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
                            <a href="" class="link-dark">${info.descendants} comments</a>
                        </div>
                    </div>
                    `
                story.appendChild(parent)
                //now missing user profile and comments page for story
                //get access to all child links
                // let storyAuthor = document.querySelectorAll('.link-secondary') 
                // console.log(storyAuthor)
                let userProfile = info.by
                fetch(`https://hacker-news.firebaseio.com/v0/user/${userProfile}.json?print=pretty`)
                    .then(response => response.json())
                    .then(information => {
                    // console.log(information)
                    
                    // console.log(profileData)
                    // for(var j = 0 ; j < information.submitted.length ; j++) {
                    //     let profileData = information.submitted[j]
                    //     console.log(information.submitted[j])
                    //     // fetch(`https://hacker-news.firebaseio.com/v0/data/${profileData}.json?print=pretty`)
                    //     //     .then(subList => subList.json())
                    //     //     .then(listInfo => {
                    //     //     // console.log(listInfo)
                        
                    //     //     })
                    // }
                    
                    })
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