let articles=[
    {
        title:"My First Article",
        description:"Bacon ipsum dolor amet hamburger ham biltong, doner kevin ribeye corned beef. Pork loin buffalo ham jerky cupim shankle chicken salami sirloin spare ribs fatback pork chop capicola. Pig pork burgdoggen turkey jerky t-bone ribeye pastrami swine strip steak. Chicken pork belly sausage, shoulder swine burgdoggen ground round short ribs kielbasa short loin meatball chislic flank buffalo.",
        view:30
    },
    {
        title:"My seconde Article",
        description:"Bacon ipsum dolor amet hamburger ham biltong, doner kevin ribeye corned beef. Pork loin buffalo ham jerky cupim shankle chicken salami sirloin spare ribs fatback pork chop capicola. Pig pork burgdoggen turkey jerky t-bone ribeye pastrami swine strip steak. Chicken pork belly sausage, shoulder swine burgdoggen ground round short ribs kielbasa short loin meatball chislic flank buffalo.",
        view:30
    },
    {
        title:"My third Article",
        description:"Bacon ipsum dolor amet hamburger ham biltong, doner kevin ribeye corned beef. Pork loin buffalo ham jerky cupim shankle chicken salami sirloin spare ribs fatback pork chop capicola. Pig pork burgdoggen turkey jerky t-bone ribeye pastrami swine strip steak. Chicken pork belly sausage, shoulder swine burgdoggen ground round short ribs kielbasa short loin meatball chislic flank buffalo.",
        view:30
    },


]
articles.forEach(article =>{
    console.log(article.title)
    console.log(article.description)
    console.log("Views:",article.view)
    console.log("---------------------------------------------")
})