import React, { useState } from "react";

import { StyledBlogCard } from "./blog-card.styles";
import { IBlogCard } from "./blog-card.interfaces";

const mediumLogo = "/static/imgs/medium-logo.png";

const BlogCard = ({
  title,
  briefText,
  href,
  imgUrl,
  isResponsive,
}: IBlogCard) => {
  const [errorImg, setErrorImg] = useState<any>(null);

  return (
    <StyledBlogCard
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      isResponsive={isResponsive}
    >
      <div className="blog-img">
        <img
          src={errorImg ? errorImg : imgUrl ? imgUrl : mediumLogo}
          onError={() => setErrorImg(mediumLogo)}
          alt={`Imagem do blog ${title}`}
        />
      </div>
      <div>
        <p className="blog-title">
          <b>{title}</b>
        </p>
        <p className="blog-description">{briefText}</p>
      </div>
    </StyledBlogCard>
  );
};

export default BlogCard;
