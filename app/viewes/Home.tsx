'use client';
import React, { useState } from 'react';
import Forms from './Forms';
import PayForms from './PayForm';
import CarForms from './CarForms';
import './Home.css';
import Loader from './loader';
import BillForms from './BillMain';
export default function Home2(props: any) {
  const [loading, setLoading] = useState(true);

  const handleElement = (id: number) => {
    switch (id) {
      case 1:
        setElement(
          <Forms
            handleElement={handleElement}
            handleGid={handleGid}
            globalid={globalid}
          />
        );

        break;
      case 2:
        setElement(
          <CarForms handleElement={handleElement} globalid={globalid} />
        );

        break;
      case 3:
        setElement(
          <BillForms handleElement={handleElement} globalid={globalid} />
        );

        break;
      case 4:
        setElement(
          <PayForms handleElement={handleElement} globalid={globalid} />
        );
        break;
      default:
        setElement(
          <Forms
            handleElement={handleElement}
            handleGid={handleGid}
            globalid={globalid}
          />
        );
        break;
    }
  };

  const [globalid, setGloabalid] = useState<string | number>();
  const handleGid = (v: any) => {
    setGloabalid(v);
  };
  const [element, setElement] = useState(
    <Forms
      handleElement={handleElement}
      handleGid={handleGid}
      globalid={globalid}
    />
  );

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        justifyItems: 'center',
        padding: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {loading ? <Loader /> : element}
      </div>
      <footer>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </footer>
    </div>
  );
}
