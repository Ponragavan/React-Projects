import { Suspense } from 'react';
function EventsPage() {

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>} />
  );
}

export default EventsPage;

