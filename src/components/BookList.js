import React from 'react'

const imgSize = {
    width:"200px",
    height: "300px"
}

const Image = () => 
    (
        <img src="https://m.media-amazon.com/images/I/413tVFk--xS.jpg" style={imgSize}
        alt="Books" />
    );

const Title = () => <h2>Dopamine Detox</h2>
const Author = () => {
    return <h4>Thibaut Meurisse</h4>
}

const BookList = () => {
  return (
   <article>
        <Image />
        <Title />
        <Author />
   </article>
  )
}

export default BookList