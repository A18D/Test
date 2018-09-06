import React from 'react'
import { render } from 'react-dom'
import CSelect from './TestSelect'
import "./fonts/glyphicons-halflings-regular.eot"
import "./fonts/glyphicons-halflings-regular.svg"
import "./fonts/glyphicons-halflings-regular.ttf"
import "./fonts/glyphicons-halflings-regular.woff"
import "./fonts/glyphicons-halflings-regular.woff2"

import "./css/style.css"
import "./css/bootstrap.min.css"
import store from './store'


render(<CSelect />, document.getElementById('react-container'))
//render(<Store />, document.getElementById('react-container'))
