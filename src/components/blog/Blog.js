import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import SanityClient from '../../client';
import './Blog.css';


export const Blog = () => {
  const [blogs, setBlogs] = useState([])
  
  const getData = async () => {
    const data = await SanityClient
    .fetch(`*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    }
  }`)
     setBlogs(data)
  }

  useEffect(()=>{
    getData()
},[])

const blogList = () =>{
  if (blogs.length === 0){
    return (
      <Spring
      from={{opacity:0}}
      to={{opacity:1}}
      config={{duration: 2000}}>
        {props => (
          <div style={props}> No blog</div>
        )}
      </Spring>
    )
  } else {
    return (
      <Spring
      from={{opacity:0}}
      to={{opacity:1}}
      config={{duration: 2000}}>
        {props => (
          <div className="blogPage-container"  style={props}>
            <div className="blogPage-header">
              <div className="blogPage-title">Blog</div>
              <div className="blogPage-subtitle">thoughts..</div>
            </div>
            <div className="blogs-container">
              {blogs.map(b =>{
                return (
                  <Link to={`/post/${b.slug.current}`} key={b.slug.current} className="blog-container">
                      <div className="blog">
                        <div className="blog-title">{b.title}</div>
                      <img 
                      src={b.mainImage.asset.url}
                      alt={b.mainImage.alt} 
                      className="blog-image" />
                      </div>
                  </Link>
                )
              })}
            
            </div>
          </div>
        )}
      </Spring>
      )
  }
}

return blogList()

}