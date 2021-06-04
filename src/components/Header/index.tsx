import React from 'react';

import { SignInButton } from '../SignInButton';

import { Container, HeaderContent, } from './styles';

export function Header() {
  return (
    <Container>
      <HeaderContent>
          <img src="/images/logo.svg" alt="ig.news" />
          <nav>
            <a className="active">Home</a>
            <a>Posts</a>
          </nav>

          <SignInButton />
      </HeaderContent>
    </Container>
  );
}