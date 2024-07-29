import React from 'react';
import './Gallery.css';
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
    bladiebabie, pinksunsets,  threekids, kaguya, banner,
    bobagirl, cutegal, stormretry,background,
    roymustang, ai, me, hotboi,daddyishome, amber,
    umbrellagirl, corspeparty, mehhh, fashionista,checkedskirtgirl, venti, 
    xiaof, ninjagirl, skaterboi, strawhatcrew, fireboi, tanjiro
];

const Gallery = () => {
  return (
    <div className="gallery">
      {art.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`Artwork ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
