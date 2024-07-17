import { Colors, colorsKeyOfType } from '../../styles/colors';
import { Fonts, fontsKeyOfType } from '../../styles/fonts';

export const Text = ({
  font = 'BodyMedium',
  color = 'Black',
  children,
}: {
  font?: fontsKeyOfType;
  color?: colorsKeyOfType;
  children: React.ReactNode;
}) => {
  return (
    <span style={{ ...Fonts[font], color: Colors[color] }}>{children}</span>
  );
};
