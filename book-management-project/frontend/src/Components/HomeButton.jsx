// src/components/HomeButton.jsx
import { useNavigate } from 'react-router-dom';

function HomeButton() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'left', marginBottom: '1rem' }}>
      <button onClick={() => navigate('/')} style={{ fontSize: '1rem' }}>
        🏠 Home
      </button>
    </div>
  );
}

export default HomeButton;
