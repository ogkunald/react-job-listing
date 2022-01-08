import React from 'react'

const JobBarComponent = (props) => {
    
    const {job,id} = props;
    const langAndTools = [job.role,job.level];
    if (job.tools) {
        langAndTools.push(...job.tools)
    }
    if (job.languages) {
        langAndTools.push(...job.languages)
    }

    return (
        <div className='flex bg-white shadow-md p-4 mx-48 my-4'>
            <div>
                <img src={job.logo} alt={job.company} />
            </div>
            <div className='flex flex-col ml-4 justify-between'>
                <h3 className='text-teal-500 font-bold'>
                    {job.company}
                    {job.new && <label className='p-1 border-2 border-teal-600 rounded-full mx-2 font-bold text-xs text-white bg-teal-600'>NEW!</label>}
                    {job.featured && <label className='p-1 border-2 border-black rounded-full  font-bold text-xs text-white bg-black'>FEATURED</label>}
                </h3>
                <h2 className='font-bold text-lg'>{job.position}</h2>
                <p className='text-gray-500'>
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className='flex items-center ml-auto '>
               {langAndTools.length !== 0 && langAndTools.map((lAt,idx)=>(<span className='text-teal-500 bg-teal-100 font-bold m-2 p-1 text-sm rounded' key={idx}>{lAt}</span>))} 
            </div>
        </div>

    )
}

export default JobBarComponent
