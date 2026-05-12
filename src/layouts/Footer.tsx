
import { Container } from '../components/Container';
import { useTheme } from '../hooks/useTheme';
import logoLight from '../assets/images/trevon logo masterfile-03.png';
import logoTextLight from '../assets/images/trevon logo masterfile-01.png';
import logoDark from '../assets/images/trevon logo masterfile-04.png';
import logoTextDark from '../assets/images/trevon logo masterfile-02 (1).png';

export const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-white dark:bg-[#111827] border-t border-grey-200 dark:border-white/10 py-12 transition-colors duration-300">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <img key={`footer-logo-${theme}`} src={theme === 'dark' ? logoDark : logoLight} alt="Trevon Logo" className="h-8 w-auto opacity-80" />
          <img key={`footer-logo-text-${theme}`} src={theme === 'dark' ? logoTextDark : logoTextLight} alt="Trevon" className="h-5 w-auto opacity-80 mt-0.5" />
        </div>

        <ul className="flex flex-wrap justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Contact Us', 'Twitter', 'Instagram'].map(
            (link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-grey-500 dark:text-grey-400 hover:text-brand-coral transition-colors"
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="text-sm text-grey-500 dark:text-grey-400">
          &copy; {new Date().getFullYear()} Trevon. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
