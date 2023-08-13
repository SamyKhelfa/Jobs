import './App.css'

function App() {

  return (
    <div className="app-container">
      <Header>
        <Title>Le Job Board</Title>
      </Header>
  
      <Jobs>
        {jobList.map((job, index) => (
          <Job
            key={index}
            className={job.className}
            title={job.title}
            contractType={job.contractType}
            country={job.country}
            city={job.city}
          />
        ))}
      </Jobs>
  
      <Footer>
        {/* Contenu du pied de page ici */}
      </Footer>
    </div>
  );
        }

export default App
