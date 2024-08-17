window.addEventListener("load", solve);

function solve() {

  let submit = document.getElementById("adopt-btn");

    submit.addEventListener('click', onAdd)
    function onAdd(e){
      e.preventDefault();

      let li = document.createElement("li");
      let animalType = document.getElementById('type');
      let animalAge = document.getElementById('age');
      let animalGender = document.getElementById('gender');  

      let ul = document.getElementById("adoption-info");
      
      let article = document.createElement("article");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");

      let divButtons = document.createElement("div");
      let editButton = document.createElement("button");
      let doneButton = document.createElement("button");

      var age = animalAge.value;
      var type = animalType.value;
      var gender = animalGender.value;

      if(type == "" || age == "" || gender == ""){
        return;
      }

      p1.innerText = "Pet:" + type;
      p2.innerText = "Gender:" + gender;
      p3.innerText = "Age:" + age;

      editButton.innerText = "Edit";
      doneButton.innerText = "Done";

      divButtons.setAttribute("class", "buttons");
      editButton.setAttribute("class", "edit-btn");
      doneButton.setAttribute("class", "done-btn");
      divButtons.appendChild(editButton);
      divButtons.appendChild(doneButton);

      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);

      li.appendChild(article);
      li.appendChild(divButtons);
      ul.appendChild(li);

      editButton.addEventListener("click", edit)
      doneButton.addEventListener("click", done)

      animalAge.value = "";
      animalType.value = "";
      animalGender.value = "";

      function edit(){
        animalAge.value = p3.innerText.split(":")[1];
        animalType.value = p1.innerText.split(":")[1];
        animalGender.value = p2.innerText.split(":")[1];

        ul.removeChild(li);
      }

      function done(){
        ul.removeChild(li);
        let al = document.getElementById("adopted-list");

        li.removeChild(divButtons);

        let clearButton = document.createElement("button");
        clearButton.setAttribute("class", "clear-btn");
        clearButton.innerText = "Clear";

        li.appendChild(clearButton);

        al.appendChild(li);

        clearButton.addEventListener("click", clear);

        function clear(){
          al.removeChild(li);
        }
      }
    }
}