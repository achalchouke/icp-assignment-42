import "./BlogCard.css"

function BlogCard({title, img, content, author, date, categories }) {
  return (
    <div className='blog-card'> 
    <img src={img} className="img"/>
        <h2 className="blog-title">{title}</h2>
        <p className="blog-content-preview">
            {content.substring(0 , 70)}....
        </p>

        <div className="author-card">
            <img src = {author.avatar} className="author-avatar"/>
            <span className="author-name">{author.name}</span>
            <span className="blog-date">{date}</span>
        </div>
        {categories.map((category , i) => {
          return <span key = {i} className="category-bage">{category}</span>
        })}
    </div>
  )
}

export default BlogCard