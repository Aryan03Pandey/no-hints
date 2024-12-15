function hideHints (){
    setTimeout(() => {
        const el = document.getElementsByClassName("mt-6 flex flex-col gap-3")
        
        el[0].style.display = "none";

    }, 1000)
}

hideHints();