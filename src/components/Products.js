import Card from "./Card";
import salad from "../images/greek salad.jpg";
import bruscheta from "../images/bruchetta.svg";
import lemonDessert from "../images/lemon dessert.jpg";
import TitleText from "./generals/TitleText";
import Button from "./generals/Button";

function Products() {
  return (
    <>
      <article className="titleArea">
        <TitleText text="This week specials!" color="black" />
        <Button text="Online Menu" />
      </article>
      <section className="products">
        <Card
          direction={salad}
          description="Greek salad"
          title="Greek Salad"
          text="A vibrant and refreshing salad commonly found in Greek cuisine. It typically includes fresh tomatoes, cucumbers, red onions, kalamata olives, and a generous slab of feta cheese"
          price="$1200"
          order="Order a delivery"
        />
        <Card
          direction={bruscheta}
          description="bruscheta"
          title="Bruschetta"
          text="A classic Italian appetizer that consists of grilled bread rubbed with garlic and topped with a variety of fresh ingredients"
          price="$1200"
          order="Order a delivery"
        />

        <Card
          direction={lemonDessert}
          description="Lemon dessert"
          title="Lemon Dessert"
          text="Lemon bars offer a contrast between a rich, buttery shortbread base and a soft, tangy lemon topping, dusted with powdered sugar. Lemon sorbet, on the other hand, is a light, icy treat perfect for warmer weather. "
          price="$1200"
          order="Order a delivery"
        />
      </section>
    </>
  );
}

export default Products;
