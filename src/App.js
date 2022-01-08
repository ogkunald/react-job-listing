import { useEffect,useState } from "react";
import axios from "axios";
import { JobBarComponent } from "./components";

function App() {
  const [data, setData] = useState();
  const URL = "http://localhost:3004/jobs";
  
  const getAllContacts = async () => {
      const response = await axios.get(URL)
               .catch((error) => {
                   console.log("Couldn't fetch the data "+ error);
               })
      setData(response.data);
  }
  
  useEffect(() => {
  getAllContacts();
  }, [URL])

  console.log(data);
  return (
        <div className="App"> 
            <header className="bg-teal-500 mb-16 w-full h-full">
              <img className="object-cover w-full h-fit " src="/images/bg-header-desktop.svg" />  
            </header> 
            {!data && <p> Fetching</p>}
            {data && 
            <div>
                  {data.map((job) => {
                       return <JobBarComponent job = {job} key = {job.id}></JobBarComponent>
                  })}
            </div>}

        </div>
  );
}
export default App;
// Todo
// 1.Study the design and JSON
// 2.Create the Job Board Component
// 3. Get the data from JSON
// 4. Pass down the data to JBC
// 5. Style it
// 6. Filter Component
// 7. Filter Data