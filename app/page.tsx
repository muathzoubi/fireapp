"use client"
import { SetStateAction, useEffect, useState } from 'react';
import Home2 from './viewes/Home';

export default function Home() {
  const VisitorAPI = require("visitorapi");

const [visitorData, setVisitorData] = useState({}); // store the whole json

const [ipAddress, setIpAddress] = useState("");

const [countryCode, setCountryCode] = useState("");
const [countryName, setCountryName] = useState("");
const [state, setState] = useState("");
const [city, setCity] = useState("");
const [cityLatLong, setCityLatLong] = useState(""); // city center latitude and longitude 

const [currencies, setCurrencies] = useState([]); // currencies data is an array
const [languages, setLanguages] = useState([]); // languages data is an array

const [browser, setBrowser] = useState("");
const [browserVersion, setBrowserVersion] = useState("");

const [deviceBrand, setDeviceBrand] = useState("");
const [deviceModel, setDeviceModel] = useState("");
const [deviceFamily, setDeviceFamily] = useState("");

const [os, setOs] = useState("");
const [osVersion, setOsVersion] = useState("");

useEffect(() => {
  VisitorAPI(
    "7pWqjJxJ15yROTlBnthH",
    (    data: SetStateAction<any>) => {
      setVisitorData(data);
      setIpAddress(data.ipAddress);
      setCountryCode(data.countryCode);
      setCountryName(data.countryName);
      setState(data.region);
      setCity(data.city);
      setCityLatLong(data.cityLatLong);
      setCurrencies(data.currencies);
      setLanguages(data.languages);
      setBrowser(data.browser);
      setBrowserVersion(data.browserVersion);
      setDeviceBrand(data.deviceBrand);
      setDeviceModel(data.deviceModel);
      setDeviceFamily(data.deviceFamily);
      setOs(data.os);
      setOsVersion(data.osVersion);
    }
  );
},[]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        
          <code className="font-mono font-bold">نموذج</code>
          التسجيل&nbsp;
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Home2 />
      </div>
     
    </main>
  );
}
