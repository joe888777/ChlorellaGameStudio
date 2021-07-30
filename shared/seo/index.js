import React from 'react';

const SEO = ({ config }) => {
    const {
      title, description, keywords, author, copyright, imgLink, link,
    } = config;
    return (
      <div>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="copyright" content={copyright} />
        <meta name="thumbnail" content={imgLink} />
        <meta itemProp="name" content={title} />
        <meta itemProp="url" content={link} />
        <meta itemProp="description" content={description} />
        <meta itemProp="about" content={description} />
        <meta itemProp="abstract" content={description} />
        <meta itemProp="image" content={imgLink} />
        <meta itemProp="keywords" content={keywords} />
        <meta itemProp="author" content={author} />
        <meta itemProp="copyrightHolder" content={copyright} />
  
        {/* Open Graph data */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={link} />
        <meta property="og:ttl" content="345600" />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgLink} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
  
        {/* Link relationship */}
        <link rel="author" href={link} />
        <link rel="publisher" href={link} />
  
        {/* Twitter Card data */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="綠球藻遊戲工作室" />
        <meta name="twitter:creator" content={author} />
        <meta name="twitter:card" content={imgLink} />
        <meta name="twitter:image:src" content={imgLink} />
      </div>
    );
  };
  
  export default SEO;