import React, {PropsWithChildren} from 'react';
import Styled from './Styled';

function Paragraph({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-base ${textClassName}`}
      {...props}
    />
  );
}

function Heading1({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-2xl font-bold ${textClassName}`}
      {...props}
    />
  );
}

function Heading2({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-xl font-bold ${textClassName}`}
      {...props}
    />
  );
}

function Heading3({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-lg font-bold ${textClassName}`}
      {...props}
    />
  );
}

function Heading4({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-base font-bold ${textClassName}`}
      {...props}
    />
  );
}

function Heading5({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-sm font-bold ${textClassName}`}
      {...props}
    />
  );
}

function Heading6({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-xs font-bold ${textClassName}`}
      {...props}
    />
  );
}

function Overline({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-xs uppercase ${textClassName}`}
      {...props}
    />
  );
}

function Caption({
  textClassName,
  ...props
}: PropsWithChildren<{textClassName?: string}>) {
  return (
    <Styled.Text
      className={`text-neutral-900 dark:text-neutral-100 text-xs ${textClassName}`}
      {...props}
    />
  );
}

const Text = {
  Paragraph,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Overline,
  Caption,
};

export default Text;
