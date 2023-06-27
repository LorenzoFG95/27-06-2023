import "./App.css";
import { useState } from "react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/productList";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <div className="App">
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <h1 className="app__title">Choose one</h1>
          <ProductList name="rum" setProductSection={setProductSection} />
          <ProductList name="vodka" setProductSection={setProductSection} />
          <ProductList name="whiskey" setProductSection={setProductSection} />
        </>
      )}
    </div>
  );
}

export default App;
