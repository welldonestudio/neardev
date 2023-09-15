import React from 'react';
import UnityCanvas from '../components/Unity3d';

const GameSuiPage = () => {
  return (
    <div>
      <div className="intro-text">
        A simple game developed with Unity.
      </div>
      <div className="intro-text">
        Deployed on{" "}
         <a href="https://suiexplorer.com/object/0x243923d9bd6a8d341c2b94c0ef1f1ec42faf353291a46a64d85224ff86c62c79?network=testnet" target='_blank'>sui testnet</a>
        .
      </div>
      <div style={{ margin: '30px 200px' }}>
        <UnityCanvas 
          loaderUrl = "/assets/unity3d/sui/build.loader.js"
          dataUrl = "/assets/unity3d/sui/build.data"
          frameworkUrl = "/assets/unity3d/sui/build.framework.js"
          codeUrl = "/assets/unity3d/sui/build.wasm"
        />
      </div>
  </div>
  );
};

export default GameSuiPage;
