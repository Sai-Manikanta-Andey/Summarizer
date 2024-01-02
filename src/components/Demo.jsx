import React from 'react'
import { useState,useEffect } from 'react'
import { copy,linkIcon,loader,tick } from '../assets'
// import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {
    const [article,setArticle] = useState({
        url:'',
        summary:''
    })
   

    const handleSubmit= async (e)=>{
      e.preventDefault()
        const {data} = await getSummary({articleUrl:article.url})

        if(data?.summary){
          const newArticle = {...article,summary:data.summary}
          setArticle(newArticle)
          console.log(newArticle);
        }

    }


  return (
    <section className="w-full max-w-xl mt-16 ">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex items-center justify-center mb-4"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 w-5 my-2 ml-3"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>setArticle({...article,url:e.target.value})}
            required
            className="url_input peer"
          />
          <button type="submit" className="shadow-lg submit_btn subrounded peer-focus:border-gray-700 peer-focus:text-gray-700">
            ➤
          </button>
        </form>
        <div>
          <form className='relative w-full'>
            <input type="text" readOnly placeholder='Summary' className='relative w-full p-4 rounded ' />
            <button className='absolute px-4 py-2 bg-blue-700 border-2 rounded-lg right-2 bottom-2'>Copy</button>
          </form>
        </div>
      </div>
      {/* Results */}
      
    </section>
  );
}

export default Demo