
import "./Home.css"
import blogs from "../../data"
import BlogCard from "../../componants/BlogCard/BlogCard"

function Home() {

 
  return (
    <>
    <div className="blogs-container">
    {
      blogs.map((blogObject , i)=>{
       const {
        img,
        title,
        content,
        author,
        date,
        categories
       } = blogObject

       return (<BlogCard
       key={i}
       img={img}
       title={title}
       content={content}
       author={author}
       date={date}
       categories={categories}
       />)
      })
    }
    </div>
    </>
  )
}

export default Home