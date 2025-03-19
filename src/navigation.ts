import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/#about') },
    { text: 'Projects', href: getPermalink('/#projects') },
    { text: 'Skills', href: getPermalink('/#skills') },
    {
      text: 'Blog',
      href: getPermalink('/#blog'),
    },
    { text: 'Contact', href: getPermalink('/#contact') },
  ],
  actions: [
    { 
      text: 'Hire Me', 
      href: getPermalink('/#contact'),
      variant: 'primary',
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Projects', href: '#projects' },
        { text: 'Skills', href: '#skills' },
        { text: 'Blog', href: '#blog' },
        { text: 'Contact', href: '#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/yourusername' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/yourusername' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/yourusername' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/yourusername' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Petar Vidakovic. All rights reserved.
  `,
};