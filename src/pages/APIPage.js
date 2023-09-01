import React from 'react';

const APIPage = () => {
  return (
    <div>
      <div className="intro-text">
          Universal Transaction Serializer API 
      </div>
      <div className="intro-text">
          Input the transaction information and get the serialized transaction.
      </div>
      <div style={{ margin: '30px 200px' }}>
        <iframe
          src="https://near.social/embed/c600cadf81115e7635094448ded43bc34703b47e86a1c1a3d1bec8b4cacc557a/widget/universal-serializer"
          title="Universal Serializer"
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </div>
  );
};

export default APIPage;
