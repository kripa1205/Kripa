import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Container, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userInfo));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    navigate('/');
  };

  const orders = [
    { id: 'ORD123', item: 'Blush Heel', total: '₹4,999', status: 'Delivered' },
    { id: 'ORD124', item: 'Winter Boot', total: '₹12,000', status: 'Shipped' },
  ];

  return (
    <>
      <Navbar />
      <Container className="my-5" style={{ maxWidth: '700px' }}>
        <h3 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>My Dashboard</h3>

        <Card className="mb-4 p-3 shadow-sm">
          <h5>Hello, <i>{user?.name}</i></h5>
          <p><strong>Email:</strong> {user?.email}</p>
        </Card>

        <Card className="mb-4 p-3 shadow-sm">
          <h5 className="mb-3">My Orders</h5>
          {orders.map((order, index) => (
            <div key={index} className="border-bottom py-2">
              <strong>{order.item}</strong> — {order.total} — {order.status}
            </div>
          ))}
        </Card>

        <Card className="mb-4 p-3 shadow-sm">
          <h5>Leave Feedback</h5>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Write your feedback..."
          />
          <Button variant="dark" className="mt-2">Submit</Button>
        </Card>

        <div className="text-end">
          <Button variant="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Dashboard;