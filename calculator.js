// SmartToolsHub Calculator Search

const searchInput = document.getElementById("searchInput");
const tools = document.querySelectorAll(".tool");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        tools.forEach(tool => {

            const title = tool.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                tool.style.display = "block";
            } else {
                tool.style.display = "none";
            }

        });

    });

}

// Smooth Card Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

tools.forEach(tool=>{

tool.style.opacity="0";
tool.style.transform="translateY(40px)";
tool.style.transition="0.6s ease";

observer.observe(tool);

});