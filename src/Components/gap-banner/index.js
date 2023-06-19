import React from 'react'
import gapbanner from '../../assets/Gap_banner.webp'

function GapBanner() {
  return (
    <div>
         <div className="wrapper">
          <div id="row-heading">
            <h2>Bridging the</h2>
            <h1>Gap</h1>
          </div>
          <div className="data gap">
            <p>
              There is one core truth that holds good for every single woman
              from our large pool of 3.5M+ candidates{" "}
              <strong style={{color:'#935073'}}>- Engagement fuels career growth.</strong>
              And there is a huge void when it comes to meaningful career
              engagement for women. That is the void we seek to bridge.
            </p>
            <p>
              HerKey is the place where women can engage with employers,
              mentors, experts and each other to fuel their career growth and
              empower their lives.
            </p>
          </div>
        </div>
          <div id="gap-banner">
            <img src={gapbanner} alt="gap banner" style={{width:'100%'}}/>
          </div>
    </div>
  )
}

export default GapBanner