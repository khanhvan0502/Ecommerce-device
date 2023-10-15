import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog1 from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogs/blogSlice";
import moment from "moment";

const SingleBlog = () => {
  const singleBlogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    getSingleBlog();
  }, []);

  const getSingleBlog = () => {
    dispatch(getBlog(getBlogId));
  };
  return (
    <>
      <Meta title={singleBlogState?.title} />
      <BreadCrumb title={singleBlogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10 ">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">{singleBlogState?.title}</h3>
              <img src={singleBlogState?.images[0]?.url
                    ? singleBlogState?.images[0]?.url
                    : blog1} className="img-fluid w-100 my-4" alt="blog" />
              <p
                dangerouslySetInnerHTML={{
                  __html: singleBlogState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
