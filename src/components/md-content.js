/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { colors } from '../styles';

/** Markdown styled components */
const StyledMarkdown = styled(ReactMarkdown)({
  color: colors.grey.darker,

  h1: {
    fontSize: '1.7em',
  },
  h2: {
    fontSize: '1.4em',
  },
  h3: {
    fontSize: '1.2em',
  },
  a: {
    color: colors.pink.base,
  },
  pre: {
    padding: 20,
    borderRadius: 4,
    border: `solid 1px ${colors.silver.dark}`,
    backgroundColor: colors.silver.base,
    code: {
      fontSize: '0.9em',
    },
  },
});

/**
 * Markdown component is a simple style wrapper for markdown content used across our app
 */
function MarkDown({ content }) {
  return <StyledMarkdown children={content} />;
}

export default MarkDown;
