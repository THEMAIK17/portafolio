import './index.css'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'

function App() {
  // Minor change to force Vercel redeploy
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-surface py-8 border-t border-border text-center">
        <div className="container mx-auto px-4">
          <p className="text-text-muted">
            © {new Date().getFullYear()} Maikol Duran. Todos los derechos reservados.
          </p>

        </div>
      </footer>
    </div>
  )
}

export default App
