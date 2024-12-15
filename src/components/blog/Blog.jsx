import React from 'react';
import "./blog.css";

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section_title">Latest Reads</h2>

            <div className="blog_container grid">
                <a href="https://www.goodreads.com/book/show/49090884-tender-is-the-flesh" className="bookPerspectiveContainerStyles bookPerspectiveContainer">
                    <div className="bookPerspectiveStyles bookPerspective">
                        <div className="bookMetaTextStyles bookMetaText">
                        <h3 className="bookMetaTextStylesTitle">Tender Is The Flesh</h3>
                        <p className="bookMetaTextStylesAuthor">Agustina Bazterrica</p>
                        </div>
                        <div className="bookThreeDStyles bookThreeD" style={{ '--book-height': '5px' }}>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594563107i/49090884.jpg"
                            alt="Tender is the Flesh"
                            className="bookImage"
                        />
                        </div>
                        <div className="bookExternalLink bookMetaText">
                        <span className="bookExternalLinkSpan">
                            View on Goodreads
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 13 13"
                            className="bookExternalLinkArrow"
                            >
                            <path d="M13 1.05a1 1 0 0 0-1-1L4 0a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L11 3.42V9a1 1 0 0 0 2 0V1.05Z"></path>
                            </svg>
                        </span>
                        </div>
                    </div>
                </a>

                <a href="https://www.goodreads.com/book/show/43208407-i-who-have-never-known-men" className="bookPerspectiveContainerStyles bookPerspectiveContainer">
                    <div className="bookPerspectiveStyles bookPerspective">
                        <div className="bookMetaTextStyles bookMetaText">
                        <h3 className="bookMetaTextStylesTitle">I Who Have Never Known Men</h3>
                        <p className="bookMetaTextStylesAuthor">Jacqueline Harpman</p>
                        </div>
                        <div className="bookThreeDStyles bookThreeD" style={{ '--book-height': '10px' }}>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554973792i/43208407.jpg"
                            alt="I Who Have Never Known Men"
                            className="bookImage"
                        />
                        </div>
                        <div className="bookExternalLink bookMetaText">
                        <span className="bookExternalLinkSpan">
                            View on Goodreads
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 13 13"
                            className="bookExternalLinkArrow"
                            >
                            <path d="M13 1.05a1 1 0 0 0-1-1L4 0a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L11 3.42V9a1 1 0 0 0 2 0V1.05Z"></path>
                            </svg>
                        </span>
                        </div>
                    </div>
                </a>

                <a href="https://www.goodreads.com/book/show/53223710-heaven" className="bookPerspectiveContainerStyles bookPerspectiveContainer">
                    <div className="bookPerspectiveStyles bookPerspective">
                        <div className="bookMetaTextStyles bookMetaText">
                        <h3 className="bookMetaTextStylesTitle">Heaven</h3>
                        <p className="bookMetaTextStylesAuthor">Mieko Kawakami</p>
                        </div>
                        <div className="bookThreeDStyles bookThreeD" style={{ '--book-height': '15px' }}>
                        <img
                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1615916179i/53223710.jpg"
                            alt="Heaven"
                            className="bookImage"
                        />
                        </div>
                        <div className="bookExternalLink bookMetaText">
                        <span className="bookExternalLinkSpan">
                            View on Goodreads
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            viewBox="0 0 13 13"
                            className="bookExternalLinkArrow"
                            >
                            <path d="M13 1.05a1 1 0 0 0-1-1L4 0a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219L11 3.42V9a1 1 0 0 0 2 0V1.05Z"></path>
                            </svg>
                        </span>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Blog