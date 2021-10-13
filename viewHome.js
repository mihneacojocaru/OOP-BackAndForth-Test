import ViewNext from "./viewNext.js";

export default class ViewHome{

    constructor(){
        this.root = document.getElementById("root");
        this.root.innerHTML = "";
        this.root.innerHTML += this.createPage();

        this.btnNext = document.querySelector(".next");

        console.log("HOME");
        this.btnNext.addEventListener("click",this.handleClick);
    }

    createPage=()=>{
        let content = `
        <h1>TITLE</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ipsa saepe recusandae temporibus. Eveniet soluta quas nostrum repellat, natus vitae? Iure earum illo itaque ut pariatur excepturi vero adipisci explicabo!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis distinctio obcaecati nulla ipsa eos ducimus neque iure ut nesciunt.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus pariatur optio aliquid, eos autem facilis fuga cupiditate. Est totam similique libero modi natus in atque pariatur eum nobis? Beatae quaerat itaque dolorem quasi harum similique, veniam sapiente quod ab ducimus cum ex alias iste optio expedita deleniti reiciendis quae voluptatum!</p>
        <button class="next">NEXT PAGE</button>
        `;
        return content;
    }


    handleClick=(e)=>{
        e.preventDefault();
            let obj = e.target;
            
            if(obj.classList.contains("next")){
                new ViewNext();
            }


    }

}
