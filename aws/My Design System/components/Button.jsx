import { Button } from '@carbon/react';

const tokens = {
  primary: '#7864ff',
  secondary: '#ff6b9d',
  tertiary: '#00f5c4',
  fontFamily: 'DM Mono, monospace',
};

export const MyDesignSystemButton = ({ label, onClick, variant = 'primary' }) => {
  const styles = {
    fontFamily: tokens.fontFamily,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
  };

  return (
    <Button
      kind={variant}
      onClick={onClick}
      style={styles}
    >
      {label}
    </Button>
  );
};

export default MyDesignSystemButton;