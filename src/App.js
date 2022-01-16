import { useEffect,useState } from "react";
import axios from "axios";
import { JobBarComponent } from "./components";

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
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

  const filterFunction = (job) =>{
    if (filters.length === 0) {
      return true;
    }
    const langAndTools = [job.role,job.level];
    if (job.tools) {
        langAndTools.push(...job.tools)
    }
    if (job.languages) {
        langAndTools.push(...job.languages)
    }

    return langAndTools.some((tag) => filters.includes(tag));
  };
  
  const handleTagClick = (tag) => {
    if(!filters.includes(tag)){
      setFilters([...filters,tag]);
    }  
  }
  const handleFilterClick = (passedFilter) =>{
    setFilters(filters.filter((f)=> f !== passedFilter))
  }

  const filteredJobs = data.filter(filterFunction);
  
  
  console.log(filteredJobs);
  
  return (
        <div className="App"> 
            <header className="bg-teal-500 mb-16 w-full h-full">
              <img className="object-cover w-full h-40 " src="/images/bg-header-desktop.svg" />  
            </header>
            {filters.length > 0 && (
            <div className="flex flex-wrap bg-white shadow-md p-6 mx-10 -mt-24 rounded z-10 relative sm:mx-48 sm:p-4">
              {filters.length > 0 && filters.map((filter)=>
              <span className="font-semibold cursor-pointer my-4 mx-2  text-sm rounded">
              <span  className=" text-teal-500 bg-teal-100 p-2 font-bold text-base">{filter}
              </span>
              <span className="bg-teal-500 text-teal-50 p-2  font-bold text-base"
              onClick={()=> handleFilterClick(filter)}
              >X</span>
              </span>
              )}
              <span className= "text-teal-500 font-bold flex items-center  ml-auto hover:underline " onClick ={() => setFilters([])}>Clear</span> 
            </div> ) }
            {!data && <p> Fetching</p>}
            {filteredJobs && 
            <div>
                  {filteredJobs.map((job) => {
                       return <JobBarComponent job = {job} key = {job.id} 
                       handleTagClick = {handleTagClick}
                       ></JobBarComponent>
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