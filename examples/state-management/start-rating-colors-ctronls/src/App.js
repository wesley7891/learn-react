import logo from './logo.svg';
import './App.css';
import colorData from './color-data.json'
import ColorList from './ColorList'
import React, {useState} from "react"

function App() {
  // useState返回colors 和 setColors
  const [colors, setColors] = useState(colorData)
  return <ColorList colors={colors} onRemoveColor={id => {
    const newColors = colors.filter(color => color.id != id)
    setColors(newColors)
  }} onSelect={(id, i) => {
    console.log(` id => ${id} i => ${i}`)
    const newColors = colors.map(color => {
      if (color.id === id) {
        color.rating = i
      }
      return color
    })
    setColors(newColors)
  }} newColor={(id, title, hex) => {
    console.log(`her ${id} ${title} ${hex}`)
    const newColors = colors.map(color => {
      if (color.id === id) {
        color.title = title
        color.color = hex
      }
      return color
    })
    setColors(newColors)
  }}/>
}

export default App;
