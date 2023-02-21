import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Page } from "@shopify/polaris";
import ProductSlider from "./components/ProductSlider/ProductSlider";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="You May Also Like">
        <ProductSlider />
      </Page>
    </AppProvider>
  );
}

export default App;
