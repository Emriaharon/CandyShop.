import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
    var items = [
      {
        img: "https://www.valor.es/wp-content/uploads/2016/05/puro-0.png",
        category: "CHOCOLATE",
        title: "VALOR",
      },
      {
        img: "https://www.auntynellies.ie/wp-content/uploads/2022/06/Mike-and-Ike-Mega-Mix-Theatre-box.jpg",
        category: "SWEETS",
        title: "MIKE&IKE",
      },
      {
        img: "https://www.paneco.co.il/media/catalog/product/cache/a9ed0cf65db99ba5ca444c764b75f3d9/0/0/0006427_-340-.jpg",
        category: "SNACKS",
        title: "SNYDER'S",
      },
      {
        img: "https://cdn.carmella.co.il/wp-content/uploads/2018/11/38000138546-1.jpg",
        category: "SNACKS",
        title: "PRINGLES",
      },
      {
        img: "https://5dakot.com/storage/166/conversions/%D7%A4%D7%90%D7%A0%D7%98%D7%94-%D7%90%D7%95%D7%A8%D7%A0%D7%92'-thumb.jpg",
        category: "DRINKS",
        title: "FANTA",
      },
      {
        img: "https://m.media-amazon.com/images/I/91gLTYhyjTL.jpg",
        category: "SNACKS",
        title: "LAY'S",
      },
      {
        img: "https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/7290111565656.jpg",
        category: "SNACKS",
        title: "BAMBA",
      },
      {
        img: "https://www.chocolateworld.co.il/wp-content/uploads/2022/12/1671714748_nutellabiscuit-900x900.png.webp",
        category: "CHOCOLATE",
        title: "NUTELLA",
      },
    ];
    return (
      <section>
        <Grid
          columns={24}
          sx={{
            flexGrow: 2,
            textAlign: "center",
            marginBottom: 5,
          }}
          container
        >
          {items.map((item, i) => (
            <Grid
              key={i}
              item
              xs={24}
              md={6}
              justifyContent="center"
              sx={{ alignContent: "center", padding: "20px" }}
            >
              <Link to={`/${item.category}`}>
                <CategoryCard sx={{ margin: "auto" }} key={i} item={item} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }