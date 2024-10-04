import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './imagePage.css';

import ai from './art/ai.jpg';
import amber from './art/amber.jpg';
import background from './art/background.jpg';
import banner from './art/banner.jpg'
import bladiebabie from './art/bladiebabie.jpg';
import bobagirl from './art/bobagirl.jpg';
import checkedskirtgirl from './art/checkedskirtgirl.jpg';
import corspeparty from './art/corpseparty.jpg';
import cutegal from './art/cutegal.jpg';
import daddyishome from './art/daddyishome.jpg';
import fashionista from './art/fashionista.jpg';
import fireboi from './art/fireboi.jpg';
import hotboi from './art/hotboi.jpg';
import kaguya from './art/kaguya.jpg';
import me from './art/me.jpg'
import mehhh from './art/mehhh.jpg';
import ninjagirl from './art/ninjagirl.jpg';
import pinksunsets from './art/pinksunsets.jpg';
import roymustang from './art/roymustang.jpg';
import skaterboi from './art/skaterboi.jpg';
import stormretry from './art/stormretry.jpg';
import strawhatcrew from './art/strawhatcrew.jpg';
import tanjiro from './art/tanjiro.jpg';
import threekids from './art/threekids.jpg';
import umbrellagirl from './art/umbrellagirl.jpg';
import venti from './art/venti.jpg';
import xiaof from './art/xiaof.jpg';

const art = [
  { src: bladiebabie, name: "Bladie" },
  { src: pinksunsets, name: "Pink Sunsets" },
  { src: threekids, name: "Three Kids" },
  { src: kaguya, name: "Kaguya" },
  { src: banner, name: "Banner" },
  { src: bobagirl, name: "Boba Girl" },
  { src: cutegal, name: "coquette" },
  { src: stormretry, name: "Storm" },
  { src: background, name: "interior" },
  { src: roymustang, name: "Roy Mustang" },
  { src: ai, name: "ai" },
  { src: me, name: "Me" },
  { src: hotboi, name: "Bad and Hot" },
  { src: daddyishome, name: "Daddy's Home" },
  { src: amber, name: "'GO GO BARON BUNNY'" },
  { src: umbrellagirl, name: "Serenity" },
  { src: corspeparty, name: "Corpse Party" },
  { src: mehhh, name: "Mehhh" },
  { src: fashionista, name: "Fashionista" },
  { src: checkedskirtgirl, name: "Checked Skirt" },
  { src: venti, name: "Tone-deaf bard" },
  { src: xiaof, name: "Happy Lantern Rite" },
  { src: ninjagirl, name: "Monochrome" },
  { src: skaterboi, name: "Skater Boi" },
  { src: strawhatcrew, name: "Straw Hat Crew" },
  { src: fireboi, name: "Fire Dancer" },
  { src: tanjiro, name: "Tanjiro" }
];

const ImagePage = () => {
    const { imageName } = useParams();
    const navigate = useNavigate();

    const image = art.find(item => item.name === decodeURIComponent(imageName));

    if (!image) {
        return <div>Image not found</div>;
    }

    return (
        <div className="image-page">
            <button className="back-button" onClick={() => navigate('/')}>Back to Gallery</button>
            <img src={image.src} alt={image.name} className="full-screen-image" />
        </div>
    );
};

export default ImagePage;