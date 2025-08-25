import React from "react";
import Card from "./card"; // تحديث الاستيراد لكن يجب تطابق الاسم مع الملف
import dress from "../assets/elegantdress.jpg";
import shirt from "../assets/casualshirt.jpg";
import jacket from "../assets/jacket.jpg";

function ProductGallery() {
  return (
    <section id="shop" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Collection</h2>
        <div className="row">
          <Card name="Stylish Jacket" price="$79.99" image={jacket} />

          <Card name="Elegant Dress" price="$49.99" image={dress} />
          <Card name="Casual Shirt" price="$29.99" image={shirt} />
          <Card name="Elegant Dress" price="$49.99" image={dress} />
          <Card name="Casual Shirt" price="$29.99" image={shirt} />

          <Card name="Stylish Jacket" price="$79.99" image={jacket} />
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;
