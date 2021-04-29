import * as $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

import Post from '@models/Post'
import './analytics'
import xml from '@public/4764605_52.xml'
import json from '@public/db'
import image from './assets/img/activities-4.jpg'

import './styles/style.css'
import './styles/scss.scss'

console.log('Работает')

const post = new Post('Webpack Post Title', image)
$('pre').addClass('code').html(post.toString())

const App = () => (
  <div className="container">
    <h1>Hello Webpack</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre />
    <div className="box">
      <h2>SCSS</h2>
    </div>
  </div>
)

const array = ['apple', 'watermelon', 'strawberry']

function a() {
  const asd = 4324
  const ASas = 13
}

ReactDOM.render(<App />, document.getElementById('root'))
