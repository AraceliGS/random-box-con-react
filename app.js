
   setInterval(function() {
        const colors = ['black', 'red', 'green', 'blue'];
        
            var style = colors.map(function(el, index) {     
                // debugger;
                console.log(el, index)
                if(index < colors.length) {
                    let box = document.getElementById('random-box');
                    box.classList = ' ';
                    box.classList === el ? box.classList.add(colors[index + 1]) : box.classList.add(el);
                    box.classList === 'blue' ? box.classList.add(colors[0]) : box.classList.add(el);
                    // box.classList.add(el);
                }
            });
   }, 3000);
        // document.getElementsByClassName('box').classList.add(el);
        // document.getElementByClassName('box').setAtrribute('id', index);
    