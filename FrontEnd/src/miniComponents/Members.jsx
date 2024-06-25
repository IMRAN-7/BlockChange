import React from 'react'

const Members = () => {
   const members=[
    {
      id:1,
      image:"/m1.jpg",
      title:"Alex",
    },
    {
      id:2,
      image:"/m2.jpg",
      title:"Eric",
    },
    {
      id:3,
      image:"/m3.jpg",
      title:"Helen",
    },
    {
      id:4,
      image:"/m4.jpg",
      title:"Sophia",
    },
    {
      id:5,
      image:"/m5.jpg",
      title:"Keyley",
    },
    {
      id:6,
      image:"/m6.jpg",
      title:"Peter",
    },
    {
      id:7,
      image:"/m7.jpg",
      title:"John",
    },
   ];
  return <>
  <section className='members'>
   <div className="container">
    <div className="heading_section">
      <h2 className='heading'>Members</h2>
      <p> Our dedicated community of members drives our mission forward. Their generosity and commitment are making a tangible impact every day.
      </p>
    </div>
    <div className="members_container">
      { members.map((element) =>(
          <div className="card" key={element.id}>
            <img src={element.image} alt={element.title}/>
            <h3>{element.title}</h3>
            </div>
        ))}
        </div>
   </div>
  </section>
  </>
}

export default Members
