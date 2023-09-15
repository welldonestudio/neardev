import React from 'react';
import UnityCanvas from '../components/Unity3d';

const GameNearPage = () => {
  return (
    <div>
      <div className="intro-text">
        A simple game developed with Unity.
      </div>
      <div className="intro-text">
        Deployed on{" "}
         <a href="https://testnet.nearblocks.io/address/dsrv-kms.testnet#contract" target='_blank'>near testnet</a>
        .
      </div>
      <div style={{ margin: '30px 200px' }}>
        <UnityCanvas 
          loaderUrl = "/assets/unity3d/near/build.loader.js"
          dataUrl = "/assets/unity3d/near/build.data"
          frameworkUrl = "/assets/unity3d/near/build.framework.js"
          codeUrl = "/assets/unity3d/near/build.wasm"
        />
      </div>
  </div>
  );
};

export default GameNearPage;
