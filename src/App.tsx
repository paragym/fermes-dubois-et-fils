import { Switch, Route, Router as WouterRouter } from "wouter";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import LaFerme from "@/pages/LaFerme";
import Races from "@/pages/Races";
import Recettes from "@/pages/Recettes";
import Blogue from "@/pages/Blogue";
import FAQ from "@/pages/FAQ";
import Ressources from "@/pages/Ressources";
import Boutique from "@/pages/Boutique";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/la-ferme" component={LaFerme} />
      <Route path="/races" component={Races} />
      <Route path="/recettes" component={Recettes} />
      <Route path="/blogue" component={Blogue} />
      <Route path="/faq" component={FAQ} />
      <Route path="/ressources" component={Ressources} />
      <Route path="/boutique" component={Boutique} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
      </WouterRouter>
    </LanguageProvider>
  );
}

export default App;
