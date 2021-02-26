//Version 2 - somehow version 1 never got uploaded to GH and then got deleted on my local??

let allNewsUL = document.getElementById("allNewsUL")

function nullCheck (label) {
    if (label == null) {
        return label = ""
    }
    else {
        return label
    }
}

function formatDateTime(datetime) {
    regex = /T.*$/
    return datetime.replace(regex, "")
}

for (let index = 0; index < news.articles.length; index++) {
    let story = news.articles[index]  
    let storyItem = `
                        <li>
                            <h3><b><a href = "${story.url}">${story.title}</a></b></h3>
                            <i>${nullCheck(story.author)}</i>
                            <p><img src="${story.urlToImage}" width="200px" height = "150px" /></p>
                            <i>${nullCheck(story.description)}</i>
                            <p>Published on: ${formatDateTime(story.publishedAt)}</p>
                        </li>
                        <br>
                        `
    allNewsUL.insertAdjacentHTML('beforeend', storyItem)
}