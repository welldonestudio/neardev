import React from 'react';
import UnityCanvas from '../components/Unity3d';

const GamePage = () => {
  return (
    <div>
      <div className="intro-text">
        A simple game developed with Unity.
      </div>
      <div className="intro-text">
        Deployed on{" "}
         <a href="https://testnet.nearblocks.io/address/kms-test.testnet#contract">near testnet</a>
        .
      </div>
      <div style={{ margin: '30px 200px' }}>
        <UnityCanvas 
          loaderUrl = "/assets/unity3d/build.loader.js"
          dataUrl = "/assets/unity3d/build.data"
          frameworkUrl = "/assets/unity3d/build.framework.js"
          codeUrl = "/assets/unity3d/build.wasm"
        />
      </div>
  </div>
  );
};

export default GamePage;
