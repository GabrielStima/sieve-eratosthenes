import Header from "./components/Header"
import Footer from "./components/Footer"
import Title from "./components/Title"
import Section from "./components/Section"
import Button from "./components/Button"
import gif from "./assets/images/Sieve_of_Eratosth.gif"
import './assets/css/index.css'

function App() {
  return (
    <>
      <Header />
      <Section>
        <div>
          <Title>Sieve of Eratosthenes</Title>
          <p>In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.</p>
          <p>It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime. This is the sieve&apos;s key distinction from using trial division to sequentially test each candidate number for divisibility by each prime. Once all the multiples of each discovered prime have been marked as composites, the remaining unmarked numbers are primes.</p>
          <p>One of a number of prime number sieves, it is one of the most efficient ways to find all of the smaller primes. It may be used to find primes in arithmetic progressions.</p>
          <p><b>To better understand how the Sieve of Eratosthenes works, type a number greater than 2.</b></p>

          <div>
            <input className="input" type="text" placeholder="Digite um numero"/>
            <Button>Start</Button>
          </div>
        </div>
        <div>
          <img src={gif} alt="Apresentação visual do algoritimo" />
        </div>
      </Section>

      

      <Footer />
    </>
  )
}

export default App
