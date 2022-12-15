//app.js

    let i = 0;
    function showpokemon(i){
    fetch('http://localhost:3001/api/all')
    .then(function(응답){
            return 응답.json();
    })
    .then(function(data){
        console.log(data);
        const pokemon_list = document.getElementById('pokemon-list');
        //(item) div생성
        const itemEl = document.createElement('div');
        //item class명 생성
        itemEl.classList.add('item');
        //console.log(itemEl)
        itemEl.innerHTML +=`
        <img src="${data[i].imgUrl}" alt="${data[i].name}">
        <div class="info">
            <h3>이름 : ${data[i].name}</h3>
            <p>타입 : ${data[i].type}</p>
            <p>설명 : ${data[i].desc}</p> 
        </div>
        `;
        //console.log(itemEl)
        //pokemon-list에 item 추가
        pokemon_list.appendChild(itemEl);  
    });
    };
    showpokemon(0);
    showpokemon(1);
    showpokemon(2);
    showpokemon(3);
    showpokemon(4);
    showpokemon(5);
    showpokemon(6);
    showpokemon(7);
    showpokemon(8);

    /*  for (var i = 0; i < data.length; i++) {
      const itemEl = document.createElement("div");
      itemEl.classList.add("item");
      itemEl.innerHTML = `          <img
        src="${data[i].imgUrl}"
        alt="${data[i].name}"
      />
      <div class="info">
        <h3>이름: ${data[i].name}</h3>
        <p>타입: ${data[i].type}</p>
      </div>`;
      pokemon_list.appendChild(itemEl);
    } */