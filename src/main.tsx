import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'
import './refinements.css'
import './portfolio-first.css'
import './patio-concept.css'
import './stage-refinement.css'
import './service-balance.css'
import './identity.css'
import './cladding-revision.css'

const root = document.getElementById('root')!
const app = <React.StrictMode><App /></React.StrictMode>
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app)
else ReactDOM.createRoot(root).render(app)
