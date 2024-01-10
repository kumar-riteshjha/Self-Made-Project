const btn = document.querySelectorAll('.Button');
const body = document.querySelector('body');

btn.forEach(function(Button){
    console.log(Button);
    Button.addEventListener("click", function(e){
        console.log(e)
        console.log(e.target)
        if(e.target === yellow ){
          body.style.backgroundColor = e.target.id
        }
        if(e.target === blue ){
            body.style.backgroundColor = e.target.id
          }
          if(e.target === white ){
            body.style.backgroundColor = e.target.id
          }
          if(e.target === gray ){
            body.style.backgroundColor = e.target.id
          }
    });
});

