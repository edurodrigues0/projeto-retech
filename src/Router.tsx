import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Form } from './pages/Form'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/success">
        <Route path=":requestId" element={<Success />} />
      </Route>
    </Routes>
  )
}
