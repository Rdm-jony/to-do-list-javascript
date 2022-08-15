document.getElementById("add-btn").addEventListener("click", function () {
    const target = document.getElementById("main");
    const inputText = document.getElementById("input-text");
    if (inputText.value == "") {
        return alert("plz type something!");
    }
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.position = "relative";
    li.style.backgroundColor = "#E9DCD2";
    li.style.textAlign = "center";
    li.style.padding = "5px 0";
    li.style.border = "1px solid white";
    li.style.fontFamily = "arial";
    li.innerHTML = inputText.value;
    inputText.value = "";

    const i = document.createElement("i");
    i.style.position = "absolute";
    i.style.top = "28%";
    i.style.right = "4%";
    i.classList.add("fa-solid", "fa-xmark");
    i.style.fontSize = "10px";
    i.style.display = "inline-block";
    i.classList.add("icon-btn");
    li.appendChild(i);
    target.appendChild(li);

    const icons = document.getElementsByClassName("icon-btn");
    for (let icon of icons) {
        icon.addEventListener("click", function (event) {
            event.target.parentNode.remove();
        })
    }

})

