import React from 'react';
import './RightMenu.css';

const RightMenu = () => {
  const suggestedAccounts = [
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/325935276_1177127159614252_2467561970039277535_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=103&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=mH0XxqOdPvwQ7kNvwEDFClY&_nc_oc=AdkXOIrUSuEH3R9_XS_xzzHkRN-RbAQzjroLhmFSbadI5hIGKaAjDIcMnSjS4-7YzKo&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfJ3_j-xvyiIfCBNBqvNzynRh8yoRbOwXmDN-_UbEV-ycQ&oe=6833DA3D',
      username: 'jonathan_smit_05'
    },
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/403341018_1094867724840497_1231196154610200334_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=x3f4TALCiZ8Q7kNvwH-xT8k&_nc_oc=AdlHPPwZZa1p2IBISWavcrOt_vRu94c60I4pwPWe49VEOTzZ0larXpYoP3wD7GeaJts&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfIDBMEhQErAqq46tPQnlfm0xWEvADxHNkQ86uucTmM4sQ&oe=6833EF69',
      username: 'werner_de_bruto'
    },
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/484085207_677350518148419_1848744151603425085_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=110&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=33og3Sgi4LwQ7kNvwHhKTze&_nc_oc=Adn2Z5ren3dTtI3ANhuBU1KO6y3gIbU2grSkN9pQeTLIv108Egm3Zqv7TvOlo18iDGE&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfJioQTU6gfWh6Oqkzlka2s6llTaGy3Y1sxhu4TT8GHcsA&oe=6834052B',
      username: '__zaannn__'
    },
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/464996289_869421431973013_3531984671183315251_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=111&ccb=7-5&_nc_sid=f7ccc5&_nc_ohc=iegj3jJwFWUQ7kNvwGdSn9i&_nc_oc=Adn0J8G9VNXAxD9KUuQt-GrtlDewnRggSlY1Rpls8gc-VQ0fTiJkjyYZT9405sB_S5U&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfIZHwZ79uASnena8yu5jda4_SoaPvdZ7fd9tgIlIhlC7Q&oe=6833F0AB',
      username: 'anabolic_jayps'
    },
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/472443237_513096317802356_5677648228418942794_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ccb=7-5&_nc_sid=f7ccc5&_nc_ohc=3M05bNJMu1EQ7kNvwHLhxqF&_nc_oc=AdnJqJ1xrBdGGrd1LW5eMaERCoXrsA4vQ_2LCNDXTNZ1U8ufGp5gxP7LJZEw5dMgKMY&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfJgBwPncVg3rVlNWvWFaKoZOiMu3uAoweCqUgYmnjaemg&oe=6833E0DF',
      username: 'pulselusso'
    }
  ];

  return (
    <div className="right-menu">
      <div className="profile-section">
        <div className="profile-avatar">
          <img
            src="https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/458315032_487378207491526_1272689892531119702_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=-bRrhh7pJREQ7kNvwE_8dDx&_nc_oc=AdlgM-nU-YTROt7Jnr9ET4QAggVS75YjHeF2gN3PY3EKW69j62AhVYoECPDNvtCLoLM&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfJxyoeGG_dxOyzeLyhLOD1J9ILDUcFwuMbS5adYS8vM2Q&oe=68340E62"
            alt="Profile"
          />
        </div>
        <div className="profile-info">
          <span className="profile-username">eckhard_dednam</span>
          <span className="profile-name">Eckhard</span>
        </div>
        <button className="switch-button">Switch</button>
      </div>
      <div className="suggested-header">
        <h3>Suggested for you</h3>
        <a href="#" className="see-all">See all</a>
      </div>
      <ul className="suggested-accounts">
        {suggestedAccounts.map((account, index) => (
          <li key={index}>
            <div className="account-avatar">
              <img src={account.avatar} alt={account.username} />
            </div>
            <span className="account-username">{account.username}</span>
            <button className="follow-button">Follow</button>
          </li>
        ))}
      </ul>
      <div className="footer-links">
        <p>
          <a href="#">About</a> • <a href="#">Help</a> • <a href="#">Press</a> • <a href="#">API</a> • <a href="#">Jobs</a> • <a href="#">Privacy</a> • <a href="#">Terms</a> • <a href="#">Locations</a> • <a href="#">Language</a> • <a href="#">Meta Verified</a>
        </p>
        <p>© 2025 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default RightMenu;



