


document.addEventListener("DOMContentLoaded", () => {

    createAppetizerCard();
    renderEntreesMenu();

});




const Entrees = [ {
    Food: "Bruschetta Verde",
    price: "$9",
    description: "Grilled sourdough topped with marinated heirloom tomatoes, basil, garlic, and a drizzle of balsamic reduction.",
     image: "/food img/Bruschetta Verd.jpg"
},
{
    Food: "Carciofi Fritti",
    price: "$11",
    description: "Lightly fried artichoke hearts served with a creamy lemon-garlic aioli.",
    image: "/food img/Carciofi Fritt.jpg"}]

const Primis = [{
    Food: "Pasta al Pesto di Pistacchio",
    price: "$17",
    description: "Handmade pasta tossed in a creamy pistachio and basil pesto, finished with toasted pistachios and a hint of lemon.",
     image: "/food img/Pasta al Pesto di Pistacchio.jpg"
},
{
    Food: "Rigatoni alla Vodka",
    price: "$16",
    description: "A rich, velvety tomato vodka sauce made with cashew cream, tossed with rigatoni and fresh basil.",
     image: "/food img/Rigatoni alla Vodka.jpg"
},
{
    Food: "Risotto ai Funghi e Tartufo",
    price: "$19",
    description: "Arborio rice slow-cooked with wild mushrooms, white truffle oil, and a hint of roasted garlic.",
    image: "/food img/Risotto ai Funghi e Tartufo.jpg"
}]
const Secondi = [   {
    Food: "Cannoli Siciliani",
    price: "$8",
    description: "Crispy cannoli shells filled with sweetened cashew ricotta, chocolate chips, and candied orange zest.",
    image: "/food img/Cannoli Siciliani.jpg"
},
{
    Food: "Polpette di Lenticchie",
    price: "$17",
    description: "Hearty lentil and walnut meatballs served in marinara sauce with grilled ciabatta.",
    image: "/food img/Polpette di Lenticchie.jpg"
}]

const Dolci = [    {
    Food: "Patate al Rosmarino",
    price: "$7",
    description: "Crispy rosemary potatoes tossed with sea salt and extra virgin olive oil",
    image: "/food img/Patate al Rosmarino.jpg"
},
{
    Food: "Cavolini di Bruxelles Arrosto",
    price: "$8",
    description: "Caramelized Brussels sprouts with balsamic glaze and toasted almonds.",
    image: "/food img/Cavolini di Bruxelles Arrost.jpg"
},
{
    Food: "Tiramisù Vegano",
    price: "$10",
    description: "Layers of espresso-soaked sponge cake, cashew mascarpone, and cocoa powder for a classic finish.",
    image: "/food img/Tiramisù Vegano.jpg"
}]
let Appetizers = [];
Appetizers.push(Entrees, Primis, Secondi, Dolci);
let course_name=["Entrees", "Primism", "Secondi", "Dolci"];
   

    
 
function appendElementsToCard(card, elements) {
    elements.forEach(element => {
        card.appendChild(element);
    });
}

function createAppetizerCard() {
    let Hightlight  = document.getElementById("hight_light");
    if (Hightlight){
        Appetizers.forEach(course => {
            course.forEach(item => {
                let card = document.createElement("div");
                card.className = "swiper-slide";
                let img = document.createElement("img");
                img.src = item.image;
                img.alt = item.Food;
                let h3 = document.createElement("h3");
                h3.textContent = item.Food;
                let p = document.createElement("p");
                p.textContent = item.description;
                let price = document.createElement("p");
                price.textContent = item.price;
                appendElementsToCard(card, [img, h3, p, price]);
                Hightlight.appendChild(card);
            })}
        )
    }
}

function renderEntreesMenu() {
    let food_name = document.getElementById("food_name");
    if (food_name) {
        Appetizers.forEach(course => {
            let container= document.createElement("div")
            container.className="container";

            let box= document.createElement("div");
            box.className = "Food";

            let transtion= document.createElement("div");
            transtion.className = "transition";
            transtion.appendChild(box)

            let course_section= document.createElement("div");
            course_section.className="course";

            let name=document.createElement("div");
            name.className="box";
           

            let name_course= document.createElement("h1");
            name_course.textContent=course_name[Appetizers.indexOf(course)];
            name.appendChild(name_course)

            let course_divider= document.createElement("div");
            course_divider.className="course_divider"
            let course_divider_left= document.createElement("div");
            course_divider_left.className= "course_divider_shape_left";
            
            let course_divider_right= document.createElement("div");
            course_divider_right.className= "course_divider_shape_right";
            
            let background=document.createElement("div");
            background.className="background"+course_name[Appetizers.indexOf(course)];
            appendElementsToCard(background,[course_section,container])

            appendElementsToCard(course_divider,[course_divider_left,course_divider_right])
            course_section.appendChild(name);
            course_section.appendChild(course_divider);
            

            course.forEach(item => {
                let food_box=document.createElement("div");
                food_box.className="Food_box";
                let food = document.createElement("div");
                food.className = "menu-item";
                let name = document.createElement("span");
                name.className = "title";
                name.textContent = item.Food;
                let price = document.createElement("span");
                price.className = "price";
                price.textContent = item.price;
                let p = document.createElement("p");
                p.textContent = item.description;
                let divider = document.createElement("div");
                divider.className = "divider";
                box.appendChild(food)
                
                appendElementsToCard(food, [name, price, p, divider]);
                
            });
           
            container.appendChild(transtion)
            food_name.appendChild(background);

        // Create and append a trapezoid after the list
          
        });
    }
    
}
