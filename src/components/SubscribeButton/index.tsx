import React from 'react';

import { Container } from './styles';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps ) {
  return (
    <Container>
      <button type="button">
        Subscribe now
      </button>
    </Container>
  );
}