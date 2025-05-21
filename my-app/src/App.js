import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import RightMenu from './components/RightMenu';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const posts = [
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/458315032_487378207491526_1272689892531119702_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=-bRrhh7pJREQ7kNvwE_8dDx&_nc_oc=AdlgM-nU-YTROt7Jnr9ET4QAggVS75YjHeF2gN3PY3EKW69j62AhVYoECPDNvtCLoLM&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfJFvMPEM8cEickKHAf1pnuTw7xADpx5M-hlLqfhP8-7oA&oe=6833D622',
      username: 'eckhard_dednam',
      time: '21min Ago',
      image: 'https://media.licdn.com/dms/image/v2/D4E03AQEw6JQ7ddN-Ww/profile-displayphoto-shrink_200_200/B4EZVGvv91H0Ak-/0/1740648677851?e=1753315200&v=beta&t=yS0YWYOEEhvU8cEyttOvY59BDhxHalnldh0riCBClEM',
      likes: '42',
      caption: 'Success'
    },
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.75761-19/499981008_18280277284248243_1846528086172006743_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=100&ccb=7-5&_nc_sid=f7ccc5&_nc_ohc=rY7eoUsnwoIQ7kNvwF4uFYr&_nc_oc=AdkJ9j1iiI_eoJpjhZ5tNhbAfAqozYf8aGRPex5yHhul8ptrwx51y4-O8BgfSYzCrxE&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=E35GtQW7PW2jqkgalOOHhg&oh=00_AfKMwDrToNBcbvVrB8QeQj4QPHc9GKj6pQAJo_0zFPDs8g&oe=6833DCE5',
      username: 'jayps_dejager',
      time: '3 Weeks Ago',
      image: 'https://www.instagram.com/jayps_dejager/p/DE5dGvYt2b37lpAqgCpO1wZYImVzndE8hsFGDI0/',
      likes: '369',
      caption: 'Remember the days when moments were lived, not posted? 💭'
    },
    {
      avatar: 'https://scontent-jnb2-1.cdninstagram.com/v/t51.75761-19/499981008_18280277284248243_1846528086172006743_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=100&ccb=7-5&_nc_sid=f7ccc5&_nc_ohc=rY7eoUsnwoIQ7kNvwF4uFYr&_nc_oc=AdkJ9j1iiI_eoJpjhZ5tNhbAfAqozYf8aGRPex5yHhul8ptrwx51y4-O8BgfSYzCrxE&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=E35GtQW7PW2jqkgalOOHhg&oh=00_AfKMwDrToNBcbvVrB8QeQj4QPHc9GKj6pQAJo_0zFPDs8g&oe=6833DCE5',
      username: 'wtf_etas',
      time: '2d Ago',
      image: 'https://www.instagram.com/jayps_dejager/p/DE5dGvYt2b37lpAqgCpO1wZYImVzndE8hsFGDI0/',
      likes: '420',
      caption: 'Yzerfontein mcnab attemp 1🫦'
    }
  ];

  const accountImages = [
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/458315032_487378207491526_1272689892531119702_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=107&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=AdjJ09HvGuMQ7kNvwF3YEHo&_nc_oc=Adk_GPtdVQG1UP9bPyx5qZEshN3iXGoYhmgaYxWty-mgOoXR9d9aR_w0KXwb4Vz3LqU&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfLrWiJ00tgLW2WpohKTaJIeTfNPbgQSJJlPrN9BSBg01w&oe=683365A2',
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.75761-19/499981008_18280277284248243_1846528086172006743_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=100&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=rY7eoUsnwoIQ7kNvwF4uFYr&_nc_oc=AdkJ9j1iiI_eoJpjhZ5tNhbAfAqozYf8aGRPex5yHhul8ptrwx51y4-O8BgfSYzCrxE&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&_nc_gid=PLCeE4xmtx2dbGNWXQLtDw&oh=00_AfLS4II-H-mKIzQ31_eP6Z05YTVBzYGN6QtcT6BJTN_PsA&oe=68336C65',
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/458205646_517772627511690_3063729271515924130_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=106&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=aQMrmP4WKSoQ7kNvwE6ionV&_nc_oc=AdmXlkwbpjTDyol5ZK8QPb49dmadr0MPr8u-cInlcCzL5RG6sxy434QeEi99aw34aGU&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfJ2y1F5Rd7xr8t-sHhNUezhMsxNu92zStmeC49pzmjqkA&oe=6833F418',
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/465802468_851980453685476_1943523712620449180_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=101&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=wYRyEHG_BXgQ7kNvwFNQuzQ&_nc_oc=AdkYHWsgGczoTr_Jfl1_klOokrV3a0Z2bA7cSMEIbhfmwuGzMgubagrNfAvZI9Qu6u8&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfLkqSZE3rw90_3_knJYU_7KiheJJOD3X1uaCPxYqYgHzw&oe=68335BDA',
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/381396321_2035063010178493_4087018526403217551_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=7-5&_nc_sid=f7ccc5&_nc_ohc=VGRk4ohsHloQ7kNvwF5-6Zv&_nc_oc=AdlwSg4QBxI9HEIqlxqe_G7BMFdil9TnDAOEcgdr2VGXn0VC5noCW2HNxVf8O9rjmo8&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfLm6nThVj-nTYaw0pL8yAMOmVxGSOq6jT6WVqWdBz00VA&oe=68334FD1',
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/463130901_8183763298419429_6506145148204192797_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=7-5&_nc_sid=f7ccc5&_nc_ohc=lmpUKHkGbJ4Q7kNvwE9GIa2&_nc_oc=AdlOkKV2ZIh-dvwNhuaW92rlC1j51AN_pJlU9kTZ3admjn7cYdrMP1ngIZ7170PySaM&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfLEmOE0cw3Jw1m6OI4xV4DGxA8w2L1I-W5kiDyId9JX9Q&oe=68335367',
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/342741024_6120359521380620_4179435342390930407_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=108&ccb=7-5&_nc_sid=bf7eb4&_nc_ohc=OjhbQIfMAugQ7kNvwFhWNxH&_nc_oc=AdnF43mfDmrdC48TAZb_FgVBbSCmWxuH6gSZHJY7xfpq60e3cZsRw0Qmvdg6qG_Bebg&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfJeiXGbtpvlJYnCrp_rPnDrbLp1wJaEQnXVUK_Y2fKvjQ&oe=6833415C',
    'https://scontent-jnb2-1.cdninstagram.com/v/t51.2885-19/436198797_312547781882348_5774687742510960103_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=7-5&_nc_sid=f7ccc5&_nc_ohc=NTlO6lkCZyIQ7kNvwGPnlf9&_nc_oc=Adl3owljbaGu06GIuFZ3kdfusibmJc7IYFVNwgZRk6MPs2gqw3jGCM4mghQXqiFF0bU&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-jnb2-1.cdninstagram.com&oh=00_AfI8SBFBbi6mgAkNBCboSf21N4feP-dxwiEf74mVsrshJg&oe=68334D2C'
  ];

  return (
    <div className="app">
      {user ? (
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <div className="content-block">
              <div className="account-circles">
                {accountImages.map((image, index) => (
                  <div key={index} className="account-circle">
                    <img src={image} alt={`Account ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="post-section">
                {posts.map((post, index) => (
                  <div key={index} className="post">
                    <div className="post-header">
                      <div className="post-avatar" style={{ backgroundImage: `url(${post.avatar})`, backgroundSize: 'cover' }}></div>
                      <span className="post-username">{post.username}</span>
                      <span className="post-time">{post.time}</span>
                    </div>
                    <div className="post-image" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover' }}></div>
                    <div className="post-footer">
                      <div className="post-actions">
                        <span>❤️</span> <span>💬</span> <span>📤</span> <span>💾</span>
                      </div>
                      <div className="post-likes">{post.likes} likes</div>
                      <div className="post-caption">
                        <span className="post-username">{post.username}</span> {post.caption}
                      </div>
                      <input type="text" className="post-comment-input" placeholder="Add a comment..." />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <RightMenu />
        </div>
      ) : (
        <Auth setUser={setUser} />
      )}
    </div>
  );
}

export default App;