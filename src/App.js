import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page } from "@shopify/polaris";
import ProductSlider from "./components/ProductSlider/ProductSlider";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className="mainSliderContainer">
        <Page title="You May Also Like">
          <ProductSlider />
        </Page>
      </div>
    </AppProvider>
  );
}

export default App;
