import { useEffect, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Title from "./components/Title"
import Section from "./components/Section"
import Button from "./components/Button"
import ArrayRepresentation from "./components/ArrayRepresentation"
import gif from "./assets/images/Sieve_of_Eratosth.gif"
import './assets/css/index.css'
import { generateInicialArray, generateDivisibleTwoArray, generateFinalArray } from './utils'

function App() {
  const [number, setNumber] = useState('');
  const [step, setStep] = useState(0);
  const [inicialArray, setInicialArray] = useState([]);
  const [divisibleTwoArray, setDivisibleTwoArray] = useState([]);
  const [finalArray, setFinalArray] = useState([]);

  useEffect(()=>{
    if (step === 1) {
      setInicialArray(generateInicialArray(Number(number)));
      document.getElementById('sectionOne').scrollIntoView({
        behavior: 'smooth'
      });
    }
    if (step === 2) {
      setDivisibleTwoArray(generateDivisibleTwoArray(inicialArray));
      document.getElementById('sectionTwo').scrollIntoView({
        behavior: 'smooth'
      });
    }
    if (step === 3) {
      setFinalArray(generateFinalArray(divisibleTwoArray));
      document.getElementById('sectionThree').scrollIntoView({
        behavior: 'smooth'
      });
    }
  },[step])

  const nextStep = () => {
    setStep(step + 1);
  }

  const handleNumber = () => {
    if (Number(number) < 2) {
      return false;
    } 
    return true;
  }

  const reset = () => {
    setNumber('');
    setStep(0);
    setInicialArray([]);
    setDivisibleTwoArray([]);
    setFinalArray([]);
  }

  return (
    <>
      <Header />
      <main>
        <Section>
          <div>
            <Title>Sieve of Eratosthenes</Title>
            <p>In mathematics, the sieve of Eratosthenes is an ancient algorithm for finding all prime numbers up to any given limit.</p>
            <p>It does so by iteratively marking as composite (i.e., not prime) the multiples of each prime, starting with the first prime number, 2. The multiples of a given prime are generated as a sequence of numbers starting from that prime, with constant difference between them that is equal to that prime. This is the sieve&apos;s key distinction from using trial division to sequentially test each candidate number for divisibility by each prime. Once all the multiples of each discovered prime have been marked as composites, the remaining unmarked numbers are primes.</p>
            <p>One of a number of prime number sieves, it is one of the most efficient ways to find all of the smaller primes. It may be used to find primes in arithmetic progressions.</p>
            <p><b>To better understand how the Sieve of Eratosthenes works, type a number greater than 2.</b></p>

            <div>
              <input value={number} readOnly={step !== 0} onChange={(e) => setNumber(e.target.value)} className="input" type="text" placeholder="Digite um numero"/>
              <Button disabled={step !== 0} onClick={() => handleNumber() ? nextStep() : alert('Numero menor que 2')}>Start</Button>
            </div>
          </div>
          <div>
            <img src={gif} alt="Apresentação visual do algoritimo" />
          </div>
        </Section>
        { step >= 1 && (
          <Section id='sectionOne' isOtherColor>
            <div>
              <Title>First Step - Overview and Generate List</Title>
              <p>A prime number is a natural number that has exactly two distinct natural number divisors: the number 1 and itself. To find all the prime numbers less than or equal to a given integer n by Eratosthenes&apos; method we need:</p>
              <ol>
                <li>Create a list of consecutive integers from 2 through <i><b>n:(2, 3, 4, ...,n)</b></i>.</li>
                <li>Initially, let <i><b>p</b></i> equal 2, the smallest prime number.</li>
                <li>Enumerate the multiples of <i><b>p</b></i> by counting in increments of <i><b>p</b></i> from <i><b>2p</b></i> to <i><b>n</b></i>, and mark them in the list (these will be <i><b>2p, 3p, 4p, ...;</b></i> the <i><b>p</b></i> itself should not be marked).</li>
                <li>Find the smallest number in the list greater than <i><b>p</b></i> that is not marked. If there was no such number, stop. Otherwise, let <i><b>p</b></i> now equal this new number (which is the next prime), and repeat from step 3.</li>
                <li>When the algorithm terminates, the numbers remaining not marked in the list are all the primes below <i><b>n</b></i>.</li>          
              </ol>
              <p>The main idea here is that every value given to <i><b>p</b></i> will be prime, because if it were composite it would be marked as a multiple of some other, smaller prime. Note that some of the numbers may be marked more than once (e.g., 15 will be marked both for 3 and 5).</p>
              <p>So first we need to see to the list:</p>

              <ArrayRepresentation array={inicialArray}/>

              <Button isOtherColor disabled={step !== 1} onClick={nextStep}>Next Step</Button>
            </div>
          </Section>
        )}
        { step >= 2 && (
          <Section id='sectionTwo'>
            <div>
              <Title>Second Step - Divisible by 2</Title>
              <p>According to the algorithm, we will mark all numbers that are divisible by 2 and are greater than or equal to the square of the same</p>
              <ArrayRepresentation array={divisibleTwoArray}/>
              <Button disabled={step !== 2} onClick={nextStep}>Next Step</Button>
            </div>
          </Section>
        )}
        { step >= 2 && (
          <Section id='sectionThree' isOtherColor>
            <div>
              <Title>Third Step - Divisible for the next numbers</Title>
              <p>Now we move on to the next unmarked number, 3, and we mark all numbers that are multiples of 3 and are greater than or equal to the square and we continua this process with the next unmarked numbers until the list is finished and the result of the algorithm is below with all prime numbers from 2 to n.</p>
              <ArrayRepresentation array={finalArray}/>
              <Button isOtherColor onClick={reset}>Reset</Button>
            </div>
          </Section>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
