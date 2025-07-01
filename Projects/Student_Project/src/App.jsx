
// import './App.css'
import SemesterCard from './components/SemesterCard'

function App() {
  const semesters = [
    { title: "Semester 1", img: "https://via.placeholder.com/150" },
    { title: "Semester 2", img: "https://via.placeholder.com/150" },
    { title: "Semester 3", img: "https://via.placeholder.com/150" },
    { title: "Semester 4", img: "https://via.placeholder.com/150" },
    { title: "Semester 5", img: "https://via.placeholder.com/150" },
    { title: "Semester 6", img: "https://via.placeholder.com/150" },
    { title: "Semester 7", img: "https://via.placeholder.com/150" },
    { title: "Semester 8", img: "https://via.placeholder.com/150" }
  ]

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ color: '#007bff' }}>👨‍💻 Ayan Memon</h1>
      <h2>GTU COMPUTER BRANCH</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        {semesters.map((sem, index) => (
          <SemesterCard key={index} title={sem.title} img={sem.img} />
        ))}
      </div>
    </div>
  )
}

export default App