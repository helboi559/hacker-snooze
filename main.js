//ADD 1 story to DOM
//STEP 1 - ID body and crete elements to house info
let story = document.querySelector('#stories');
// console.log(story)



//STEP 2 - ADD content for sample display

// fetch("https://hacker-news.firebaseio.com/v0/item/30944524.json?print=pretty")
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         title.textContent= data.title
//         title.href = data.url
//         score.textContent = data.score
//         writer.textContent = data.by
//     })

//get arr of nums get 100 and transfer data over
//loop to 100(count)
    //if not at 100
        //create a story and add it

// (async()=>{
//     let response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
//     let data = await response.json();
//     console.log(data)
// });
// let top100 = [];
// let storyCount = 0   
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
                // let top100 = []
                // top100.push(info)
                // // console.log(top100)
                // for(let j = 0 ; j < top100.length ; j++) {
                // // console.log(top100[j])
                    
                // }
                console.log(info)
                // let title = info.title
                let parent = document.createElement('div');
                parent.className = 'parent';
                parent.innerHTML = `
                <a href="${info.url}">${info.title}</a>
                `
                let child = document.createElement('div');
                child.className = 'child'
                child.innerHTML = `
                <p>${info.score}</p>points by <a href="">${info.by}</a>
                `
                parent.appendChild(child);
                story.appendChild(parent)

            })
        }
         
    })



// story.appendChild(parent);

// let title = document.querySelector('.parent a')
// let score = document.querySelector('.child p')
// let writer = document.querySelector('.child a')
// // console.log(title)
// title.textContent= info.title
// title.href = info.url
// score.textContent = info.score
// writer.textContent = info.by