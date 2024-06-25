import React from 'react'

const Qualities = () => {
  const qualities=[
    {
      id:1,
      image:"/community.jpg",
      title:"Community Development",
      description:"We believe in the power of community to drive change. Our platform connects donors with local projects, fostering a sense of global solidarity and support. By working closely with community leaders, we ensure that each donation addresses the unique needs and challenges of the people it serves. Together, we build stronger, more resilient communities, paving the way for sustainable development and growth. Join us in making a lasting impact on communities worldwide."
    },
    {
      id:2,
      image:"/Transparency.jpg",
      title:"Transparency",
      description:"Transparency is at the heart of everything we do at BlockChange. We provide clear, detailed reports on how your donations are utilized, ensuring you can see the direct impact of your contributions. Our blockchain technology offers an extra layer of security and accountability, giving you peace of mind with every donation. We believe in open communication and honesty, fostering trust and confidence in our mission. Know where your money goes and witness the change it brings."
    },
    {
      id:3,
      image:"/impact.jpg",
      title:"Impact Measurement",
      description:"Measuring impact is crucial to understanding and enhancing the effectiveness of our efforts. At [Your Website Name], we track and report the outcomes of each project, providing you with real-time updates on the progress and results. Our data-driven approach helps us refine our strategies and maximize the benefits of your donations. See the tangible difference your support makes in the lives of those in need, and be assured that every contribution is making a significant impact. Your generosity is transforming lives—one donation at a time."
    }
  ];
  return (
    <>
      <div className="qualities">
        <h2>Our Qualities</h2>
        <div className="container">
          {
            qualities.map(element=>{
              return(
                <div className="card" key={element.id}>
                <div className="img-wrapper">
                  <img src={element.image} alt={element.title}></img>
                </div>
                <div className="content">
                  <p className='title'>{element.title}</p>
                  <p className='description'>{element.description}</p>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Qualities
