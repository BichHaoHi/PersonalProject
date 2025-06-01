import "./PowerApp.css";

function PowerApp({ product, onBack }) {
  return (
    <div className="App">
      <button onClick={onBack} style={{ margin: "10px", padding: "6px 12px" }}>
        ⬅ Quay lại
      </button>
      <h2>Demo some page: {product ? product.name : "Chưa chọn"}</h2>

      {/* Main */}
      <main className="main-content">
        <div class="image-grid">
          <img src="main.png" alt="Demo 1" />
          <img src="features.png" alt="Demo 2" />
          <img src="tickets.png" alt="Demo 3" />
        </div>
      </main>
      <div className="video-container">
        <h3>Video Demo</h3>
        <video controls width="720">
          <source src="demo1.mp4" type="video/mp4" />
          Trình duyệt không hỗ trợ video.
        </video>
      </div>
      <h2>
        Link Product in Power App:{" "}
        <a
          href="https://apps.powerapps.com/play/e/0342ea01-6167-edda-bcff-1ea1c4bc9186/a/94761da4-d493-4d2b-ae5e-9a8b19bb6782?tenantId=2c4a2f61-5992-4bf4-a35f-baa7590804d5&hint=65aab154-88ab-4bb3-a3b7-05a342ea04a8&sourcetime=1748773018037"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mở ứng dụng
        </a>
      </h2>
      {/* Footer */}
      <footer className="footer">
        <p>Phone Number: 0347743943</p>
        <p>Email: ntbichhao.work@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/h%E1%BA%A3o-b%C3%ADch-40b403294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BichHao
          </a>
        </p>
      </footer>
    </div>
  );
}

export default PowerApp;
