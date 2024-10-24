import { Href, Link, LinkProps } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { Platform } from 'react-native';

// Omitindo 'href' e definindo que 'href' será uma string.
type Props = Omit<LinkProps<string>, 'href'> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      {...rest}
      href={href as unknown as Href<string | object>} // Agora 'href' é aceito como string
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Impede o comportamento padrão de abrir o navegador
          event.preventDefault();
          // Abre o link em um navegador interno
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
