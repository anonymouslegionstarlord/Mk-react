import { useState } from 'react'
import './App.css'

const colors = ['#0f172a', '#1d4ed8', '#047857', '#b45309', '#be123c', '#6d28d9']

function App() {
  const [background, setBackground] = useState(colors[0])

  return (
    <main className="color-page" style={{ backgroundColor: background }}>
      <section className="color-card">
        <p className="eyebrow">React state practice</p>
        <h1>Background color changer</h1>
        <p>Select a color to update the page without reloading it.</p>
        <div className="palette" aria-label="Background colors">
          {colors.map((color) => (
            <button aria-label={`Use color ${color}`} className={background === color ? 'selected' : ''} key={color} onClick={() => setBackground(color)} style={{ backgroundColor: color }} type="button" />
          ))}
        </div>
        <output>{background}</output>
      </section>
    </main>
  )
}

export default App
