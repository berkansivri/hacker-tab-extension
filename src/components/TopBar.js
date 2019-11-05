/** @jsx jsx */
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import LanguageSelect from './LanguageSelect';
import PeriodSelect from './PeriodSelect';
import { ReactComponent as Logo } from '../images/logo.svg';

const TopBar = ({
  onChangeLanguage,
  selectedLanguage,
  onChangePeriod,
  selectedPeriod,
}) => {
  return (
    <Container>
      <div
        css={css`
          max-width: 1366px;
          display: flex;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <a
          href="https://github.com/huchenme/hacker-tab-extension"
          css={theme => css`
            display: block;
            color: ${theme.rgba(0.38)};
            transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

            &:hover {
              color: ${theme.rgba(1)};
            }
          `}
        >
          <Logo height={40} width={40} fill="currentColor" />
        </a>
        <div
          css={css`
            display: flex;
          `}
        >
          <SelectWrapper>
            <LanguageSelect
              selectedValue={selectedLanguage}
              onChange={onChangeLanguage}
            />
          </SelectWrapper>
          <SelectWrapper width={180}>
            <PeriodSelect
              selectedValue={selectedPeriod}
              onChange={onChangePeriod}
            />
          </SelectWrapper>
        </div>
      </div>
    </Container>
  );
};

TopBar.propTypes = {
  selectedLanguage: PropTypes.string,
  selectedPeriod: PropTypes.string,
  onChangeLanguage: PropTypes.func.isRequired,
  onChangePeriod: PropTypes.func.isRequired,
};

export default React.memo(TopBar);

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.topBar.bg};
  padding: 0 16px;
  height: 56px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  transition: background-color ${props => props.theme.transition};
`;

const SelectWrapper = styled.div`
  width: ${props => (props.width ? props.width : 150)}px;
  margin-right: 24px;

  &:last-of-type {
    margin-right: 0;
  }
`;
