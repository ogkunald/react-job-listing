import React from 'react'

const JobBarComponent = (props) => {
    
    const {job,id,handleTagClick} = props;
    const langAndTools = [job.role,job.level];
    if (job.tools) {
        langAndTools.push(...job.tools)
    }
    if (job.languages) {
        langAndTools.push(...job.languages)
    }

    return (
        <div className={`flex flex-col bg-white shadow-md p-4 mx-10 my-16 rounded ${job.featured &&  `border-l-4 border-teal-500`} sm:flex-row sm:mx-48 sm:my-6`}>
            <div >
                <img  className='-mt-14 ml-2 w-16 h-16 sm:m-2 sm:w-24 sm:h-24' src={job.logo} alt={job.company} />
            </div>
            <div className='flex flex-col m-2 pb-2 justify-between border-b-2 sm:border-none sm:ml-6 '>
                <h3 className=' text-teal-500 font-bold justify-between '>
                    {job.company}
                    {job.new && <span className=' py-1 px-2  rounded-full m-2 font-bold text-sm text-white bg-teal-600'>NEW!</span>}
                    {job.featured && <span className=' py-1 px-2 rounded-full font-bold text-sm text-white bg-black'>FEATURED</span>}
                </h3>
                <h2 className='font-bold text-lg mt-2 sm:py-2 sm:mt-0'>{job.position}</h2>
                <p className='text-gray-500'>
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>
            <div className='flex flex-wrap  items-center sm:ml-auto'>
               {langAndTools.length !== 0 && langAndTools.map((lAt,idx)=>(<span className='text-teal-500 bg-teal-100 font-semibold m-2 p-1 text-sm rounded ' key={idx} onClick={() =>handleTagClick(lAt) }>{lAt}</span>))} 
            </div>
        </div>

    )
}

export default JobBarComponent
