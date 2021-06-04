import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <Container>
      <button type="button">
        <FaGithub color="04d361" />
        Marcos Paulo
        <FiX color="737380" className="closeIcon" />
      </button>
    </Container>
  ) : (
    <Container>
      <button type="button">
        <FaGithub color="eba417" />
        Sign in with Github
      </button>
    </Container>
  );
}