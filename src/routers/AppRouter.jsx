import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Navbar, Footer } from 'Components'
import { Home, Contact, Error404, Faq, Privacity, Legals } from 'Pages'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Contact} path="/contacto" exact />
        <Route component={Faq} path="/preguntas" exact />
        <Route component={Privacity} path="/aviso-de-privacidad" exact />
        <Route component={Legals} path="/terminos-y-condiciones" exact />
        <Route component={Home} path="/inicio/:section" exact />
        <Route exact path="/">
          <Redirect to="/inicio" />
        </Route>
        <Route component={Home} path="/inicio" exact />
        <Route component={Error404} path="*" />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
