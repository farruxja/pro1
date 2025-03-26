import QrScanner from "qr-scanner";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ScanQRPage = () => {
  const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate();

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text);
      navigate(data.text.replace(window.location.origin, ""));
    }
  };

  const handleError = (err) => {
    console.error("QR skaner xatosi:", err);
  };

  return (
    <div>
      <h1>QR Kodni skaner qiling</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      {scanResult && <p>QR Code: {scanResult}</p>}
    </div>
  );
};

export default ScanQRPage;
