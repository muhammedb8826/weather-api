import { Badge } from 'react-bootstrap';

export default function History() {
  return (
    <section className="current-container">
      <Badge bg="danger">API key is limited to get history data. Please check our pricing page and upgrade to higher plan.</Badge>
    </section>
  );
}
