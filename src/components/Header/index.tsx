/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';

import { Container, HeaderRight, HeaderLeft, Avatar, TooltipHeader } from './styles';

import SvgArrowBack from '../../assets/SvgArrowBack';
import SvgNotification from '../../assets/SvgNotification';
import SvgMessage from '../../assets/SvgMessage';
import SvgProfile from '../../assets/SvgProfile';
import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.png';

export default function Header() {
  const { name } = useSelector((state: RootStateOrAny) => state.auth);
  const [fixed, setFixed] = useState(null);
  const { pathname } = useLocation();

  return (
    <>
      <Container>
        <HeaderLeft>
          <ul>
            {pathname !== '/dashboard' && (
              <li>
                <Link to="/">
                  <SvgArrowBack />
                  <span>Voltar</span>
                </Link>
              </li>
            )}

            <li>
              <img src={logoImg} alt="logo" />
            </li>
          </ul>
        </HeaderLeft>

        <HeaderRight>
          <ul>
            <li>
              <SvgNotification />
            </li>
            <li>
              <SvgMessage />
            </li>
          </ul>

          <main
            onClick={() => {
              setFixed(!fixed);
            }}
          >
            <p>{name}</p>
            <Avatar src={avatarImg} alt="Avatar" />
          </main>
        </HeaderRight>

        <TooltipHeader fixed={fixed}>
          <ul>
            <li>
              <SvgProfile /> Meu perfil
            </li>
            <li>
              <SvgProfile /> Meus cursos
            </li>
            <li>
              <SvgProfile /> Configurações
            </li>
            <li>
              <SvgProfile /> Sair
            </li>
          </ul>
        </TooltipHeader>
      </Container>
    </>
  );
}
