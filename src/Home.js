import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img22/Jupiter/T2/Teaser_Header_PC_UNREC_rev.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1663672793"
            title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life"
            price={165}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51PJyvcfPGL._SX321_BO1,204,203,200_.jpg"
          />
          <Product
            id="1380072031"
            title="LG 32 L Convection Microwave Oven (MC3286BRUM, Black)"
            price={17140}
            rating={4}
            image="https://m.media-amazon.com/images/I/91fSgD70z0L._SX679_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={8995}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Fastrack Reflex 3.0 Unisex Activity Tracker"
            price={1765}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={2999}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={99900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={145888}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="1983550031"
            title="Reebok Men's Velocity Runner Lp Running Shoe"
            price={1322}
            rating={4}
            image="https://m.media-amazon.com/images/I/61utX8kBDlL._UY625_.jpg"
          />
          <Product
            id="1805560031"
            title="OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)"
            price={24999}
            rating={3}
            image="https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SX569_.jpg"
          />
        </div>
          <div className="home__row">
          <Product
            id="13550031"
            title="Acer Nitro 5 Amd Ryzen 7 5800H/15.6 Inches Fhd Ips Display Gaming Laptop (16 Gb/256 Gb Ssd/1Tb Hdd/Windows 10 Home/6 Gb Graphics/Nvidia Geforce Rtx 3060/144 Hz,Shale Black, 2.4 Kg)Xbox Gamepass For Pc"
            price={123800}
            rating={5}
            image="https://m.media-amazon.com/images/I/61eB8ZKNuwL._SX569_.jpg"
            />
            <Product
            id="56450031"
            title="ASUS ROG Zephyrus G14 (2021) 14-inch (35.56 cms) QHD 120Hz, AMD Ryzen 9 5900HS, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/Office 2019/Windows 10/Gray/Anime Matrix/1.7 Kg), GA401QM-K2331TS"
            price={129990}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41s5W51LFiL._SY300_SX300_QL70_FMwebp_.jpg"
            />
            <Product
            id="658550031"
            title="Mi Notebook Ultra 3.2K Resolution Display Intel Core I5-11300H 11Th Gen 15.6 Inches Thin Light Laptop(16Gb/512Gb Ssd/Iris Xe Graphics/Windows 11 Home/Ms Office 21/Backlit Kb/Fingerprint Sensor/1.7Kg)"
            price={58990}
            rating={4}
            image="https://m.media-amazon.com/images/I/81RHHnGydgL._SX569_.jpg"
            />
        </div>
        <div className="home__row">
          <Product
            id="150031"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={11999}
            rating={4}
            image="https://m.media-amazon.com/images/I/812YsUxpyfL._SX679_.jpg"
            />
            <Product
            id="564531"
            title="(Renewed) Realme GT 5G Master Edition (Cosmos Black, 8GB RAM, 128GB Storage)"
            price={17581}
            rating={3}
            image="https://m.media-amazon.com/images/I/41leKlqQ0uL.jpg"
            />
            <Product
            id="29395063031"
            title="Amazon Brand - Solimo Elite High Back Mesh Office Chair (Fabric, Black)"
            price={7199}
            rating={3}
            image="https://m.media-amazon.com/images/I/81U34n-jPdL._SY879_.jpg"
            />
        </div>
        <div className="home__row">
          <Product
            id="976419031"
            title="Boat Airdopes 121V2 Bluetooth Truly Wireless"
            price={1299}
            rating={4}
            image="https://m.media-amazon.com/images/I/5161KgWnNEL._SX569_.jpg"
            />
            <Product
            id="3639193031"
            title="Swingzy Cotton Netted Rope Hanging Swing Chair "
            price={1483}
            rating={3}
            image="https://m.media-amazon.com/images/I/61FSSVRUcgL._SX569_.jpg"
            />
        </div>
      </div>
      </div>
  );
}

export default Home;
