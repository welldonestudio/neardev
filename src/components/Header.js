import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import logoImage from '../assets/images/logo.jpeg';

function Header(props) {

  const { active, error, setError, setActive } = props

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ fontWeight: 'bold', fontSize: '30px' }}>
            <img src={logoImage} alt="WELLDONE Logo" style={{ marginRight: '10px', width: '30px', marginBottom: '5px' }} />
            WELLDONE Gateway
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ssv-web">Staking</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/universal-serializer">Universal Serializer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/game-near">NEAR GAME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/game-sui">Sui GAME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://docs.welldonestudio.io/tutorials/near/rust/near-contract" target={'_blank'}>BUILD</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://docs.welldonestudio.io/wallet/manual/how-to-create-an-account#create-an-account-in-near" target={'_blank'}>DOCUMENTATION</a>
              </li>
            </ul>
            {error && <div style={{ color: 'red', fontSize: '12px', marginRight: '10px' }}>{error}</div>}
            <button className={active ? "btn btn-success" : "btn btn-outline-primary"} onClick={() => {
              if (!window.dapp) {
                setError('Install WELLDONE Wallet');
              } else {
                setActive(true);
              }
            }}>Connect Wallet</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
