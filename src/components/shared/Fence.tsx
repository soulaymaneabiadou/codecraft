import { Fragment } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

interface Props {
  children: any;
  language: Language;
}

export const Fence = ({ children, language }: Props) => {
  return (
    <Highlight
      {...defaultProps}
      code={children.trimEnd()}
      language={language}
      theme={undefined}>
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={className} style={style}>
          <code>
            {tokens.map((line, index) => (
              <Fragment key={index}>
                {line.map((token, index) => (
                  <span key={index} {...getTokenProps({ token })} />
                ))}
                {'\n'}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
